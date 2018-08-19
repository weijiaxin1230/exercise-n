<template>
    <div>
        <router-link to="/photo">
            <v-touch @swipeleft="left" @swiperight="right">
                <img :src="photoList[index].src" alt="">
            </v-touch>
        </router-link>
    </div>

</template>

<script>
    import { mapState } from 'vuex';
    import Axios from 'axios';
    export default {
        data(){
            return {
                index:this.$route.params.index,
            }
        },
        // created() {
        //     var Index = this.$route.params.index;
        //     Axios.get('photodata.json'+Index)
        //         .then((res) => {
        //             this.photoDetail = res.data;
        //             this.show = true;
        //             console.log(res.data);
        //         })
        // },
        computed:mapState(['photoList']),
        methods:{
            left(){
                this.index++;
            },
            right(){
                this.index--;
            }
        },
    }
</script>

<style scoped>
    div{
        height:9.36rem;
        background-color: black;
       text-align: center;
    }
</style>