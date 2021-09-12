<template>
  <div class="Sign">
      <SignNav></SignNav>
      <div class="Background">
          <img src="../img/bilibili2.png" alt="" class="Img1">
          <img src="../img/xing.png" alt="" class="img2">
      </div>
      <div class="SignC">
          <div class="btn">
              <button @click="tab1" :id="[isActive ? 'active' : ' '] ">登录</button>
              <button @click="tab2" :id="[isActive2 ? 'active' : ' ']">注册 </button>
          </div>
          <component :is="currentComponents"/>
          <!-- <LogIn></LogIn>
          <Register></Register> -->
      </div>
      <Fonter></Fonter>

  </div>
</template>

<script>
import Fonter from '../components/Fonter'
import SignNav from '../components/SignNav'
import LogIn from '../components/LogIn'
import Register from '../components/Register'
export default {
components:{
    Fonter,
    SignNav,
    LogIn,
    Register
},
data(){
    return {
        currentComponents: 'LogIn',
        isActive:true,
        isActive2:false,
    }
    
},
methods:{
        tab1:function(){
         this.isActive2=false;
         this.isActive=true;
         this.currentComponents='LogIn'
         console.log(1);
        },
        tab2:function(){
            this.isActive2=true;
            this.isActive=false;
            this.currentComponents='Register'
        }
    }
}
</script>

<style>

.SignC{
    height: 953px;
    /* width: 1920px; */
    background-color: #343434;
}
.Background{
/* width: 1920px; */
height: 132px;
background: #242424;
border-top: 1px solid #000;
display: flex;
}
.Img1{
width: 199px;
height: 89px;
margin-top: 28px;
margin-left: 124px;
}
button{
    font-family: Microsoft YaHei UI;
    color: #A3A3A3;
    font-size: 40px;
    margin-left: 40px;
    background-color: transparent;
    border: transparent;
    outline: transparent;
}
#active{
font-size: 45px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFB100;
background-color: transparent;
background-color: transparent;
border: transparent;
outline: transparent;
}
.btn{
    margin-left: 855px;
    margin-top: 114px;
}

</style>