<template>
    <div class="SeventhC" id="ElevenC">
        <h16px msg="
      
      Community
    
    "></h16px>
        <p48px msg="
      
      Welcome home, 
      
    " id="ElevenP1"></p48px>
    <p class="ElevenP">developers
    </p>
        <p20px msg="
        
      
        GitHub is home to the world’s largest community of developers and their projects...
      
      " id="ElevenP3"></p20px>
 
    </div>
</template>
<style scoped>
.SeventhC{
    width: 1012px;
  
    margin: 0 auto;
    
    text-align: center;
    margin: 80px auto;
}
.ElevenP{
    font-size: 48px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
}
#Elevenp1{
    margin-bottom: 0px;
}
#ElevenC{
    margin-bottom: 0px;
}
#ElevenP3{
    margin-bottom: 0px;
    height: 70px;
}
</style>
<script>
import h16px from '../views/h16px'
import p48px from '../views/p48px'
import p20px from '../views/p20px'

export default {
    components: {
        h16px,
        p48px,
        p20px,
        
    }
}
</script>
