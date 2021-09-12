<template>
    <div>
       <ul class="Ul1">
           <li class="SecondLi" id="Li1">
               <div class="LiDiv1">
                   <p class="LiP">打工人深夜拉琴是为何？！</p>
               </div>
               <div class="LiDiv1">
                   <p class="LiP">打工人深夜拉琴是为何？！</p>
               </div>
               
           </li>
           <li class="SecondLi" id="Li2">
               <div class="LiDiv2"><p class="LiP2">震惊！男子竟做出这事儿?!</p>
               <ul class="Ul2">
                   <li   :class="[isActive1 ? 'active' : '']" ><p   :class="[isActive1 ? 'SecondHidden' : '']" @click="toggleActive1"></p></li>
                    <li   :class="[isActive2 ? 'active' : '']" ><p   :class="[isActive2 ? 'SecondHidden' : '']" @click="toggleActive2"></p></li>
                     <li   :class="[isActive3 ? 'active' : '']" ><p   :class="[isActive3 ? 'SecondHidden' : '']" @click="toggleActive3"></p></li>
                      <li   :class="[isActive4 ? 'active' : '']" ><p   :class="[isActive4 ? 'SecondHidden' : '']" @click="toggleActive4"></p></li>
                       <li   :class="[isActive5 ? 'active' : '']" ><p   :class="[isActive5 ? 'SecondHidden' : '']" @click="toggleActive5"></p></li>
               
               </ul>
               <div class="DivImg">更多<div class="Img"><img src="../img/三角形.png" alt=""></div></div>
          
               </div>
           </li>
           <li class="SecondLi" id="Li11"><p class="LiP4">
               珍爱头发<br>详情咨询https://www.bilibili.com/</p></li>
       </ul>
       <cat class="cat"></cat>
    </div>
</template>
<style scoped>
.SecondHidden{
    display: none!important;
}
div{
    display: flex;
}
.SecondLi{
    height: 393px;
}
.Ul1{
    display: flex;
    justify-content: space-around;
    width: 1520px;
margin-left: 200px;
}
#Li1{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
#Li2{
    flex: 2;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
}
.LiDiv1{
    height: 187px;
    background-color: skyblue;
    background-image: url(../img/a3ea3bd2ea6d0e9cc1610504c0801d36.jpg);
    background-size: 110%;
    background-position: -30px -35px;
    cursor: pointer;
}
.LiP{
   margin-top: 150px;
    margin-left: 7px;
height: 20px;
font-size: 20px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF

}
.LiDiv2{
    background-image: url(../img/4db0c456b24cb22da43331d0aa9a9c2b.jpeg);
    width: 100%;
    height: 100%;
   background-size: 105%;
   background-position: 0px -38px;
   display: flex;
   cursor: pointer;
}
.LiP2{
margin-top: 352px;
margin-left: 12px;
height: 20px;
font-size: 20px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
}
.Ul2>li>p{
width: 15px;
height: 15px;
background-image: url(../img/bai.png);
box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.33);
border-radius: 50%;
}
.Ul2>li{
    width: 22px;
    height: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 1px;
    margin-left: 13px;
}

.Ul2{
    display: flex;
   justify-content: space-around;
   margin-left: 200px;
   margin-top: 353px;
   height: 20px;
   align-items: center;
}
.Img>img{
width: 30px;
height: 30px;
margin-left: -30px;
filter: drop-shadow(30px 0px 0rem #fff);
}
.Img{
    display: inline-block;
    width: 30px;
height: 30px;
overflow: hidden;

}
.DivImg{
font-size: 20px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
margin-top: 350px;
height: 20px;
margin-bottom: 17px;
margin-left: 30px;
display: flex;
}
#Li11{
    flex: 1;
    display: flex;
    background-image: url(../img/88bfcd9da7d1d487c28b60de957e390b.jpeg);
    background-size: 100%;
    background-repeat: no-repeat;
   
   cursor: pointer;
}
.LiP4{
    width: 316px;
font-size: 20px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FDFDFD;
line-height: 30px;
margin-top: 319px;
margin-left: 41px;
}
.active{
    /* background-color: !important; */
    background-image: url(../img/猫猫.png)!important;
    background-size: 100%;
    width: 22px!important;
    height: 18px!important;
    overflow: hidden;
    background-position: 0px 0px;
}
.cat {
    float: right;
    margin-left: 0px;
    position: relative;
}
</style>
<script>
import cat from './cat'
export default {
    components:{
        cat
    },
    data(){
        return{
            isActive1:false,
            isActive2:false,
            isActive3:false,
            isActive4:false,
            isActive5:false
        }
    },
    methods: {
        toggleActive1:function(){
            this.isActive1=true,
            this.isActive2=false,
            this.isActive3=false,
            this.isActive4=false,
            this.isActive5=false
        },
        toggleActive2:function(){
            this.isActive2=true,
            this.isActive1=false,
            this.isActive3=false,
            this.isActive4=false,
            this.isActive5=false
        },
        toggleActive3:function(){
            this.isActive3=true,
            this.isActive2=false,
           this.isActive1=false,
            this.isActive4=false,
            this.isActive5=false
        },
        toggleActive4:function(){
            this.isActive4=true,
            this.isActive2=false,
            this.isActive3=false,
            this.isActive1=false,
            this.isActive5=false
        },
        toggleActive5:function(){
            this.isActive5=true,
            this.isActive2=false,
            this.isActive3=false,
            this.isActive4=false,
            this.isActive1=false 
        },
    }
}
</script>