<template>
    <div class="h16px">
     {{msg}}
    </div>
</template>
<style scoped>
.h16px{
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace!important;
    font-size: 16px;
    text-align: center;
}
</style>
<script>
export default {
    props: {
        msg:String
    }
}
</script>