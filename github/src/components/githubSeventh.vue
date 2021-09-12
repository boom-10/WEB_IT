<template>
    <div class="SeventhC">
        <h16px msg="Integrations"></h16px>
        <p48px msg="Build on GitHub"></p48px>
        <p20px msg="
        Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.
      "></p20px>
      <btn1 msg="Learn about integrations "></btn1>
    </div>
</template>
<style scoped>
.SeventhC{
    width: 1012px;
    height: 300px;
    margin: 0 auto;
   
    text-align: center;
    margin: 80px auto;
}
</style>
<script>
import h16px from '../views/h16px'
import p48px from '../views/p48px'
import p20px from '../views/p20px'
import btn1 from '../views/btn1'
export default {
    components: {
        h16px,
        p48px,
        p20px,
        btn1
    }
}
</script>
