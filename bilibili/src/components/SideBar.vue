<template>
  <div class="Bc">
<div class="First">
    <p class="Img2"><img src="../img/paihangbang.png" alt=""></p>
    <p class="FirstP">排行榜</p>
    <p class="FirstP2">换一批</p>
    <p class="ImgP"><img src="../img/换一批.png" alt=""></p>
</div>
<ul class="Second">
    <li class="SeoncdFirstLi" :id="[isActive ? 'active' : '']" @click="tab">
<p class="Number" :id="[isActive ? 'OtherNumber' : ' ']">1</p>
<p class="SecondP1">{{msg4}}</p>
<img src="../img/火.png" alt="">
    </li>
    <li class="SecondSecondLi" :id="[isActive2 ? 'active' : '']" @click="tab2">
       <p class="Number" :id="[isActive2 ? 'OtherNumber' : ' ']">2</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondSecondLi" :id="[isActive3 ? 'active' : '']" @click="tab3">
       <p class="Number" :id="[isActive3 ? 'OtherNumber' : ' ']">3</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondThirdLi">
             <p class="Number1">4</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondThirdLi" >
             <p class="Number1">5</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondThirdLi">
             <p class="Number1">6</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondThirdLi">
             <p class="Number1">7</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondThirdLi">
             <p class="Number1">8</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondThirdLi">
             <p class="Number1">9</p>
<p class="SecondP1">金坷垃本拉在线销售金坷垃</p>
    </li>
    <li class="SecondFourthLi">
        更多...
    </li>
</ul>
  </div>
</template>

<script>
export default {
data(){
    return{
      isActive:false,
      isActive2:false,
      isActive3:false,
    }
    
},
props:{
        msg4:String
    },
methods:{
       tab:function(){
           this.isActive=true;
           this.isActive2=false;
           this.isActive3=false;
       },
       tab2:function(){
           this.isActive2=true;
           this.isActive=false;
           this.isActive3=false;
       },
       tab3:function(){
           this.isActive3=true;
           this.isActive2=false;
           this.isActive=false;
       }
}

}
</script>

<style>
li{
    cursor: pointer;
}
.Img2{
    margin-right: 10px;
}
#OtherNumber{
    background-color: #FFB100;
    color: #242424;
}
#active{
width: 100%;
background: #242424;
box-shadow: inset 0px 2px 8px 1px #141414;

}
.SecondFourthLi{
    width: 287px;
    padding-bottom: 10px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
text-align: right;
margin-top: 3px;
}
.Number1{
       width: 35px;
height: 35px;margin-right: 1px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
text-align: center;
line-height: 35px;
}
.SecondThirdLi{
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 9px;
    height: 50px;
}
.SecondSecondLi{
    height: 62px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: px;
}
.SecondSecondLi>.Number{
margin-left: 9px;
}
.SeoncdFirstLi>img{
    width: 22px;
    height: 22px;
    margin-left: 6px;
}

.Number{
    width: 35px;
height: 35px;
border: 1px solid #FFB100;
border-radius: 10px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
text-align: center;
line-height: 35px;
}
.SecondP1{
    
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
margin-left: 11px;
}
.Bc{
    display: flex;
    flex-direction: column;
    background-color: hsl(0, 0%, 20%);
}
.First{
    display: flex;
    justify-content: center;
}
.FirstP{
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: bold;
color: #FFFFFF;

}
.FirstP2{
    
font-size: 16px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #6F6F6F;
margin-top: 8px;
margin-left: 8px;
}
.ImgP{
    width: 20px;
    height: 20px;
    overflow: hidden;
    margin-top: 8px;
    margin-left: 5px;
}
.ImgP>img{
    width: 20px;
    height: 20px;
    margin-left: -20px;
    filter: drop-shadow(20px 0px 0rem #777577);
}
.Second{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: #242424;
}
.SeoncdFirstLi{
    height: 85px;
    display: flex;
    justify-content: start;
    align-items: center;
}
.SeoncdFirstLi>.Number{
    margin-left: 9px;
}
</style>