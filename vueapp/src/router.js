import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import Music from './views/music/Music.vue';
import Book from './views/book/Book.vue';
import Photo from './views/photo/Photo.vue';
import Top from './views/movie/Top.vue';
import Today from './views/movie/Today.vue';
import Dang from './views/movie/Dang.vue';
import Moviedetail from './views/movie/Moviedetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/movie',
        name: 'movie',
        component:Movie,
        children:[
            {
                path: '/top',
                name: 'top',
                component:Top,
            },
            {
                path: '/today',
                name: 'today',
                component:Today,
            },
            {
                path: '/dang',
                name: 'dang',
                component:Dang,
            },
        ]
    },
    {
        path: '/music',
        name: 'music',
        component:Music,
    },
    {
        path: '/book',
        name: 'book',
        component:Book,
    },
    {
        path: '/photo',
        name: 'photo',
        component:Photo,
    },
    {
        path: '/moviedetail/:id',
        name: 'moviedetail',
        component:Moviedetail,
    }
  ],
});
