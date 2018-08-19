<template>
<div @click="$emit('xxx',big)">
    <img :src="photo.src" alt="">
</div>

</template>

<script>
    export default {
        props:['photo','big'],
        methods:{

        }

    }
</script>

<style scoped>
div{
    width: 2rem;
    height: 2rem;
    float: left;
}
div img{
    width: 2rem;
    height: 2rem;
}
</style>