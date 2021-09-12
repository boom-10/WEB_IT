<template>
    <div class="Fc">
<Title msg="特别推荐" :mg4="obj" :mg5="obj2"></Title>
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
                <p class="p4">金坷垃分拉</p>
                <p class="p2">小姐姐倾力推荐！</p>
                <p class="p3">
                                放了金坷垃，肥料早当家。

                            </p>
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
                <p class="p4">金坷垃分拉</p>
                <p class="p2">小姐姐倾力推荐！</p>
                <p class="p3">
                                放了金坷垃，肥料早当家。

                            </p>
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
                <p class="p4">金坷垃分拉</p>
                <p class="p2">小姐姐倾力推荐！</p>
                <p class="p3">
                                放了金坷垃，肥料早当家。

                            </p>
            </div>
            </div>
            </li>
            
    
            
        </ul>
    </li>
    <li class="FirstUlLi2">
        
        </li>
</ul>
    </div>
</template>
<style scoped>
.p4{
width: 91px;
height: 19px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #666566;



}
.Li2Div{
    background-color: skyblue;
    width: 100%;
    height: 100%;
}
.Fc{
    width: 1520px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 68px;
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
    width: 320px;
height: 258px;
margin-top: 20px;
background-image: url(../img/703228b137907edbb9bd97490f1c31f9.jpg);
background-size: 120%;
background-position: -30px 0;
}
.LiDiv{
    background-image: url(../img/timg4.jpg);
    background-size: 103%;
    background-position: -19px -47px;
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
    background-image: url(../img/bddaaa92fef04986418e9953349dc9c3.jpeg);
    background-size: 180%;
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
margin-top: 2px;
}
.Img2{
    width: 20px;
    height: 20px;
    overflow: hidden;
display: inline-block;
margin-top: 162px;
margin-left: 6px;
margin-right: 3px;
}
.Img3{
     width: 20px;
    height: 20px;
    overflow: hidden;
display: inline-block;
margin-top: 160px;
margin-left: 15px;
margin-right: 2px;
}
span{
    font-size: 14px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFEFF;
margin-top: 164px;
}
.Img2>img{
    width: 20px;
    height: 20px;
    margin-left: -20px;
    filter: drop-shadow(20px 0px 0rem #FFFFFF);
}
.Img3>img{
    width: 20px;
    height: 20px;
    margin-left: -20px;
    filter: drop-shadow(20px 0px 0rem #FFFFFF);
}
</style>
<script>
import Title from './Title.vue'
import img4 from '../img/推荐.png'
import img6 from '../img/black.png'
export default {
    components:{
        Title,
       
    },
       data(){
       return{
           obj:
               {img:img4},
           obj2:{img:img6}
       }
   }

}
</script>