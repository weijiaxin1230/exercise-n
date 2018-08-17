<template>
<ul class="footer">
        <!--<li v-for="menu in menulist" @click='changebg(menu)' :style="{background:bgcolor}">-->
        <li v-for="menu in menulist" @click='changecolor(menu)' :style="{background:indexcolor}">
           <router-link :to="menu.path">{{menu.name}}</router-link>
        </li>

</ul>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        props:['menulist'],
        data(){
            return{
                bgcolor:'',
            }
        },
        methods:{
            // changebg(menu){
            //     this.bgcolor=menu.bgColor;
            //     this.$emit('change',menu);
            // },
            changecolor(menu){
                this.$store.dispatch('changecolor',menu);
            }
        },
        computed:mapState(['indexcolor']),
    }
</script>

<style lang="scss">
    .footer {
        height: 1rem;
        width: 100%;
        background: rgb(33, 150, 243);
        color: #fff;
        position: fixed;
        bottom: 0;
        line-height: 1rem;
        display: flex;
        li{
            flex-grow: 1;
            text-align: center;
            a{
                color:#ccc;
                outline: none;
                &.router-link-active{
                    color:#fff;
                }
            }
        }
    }
</style>