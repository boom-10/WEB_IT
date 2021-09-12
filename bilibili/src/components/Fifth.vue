<template>
    <div class="Fc">
<Title msg="美食" msg2="2880w人和你一起品尝美食~" msg3="" :mg4="obj" :mg5="obj2"></Title>
<ul class="FirstUl">
    <li class="FirstUlLi1">
        <ul class="SecondUl">
            <li class="Li1"><div class="LiDiv">
                <div class="Img2"><img src="../img/播放.png" alt=""></div>
                <span>999</span>
                <div class="Img3"><img src="../img/点赞数.png" alt=""></div>
                <span class="span1">999</span>
               </div>
            <div class="LiDiv1"><div class="Li1Div"></div>
            <div class="Li1Div2">
                <p class="p1"><img src="../img/UP主.png" alt=""></p>
                <p class="p4">干饭干饭</p>
                <p class="p2">我爱干饭</p>
                <p class="p3">今天你干饭了吗？干饭人绝不认输！</p>
            </div>
            </div>
            </li>
            <li class="Li1"><div class="LiDiv">
                <div class="Img2"><img src="../img/播放.png" alt=""></div>
                <span>999</span>
                <div class="Img3"><img src="../img/点赞数.png" alt=""></div>
                <span class="span1">999</span>
               </div>
            <div class="LiDiv1"><div class="Li1Div"></div>
            <div class="Li1Div2">
                <p class="p1"><img src="../img/UP主.png" alt=""></p>
                <p class="p4">干饭干饭</p>
                <p class="p2">我爱干饭</p>
                <p class="p3">今天你干饭了吗？干饭人绝不认输！</p>
            </div>
            </div>
            </li>
            <li class="Li1"><div class="LiDiv">
                <div class="Img2"><img src="../img/播放.png" alt=""></div>
                <span>999</span>
                <div class="Img3"><img src="../img/点赞数.png" alt=""></div>
                <span class="span1">999</span>
               </div>
            <div class="LiDiv1"><div class="Li1Div"></div>
            <div class="Li1Div2">
                <p class="p1"><img src="../img/UP主.png" alt=""></p>
                <p class="p4">干饭干饭</p>
                <p class="p2">我爱干饭</p>
                <p class="p3">今天你干饭了吗？干饭人绝不认输！</p>
            </div>
            </div>
            </li>
            <li class="Li1"><div class="LiDiv">
                <div class="Img2"><img src="../img/播放.png" alt=""></div>
                <span>999</span>
                <div class="Img3"><img src="../img/点赞数.png" alt=""></div>
                <span class="span1">999</span>
               </div>
            <div class="LiDiv1"><div class="Li1Div"></div>
            <div class="Li1Div2">
                <p class="p1"><img src="../img/UP主.png" alt=""></p>
                <p class="p4">干饭干饭</p>
                <p class="p2">我爱干饭</p>
                <p class="p3">今天你干饭了吗？干饭人绝不认输！</p>
            </div>
            </div>
            </li>
            <li class="Li1"><div class="LiDiv">
                <div class="Img2"><img src="../img/播放.png" alt=""></div>
                <span>999</span>
                <div class="Img3"><img src="../img/点赞数.png" alt=""></div>
                <span class="span1">999</span>
               </div>
            <div class="LiDiv1"><div class="Li1Div"></div>
            <div class="Li1Div2">
                <p class="p1"><img src="../img/UP主.png" alt=""></p>
                <p class="p4">干饭干饭</p>
                <p class="p2">我爱干饭</p>
                <p class="p3">今天你干饭了吗？干饭人绝不认输！</p>
            </div>
            </div>
            </li>
            <li class="Li1"><div class="LiDiv">
                <div class="Img2"><img src="../img/播放.png" alt=""></div>
                <span>999</span>
                <div class="Img3"><img src="../img/点赞数.png" alt=""></div>
                <span class="span1">999</span>
               </div>
            <div class="LiDiv1"><div class="Li1Div"></div>
            <div class="Li1Div2">
                <p class="p1"><img src="../img/UP主.png" alt=""></p>
                <p class="p4">干饭干饭</p>
                <p class="p2">我爱干饭</p>
                <p class="p3">今天你干饭了吗？干饭人绝不认输！</p>
            </div>
            </div>
            </li>
            
 
    
            
        </ul>
    </li>
    <li class="FirstUlLi2">
        <div class="Li2Div">
            <SideBar msg4="干饭人绝不认输！！！"></SideBar>
        </div>
        </li>
</ul>
    </div>
</template>
<style scoped>
.p4{
    width: 64px;
font-size: 16px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #666566;
margin-top: 3px;
margin-left: 7px;

}
.Li2Div{
    background-color: skyblue;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 29px;
}
.Fc{
    width: 1520px;
    margin: auto;
    margin-top: 100px;
}
.FirstUl{
    display: flex;
}
.FirstUlLi1{
    flex: 3.1;
}
.FirstUlLi2{
    flex: 0.8;
    margin-left: 18px;
    background-color: pink;
    float: right;
    padding-bottom: 10px;
    position: relative;
}
.LiDiv{
    background-image: url(../img/07df915568cc950fb12d2fc22a317a0e.jpg);
    background-size: 101%;
    background-position: 0px -6px;
    height: 188px;
    margin-bottom: 9px;
    display: flex;
}
.SecondUl{
    display: flex;
    flex-wrap: wrap;
}
.Li1{
width: 32.3%;
margin-top: 18px;

}
.SecondUl li:nth-child(2){
    margin-left: 18px;
    margin-right: 18px;
}
.SecondUl li:nth-child(5){
    margin-left: 18px;
    margin-right: 18px;
}
.Li1Div{
    width: 60px;
    height: 60px;
    background-image: url(../img/339f3a032792bece5f6c93774acd540f.jpg);
    background-size: 100%;
    border-radius: 50%;
    margin-right: 0px;
    display: flex;
}
.LiDiv1{
    display: flex;
}
.Li1Div2{
    margin-top: 0px;
    margin-left: 8px;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
}
.p1{
width: 26px;
height: 26px;
overflow: hidden;
}
.p1>img{
    width: 26px;
    height: 26px;
    margin-left: -26px;
    filter: drop-shadow(26px 0px 0rem #777577);
}
.p2{
font-size: 14px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A09FA0;
margin-top: 5px;
margin-left: 9px;
height: 14px;
}
.p3{
width: 300px;
height: 19px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
margin-top: 7px;
}
.Img2{
    width: 25px;
    height: 25px;
    overflow: hidden;
display: inline-block;
margin-top: 160px;
margin-left: 6px;
margin-right: 9px;
}
.Img3{
     width: 25px;
    height: 25px;
    overflow: hidden;
display: inline-block;
margin-top: 160px;
margin-left: 6px;
margin-right: 9px;
}
span{
    font-size: 16px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFEFF;
margin-top: 164px;
}
.Img2>img{
    width: 25px;
    height: 25px;
    margin-left: -25px;
    filter: drop-shadow(25px 0px 0rem #FFFFFF);
}
.Img3>img{
    width: 25px;
    height: 25px;
    margin-left: -25px;
    filter: drop-shadow(25px 0px 0rem #FFFFFF);
}
</style>
<script>
import Title from './Title'
import SideBar from './SideBar.vue'
import img2 from '../img/美食.png'
import img5 from '../img/火.png'
export default {
    components:{
        Title,
        SideBar
    },
   data(){
       return{
           obj:
               {img:img2},
               obj2:{img:img5}
           
       }
   }
}
</script>