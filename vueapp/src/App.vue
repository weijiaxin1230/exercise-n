<template>
  <div id="app">
    <!--<Cheader  :changebg="bgcolor" :changeti="title"></Cheader>-->
    <Cheader></Cheader>
    <router-view class="content"/>
    <Cfooter :menulist="menulist"></Cfooter>
    <!--<Cfooter @change="changebg" :menulist="menulist"></Cfooter>-->

  </div>
</template>
<script>
  import Cheader from '@/components/Cheader.vue';
  import Cfooter from '@/components/Cfooter.vue';

  export default{
      data(){
          return{
              menulist:[
                  {
                      name:'电影',
                      path:'/movie',
                      bgColor:'rgb(33,150,243)',
                  },
                  {
                      name:'音乐',
                      path:'/music',
                      bgColor:'rgb(0,15,136)',
                  },
                  {
                      name:'书籍',
                      path:'/book',
                      bgColor:'rgb(121,85,72)',
                  },
                  {
                      name:'图片',
                      path:'/photo',
                      bgColor:'black',
                  },
              ],
              // bgcolor:'',
              // title:'电影'
          }
      },
      methods:{
          // changebg(menu){
          //     this.bgcolor=menu.bgColor;
          //     this.title=menu.name;
          // }
      },
      components:{
          Cfooter,
          Cheader,
      },
      created() {
          var path = this.$route.path;
          var menu = this.menulist.filter(elem => {
              return elem.path == path;
          })
          this.$store.dispatch('changecolor',menu[0]);
      }
    }
</script>
<style lang="scss">
  .content{
    margin:1rem 0;
  }
</style>
