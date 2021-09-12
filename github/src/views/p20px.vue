<template>
    <div class="p20px">
        {{msg}}
    </div>
</template>
<style scoped>
.p20px{
    font-size: 20px;
    font-weight: 400;
    width: 700px;
    height: 111px;
    margin: 0 auto;
    margin-bottom: 24px;
    color: #586069;
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}
</style>
<script>
export default {
    props: {
        msg:String
    }
}
</script>