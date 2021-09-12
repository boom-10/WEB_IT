<template>
   <div class="NavFirst1">
      <NavMould :whitePicture="false" :blackPicture="true" :searchShow="true" :pffffff="false" :navbgTran="true" :btnpffffff="false"
:fanjubg="false" />
<div class="bilbil"></div>
  </div>
</template>

<script>
import NavMould from'./NavMould'
export default {
components:{
    NavMould
}
}
</script>

<style>
.bilbil{
width: 203px;
height: 91px;
background-image: url(../img/bilibili.png);
background-size: contain;
margin-left: 199px;
margin-top: 13px;
}
.NavFirst1{
    width: 100%;
    height: 265px;
    background-color: skyblue;
    background-image: url(../img/17c110d7ef6cb037fcc5ef1c4be7e9bd.jpg);
    background-position: 0px -283px;
    background-size: 100%;
    
}
</style>