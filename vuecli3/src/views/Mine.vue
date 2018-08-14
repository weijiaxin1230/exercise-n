<template>
    <div class="about">
        <h1>欢迎来到我的页面</h1>
        <router-view/>
        <br>
        <router-link :to="{name:'test1',params:{name:'zs',age:45}}">test1</router-link> |
        <router-link to="/test2/lisi/24">test2</router-link>
    </div>
</template>
<script>
    export default[

    ]
</script>