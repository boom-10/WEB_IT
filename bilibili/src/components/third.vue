<template>
    <div class="TC">
        <Title msg="推广" msg2="
                                号外号外!金坷垃大降价啦！
                            " msg3="
                                点击查看详情
                            "
                            :mg4="obj" :mg5="obj2"></Title>
        <ul>
            <li class="Li1"><div class="LiDiv">
                <div class="Img4"><img src="../img/广告.png" alt=""></div>
            </div>
            <p class="Lip">
                金坷垃本拉</p>
                <p class="Lip2">
                    两个世界，一袋坷垃</p>
                    <p class="Lip3">
                        肥料就选金坷垃！</p>
                        </li>
<li class="Li1"><div class="LiDiv1"></div>
                <p class="Lip2">
                    软妹自拍，就是不一样！呜呜呜好美啊！！!</p>
<div class="Lip3">
    <div class="Img3"><img src="../img/UP主.png" alt=""></div>
    <p class="Lip4">仙仙仙女</p>
</div>
</li>
                        <li class="Li1"><div class="LiDiv1"></div>
                <p class="Lip2">
                    软妹自拍，就是不一样！呜呜呜好美啊！！!</p>
<div class="Lip3">
    <div class="Img3"><img src="../img/UP主.png" alt=""></div>
    <p class="Lip4">仙仙仙女</p>
</div>
</li>
            <li class="Li2">
                <div class="LiDiv">
                    
                </div>
                <p class="P5">【专栏】符号学视角下小猪佩奇的寓意
 
                            </p>
                                            <p class="P6">与内涵分析
                            </p>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.Img4{
    width: 30px;
    height: 30px;
    overflow: hidden;
    margin-top: 5px;
    margin-left: 5px;
}
.Img4>img{
    width: 30px;
    height: 30px;
    margin-left: -30px;
    filter: drop-shadow(30px 0px 0rem #FFFFFF);
}
.TC{
    width: 1520px;
    margin: auto;
}
.Li1{
flex: 1;
}
.Li2{
    flex: 0.8;
    margin-left: 27px;
}
ul{
    display: flex;
    margin-top: 22px;
}
li:nth-child(2){
    margin-left: 20px;
    margin-right: 20px;
}
.LiDiv{
    background-image: url(../img/7e14dc6ea0305a50bdb3762a98b8dbaf.jpg);
    background-size: 100%;
    background-position: 0px -4px;
    height: 188px;
    margin-bottom: 9px;
    display: flex;
}
.Li2>.LiDiv{
    background-image: url(../img/339f3a032792bece5f6c93774acd540f.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.LiDiv1{
    background-image: url(../img/timg1.jpg);
    background-size: 100%;
    background-position: 0px -10px;
    height: 188px;
    margin-bottom: 9px;
}
.Lip{
    display: inline-block;
    width: 94px;
height: 19px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: bold;
color: #FEFEFE;

}
.Lip2{
    display: inline-block;
height: 19px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
margin-left: 5px;
}
.Lip3{
font-size: 14px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A09FA0;
margin-top: 7px;
display: flex;
margin-left: 5px;
}
.Img3>img{
    width: 20px;
    height: 20px;
    margin-left: -20px;
    filter: drop-shadow(20px 0px 0rem #898989);
}
.Img3{
    width: 20px;
    height: 20px;
    overflow: hidden;
    display: inline-block;
}
.Lip4{
    margin-left: 6px;
}
.P5{
font-size: 16px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFEFF;
text-align: left;
}
.P6{
    padding-left:6px ;
    font-size: 16px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFEFF;
margin-top: 3px;
}
</style>
<script>
import img3 from '../img/推广.png'
import Title from './Title'
import img5 from '../img/火.png'
export default {
    components:{
        Title
    },
   data(){
       return{
           obj:
               {img:img3},
               obj2:{img:img5}
           
       }
   }
}
</script>