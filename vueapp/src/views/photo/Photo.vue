<template>
    <div class="photo">
            <Photolist v-for="(val,index) in photoList" :photo="val" :big="index" @xxx="getDetail(val,index)"></Photolist>
    </div>
</template>

<script>
    import Axios from 'axios';
    import Photolist from '@/views/photo/Photolist.vue'
    // import Photodetail from '@/views/photo/Photodetail.vue'

    export default {
        data(){
            return{
                photoList:[],
            }
        } ,
        created(){
            Axios.get('data/photodata.json')
                .then((res)=>{
                    this.photoList = res.data.photoData;
                    this.$store.dispatch('setPhoto',this.photoList);
                })
        },
        methods:{
            getDetail(val,index){
                this.$router.push('/Photo/'+index);
            }
        },
        components:{
            Photolist,
            // Photodetail
        },


    }

</script>

<style lang="scss">
.photo{
    margin: 1rem 0;
}

</style>