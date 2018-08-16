<template>
    <!--<div class="header" :style="{background:changebg}">-->
    <div class="header" :style="{background:indexcolor}">

        <span class="header-home">首页</span>
        <h1 class="header-title">{{indextitle}}</h1>
        <!--<h1 class="header-title">{{changeti}}</h1>-->
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default{
        props:['changebg','changeti'],
        computed:mapState(['indexcolor','indextitle']),
    }
</script>

<style lang="scss">
    .header{
        height: 1rem;
        width: 100%;
        background:rgb(33, 150, 243);
        color: #fff;
        position:fixed;
        top:0;
        line-height: 1rem;
        & .header-home{
            font-size: 16px;
        }
        & .header-title{
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
        }
    }
</style>