<template>
    <div class="about">
        <h1>我是componentB{{msg}}{{$store.state.count}}</h1>
    </div>
</template>
<script>
    export default{
        props:['msg'],
    }
</script>