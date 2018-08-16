<template>
    <div class="movie">
        <ul>
            <li v-for="movie in movielist">
                <div class="movie-img">
                    <img :src="movie.images.small" alt="">
                </div>
                <div class="movie-txt">
                    <h3>{{movie.title}}</h3>
                    <p>观众评分: <span>{{movie.rating.average}}</span></p>
                    主演: <span v-for="actor in movie.casts">{{actor.name }} </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
       data(){
           return {
               movielist:[]
           }
       },
        created(){
            Axios.get('/movie.json')
            .then((res)=>{
                this.movielist = res.data.subjects;
                console.log(this.movielist);
            });
        }
    }
</script>

<style lang="scss">
    .movie li{
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

</style>