<template>
    <div class="SeventhC">
        <h16px msg="
      GitHub for teams
    "></h16px>
        <p48px msg="
      A better way to work together
    "></p48px>
        <p20px msg="
        
      GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.
    
      "></p20px>
      <btn1 msg="Sign up your team"></btn1>
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
