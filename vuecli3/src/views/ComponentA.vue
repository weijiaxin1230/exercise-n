<template>
    <div class="about">
        <h1>我是componentA</h1>
        <component-b :msg="msg"></component-b>
        <component-c @xx="fn"></component-c>
        {{msg}}
    </div>
</template>
<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from '@/views/ComponentC.vue';
    export default{
        data(){
            return {
                msg:0
            }
        },
        components:{
            ComponentB,
            ComponentC
        },
        methods:{
            fn(){
                this.msg++;
                console.log(this.msg);
            }
        }
    }
</script>