<template>
        <div class="FonterC">
<ul class="FonterBox">
    <li class="FonterLi1" id="Li1">
        <p class="FonterP11">bilibili </p>
<div class="Fontherp1">
    <div class="FonterPDiv1">
        <p class="FonterP12">
        关于我们
    </p>
    <p class="FonterP121">
       联系我们
    </p>
    <p class="FonterP121">
        用户协议
    </p>
    <p class="FonterP121">
        加入我们
    </p>
    </div>
     <div class="FonterPDiv2">
        <p class="FonterP13"> 友情链接</p>
        <p class="FonterP13"> 隐私政策</p>
        <p class="FonterP13"> bilibili认证</p>
        <p class="FonterP13"> Investor Relations</p>
    
    </div>
    
    </div>
    </li>
    <li class="FonterLi1" id="Li2">
                <p class="FonterP11">传送门 </p>
<div class="Fontherp1">
    <div class="FonterPDiv1">
        <p class="FonterP12">
        协议汇总
    </p>
    <p class="FonterP121">
        活动中心
    </p>
    <p class="FonterP121">
        活动专题页
    </p>
    <p class="FonterP121">
        侵权申诉 
    </p>
    </div>
     <div class="FonterPDiv2">
        <p class="FonterP13"> 帮助中心</p>
        <p class="FonterP13"> 用户反馈论坛</p>
        <p class="FonterP13"> 壁纸站</p>
        <p class="FonterP13"> 广告合作</p>
    
    </div>
     <div class="FonterPDiv2">
        <p class="FonterP13"> 名人堂</p>
        <p class="FonterP13"> MCN管理中心</p>
        <p class="FonterP13">高级弹幕</p>
        
    
    </div>
    </div>
    </li>
    <li class="FonterLi1" id="Li3">
   <div class="Fspan1">
       <img src="../img/下载.png" alt="">
       <p>下载APP</p>
   </div>
   <div class="Fspan1" id="span3">
       <img src="../img/微博.png" alt="">
       <p>新浪微博</p>
   </div>
   <div class="Fspan1">
       <img src="../img/官方微信.png" alt="">
       <p>官方微信</p>
   </div>
    </li>
</ul>
<div class="last">
    <span class="last1">合作联系</span>
    <p class="Last2">营业执照 信息网络传播视听节目许可证：0910417 网络文化经营许可证 沪网文【2019】3804-274号 广播电视节目制作经营许可证：（沪）字第01248号 增值电信业<br>务经营许可证 沪B2-20100043 互联网ICP备案：沪ICP备13002172号-3 出版物经营许可证 沪批字第U6699 号 
</p>
</div>
        </div>

</template>
<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
.FonterC{
width: 100%;
padding-bottom: 71px;
background: #242424;
padding-top:54px;
}
.FonterBox{
    display: flex;
  
    justify-content: space-around;
    height: 217px;
   width: 1520px;
   margin: auto;
    
}
.FonterLi1{
  
    color: #737373;
    font-size: 18px;
    font-family: 
                                MicrosoftYaHeiUI
                            ;

}
.FonterPDiv1{
    color: #4D4D4D;
}

#Li1{
    
    flex: 1;
}
#Li2{
    flex: 1.5;
    margin-left: 90px;
    margin-right: 90px;
    padding-left: 54px;
    padding-right: 94px;
    border-left: 1px solid #a5a6a7;
    border-right: 1px solid #a5a6a7;
}
#Li3{
    flex: 1;
    display: flex;
    justify-content: space-around;
}
.FonterP12{
 line-height: 36px;
}
.FonterP121{
    line-height: 36px;
}
.Fontherp1{
    margin-top: 54px;
    display: flex;
    justify-content:space-between;
}
.FonterP13{
    line-height: 36px;
}

.FonterPDiv2{
  color: #4D4D4D;
}
.last1{
height: 54px;
background-image: url(../img/合作联系.png);
width: 146px;
width: 96px;
height: 24px;
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #00557C;
text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.33);
padding: 14px;
margin-top: 11px;
padding-left: 25px;
padding-right: 25px;
}
.last{
    width: 1520px;
    margin: auto;
    margin-top: 60px;
    display: flex;
    height: 54px;
}
.Last2{
height: 54px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #ABABAB;
line-height: 36px;
margin-left: 33px;
}
.Fspan1{
    margin-top: 77px;
    display: inline-block;
}
.Fspan1>p{
   color: #4D4D4D;
   margin-top:13px ;
   font-size: 18px;
}
#span3{
    margin-left: 60px;
    margin-right: 60px;
}
.FonterP12:hover{
    color:skyblue;
    text-decoration: underline;
    transition: all 0.5s;
    cursor: pointer;
}
.FonterP13:hover{
    color:skyblue;
    text-decoration: underline;
    transition: all 0.5s;
    
    cursor: pointer;
}
.FonterP121:hover{
    color:skyblue;
    text-decoration: underline;
    transition: all 0.5s;
    
    cursor: pointer;
}
.Fspan1>p:hover{
    color:skyblue;
    text-decoration: underline;
    transition: all 0.5s;
    cursor: pointer;
}
.last1:hover{
    color:skyblue;
    text-decoration: underline;
    transition: all 0.5s;
    cursor: pointer;
}
</style>