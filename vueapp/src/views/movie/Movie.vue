<template>
    <div class="movie">
        <ul class="movieheader">
            <li>
                <router-link :to="{name:'top'}">top</router-link>
            </li>
            <li>
                <router-link :to="{name:'today'}">today</router-link>
            </li>
            <li>
                <router-link :to="{name:'dang'}">dang</router-link>
            </li>
        </ul>
        <ul class="moviebody">
            <Movielist v-for="movie in movielist" :movie=movie  @click.native="getDetail(movie)"></Movielist>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
        <div v-show="isEnd">
            到底了...
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import Movielist from '@/views/movie/Movielist.vue';
    export default {
       data(){
           return {
               movielist:[],
               // mmlist:[
               //     {
               //         name:'top250',
               //         path:'/top',
               //     },
               //     {
               //         name:'今日',
               //         path:'/today',
               //     },
               //     {
               //         name:'榜单',
               //         path:'/list',
               //     },
               // ],
               isShow:false,
               isEnd:false,
           }
       },
        created(){
            // Axios.get('/movie.json?')
            // .then((res)=>{
            //     this.movielist = res.data.subjects;
            //     console.log(this.movielist);
            // });
            this.getData();
            window.onscroll=()=> {
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var clientHeight = document.documentElement.clientHeight;
                if(scrollTop + clientHeight == scrollHeight && !this.isEnd){
                    this.isShow = true;
                    this.getData();
                }
            }
        },
        methods:{
            getData(){
                Axios.get('/movie.json')
                .then((res)=>{
                    var arr = res.data.subjects.slice(this.movielist.length,this.movielist.length+5);
                    this.movielist = [...this.movielist,...arr];
                    this.isShow = false;
                    if(arr.length < 5){
                        this.isEnd = true;
                    }
                });
            },
            getDetail(movie){
                this.$router.push('/moviedetail/'+movie.id);
            }
        },
        components:{
            Movielist,
        }
    }
</script>

<style lang="scss">
    .movieheader {
        margin-top:1rem;
        height: 1rem;
        width: 100%;
        background: rgb(33, 150, 243);
        color: #fff;
        position: fixed;
        top: 0;
        line-height: 1rem;
        display: flex;
        li{
            font-size: 20px;
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

    .moviebody {
        margin-top: 2rem;
    }
    .moviebody li{
        display: flex;
        padding:10px;
        .movie-img{
            flex-grow: 1;
            width:0;
        }
        .movie-txt{
            flex-grow: 3;
            width:0;
            margin-left: 20px;
            .aver{
                color:orange;
            }
        }
    }
    .loading{
        text-align: center;
    }

</style>