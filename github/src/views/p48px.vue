<template>
    <div class="p48px">
{{msg}}
    </div>
</template>
<style scoped>
.p48px{
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 48px;
    font-weight: 500;
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