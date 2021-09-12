<template>
    <div>
        <button class="btn1">{{msg}}
        </button>
    </div>
</template>
<style scoped>
.btn1{
    color: #1074e7;
    background-color: hsla(0,0%,100%,0);
    border-color: rgba(16,116,231,.5);
    padding: 20px 32px;
    font-size: 16px;
    border-radius: 5px;
}
.btn1:hover{
    border-color: #1074e7;
    color: #0366d6;
    transition: all 0.5s;
}
</style>
<script>
export default {
    props: {
        msg:String
    }
}
</script>