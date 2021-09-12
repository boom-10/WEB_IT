<template>
<div>
    <ul class="OFirstUl">
    <li class="FirstLi">
        <div class="First1"><img class="Img1" src="../img/动态.png" alt=""></div>
        <span>动态</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/首页.png" alt=""></div>
        <span>首页</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/排行榜.png" alt=""></div>
        <span>排行榜</span>
    </li>
     <li class="FirstLi">
       <div class="First1"><img src="../img/频道.png" alt=""></div>
        <span>频道</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/活动.png" alt=""></div>
        <span>活动</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/课堂.png" alt=""></div>
        <span>课堂</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/小黑屋.png" alt=""></div>
        <span>小黑屋</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/直播.png" alt=""></div>
        <span>直播</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/音乐.png" alt=""></div>
        <span>音乐Plus</span>
    </li>
     <li class="FirstLi">
        <div class="First1"><img src="../img/人群.png" alt=""></div>
        <span>我的</span>
    </li>
    
    </ul>
    <ul class="OSecondUl">
        <li class="SecondLi">
        <span>搞笑</span>
        <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>美食</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>动画</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>音乐</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>舞蹈</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>知识</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>生活</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>时尚</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>娱乐</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>番剧</span>
       <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>国创</span>
        <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>影视</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>鬼畜</span>
         <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>数码</span>
       <div class="Second1"><img src="../img/99+.png" alt=""></div>
        
        </li>
        <li class="SecondLi">
        <span>更多</span>
         <div class="Second1" id="last1"><img src="../img/展开.png" alt="" class="last"></div>
        
        </li>
    </ul>
    </div>    
</template>
<style scoped>
div{
    width: 1520px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 24px;
}
.OFirstUl{
    display: flex;
    justify-content: space-between;
    height: 50px;
}
.FirstLi>img{
   width: 50px;
   height: 50px;
   filter: drop-shadow(50px 0px 0rem #FFB100);
}
.FirstLi>span{
font-size: 20px;
font-family: Microsoft YaHei UI;
font-weight: 400;
line-height: 46px;
text-align: center;
display: inline-block;
height: 45px;
margin-left: 14px;
}
.FirstLi{
    display: flex;
    height: 50px;
    color: #FFFFFF;
    width: 10%;
    justify-content: center;}
.FirstLi:hover{
    background-color: #FFB100;
    color: #5B5A5A;
    transition: all 0.5s;
    cursor: pointer;
}
.Second1>img{
width: 24px;
height: 15px;
margin-left: -24px;
filter: drop-shadow(24px -2px 0rem #FFB100);
}
.Second1{
width: 24px;
height: 15px;
margin-top: 15px;
overflow: hidden;
background-color: transparent;
}
.SecondLi:hover img{
    filter: drop-shadow(24px -2px 0rem #5B5A5A);
}
.OSecondUl{
    display: flex;
    justify-content: space-around;
    padding-left: 5px;
    margin-top: 12px;
}
.SecondLi{
    display: flex;
    width: 6%;
    justify-content: center;
    color: #fff;
    padding-left: 9px;
    align-content: center;
}
.SecondLi>span{
font-size: 20px;
font-family: Microsoft YaHei UI;
font-weight: 400;
line-height: 46px;
}
.SecondLi:hover{
    background-color: #FFB100;
    color: #5B5A5A;
    transition: all 0.5s;
    cursor: pointer;
}
.First1>img{
    width: 50px;
   height: 50px;
   filter: drop-shadow(50px 0px 0rem #FFB100);
   margin-left: -50px;
   margin-right: 0px;
}
.FirstLi:hover img{
filter: drop-shadow(50px 0px 0rem #5B5A5A);
}
.First1{
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin: 0px;
    background-color: transparent;
}
.last{
    width: 12px;
    height: 10px;

}
#last1{
  margin-left: 0px;
}
</style>