<template>
  <div class="LogIn">
      <input type="text" class="number" placeholder="你的手机号/邮箱">
      <input type="password" class="number2" placeholder="密码">
      <div class="right">
          <div :class="[IsActive ? 'duigou' : ' ']" id="duigou2" @click="LogInTab" ><div :class="[IsActive2 ? 'gou':' ']"></div></div>
          <span class="span1">记住我</span>
          <span class="span2">
              
                                忘记密码？
                            
          
          </span>
      </div>
      <div class="LogInBtn">
          <span>登录</span>
          <span>注册</span>

      </div>
      <div class="LogInImg">
          <img src="../img/微信.png" alt="">
          <img src="../img/QQ.png" alt="">
      </div>
      <p class="LogInP1">其他方式登录</p>
      <div class="LogInP2">
      <div id="LogInP2Span" :class="[IsActive3 ?' ':'Hidden']" @click="HiddenTab">√</div>   
                                我已阅读并同意
                            <a href="">
                                哔哩哔哩用户使用协议
                            </a>

                                和
                            <a href="">
                                哔哩哔哩隐私政策
                            </a>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
      IsActive:false,
      IsActive2:false,
      IsActive3:true,
    }
},
methods:{
    LogInTab:function(){
        this.IsActive=!this.IsActive;
        this.IsActive2=!this.IsActive2;
    },
    HiddenTab:function(){
          this.IsActive3=!this.IsActive3;

    }
}
}
</script>

<style>
.Hidden{
    color:transparent;
}
#LogInP2Span{
width: 28px;
height: 28px;
border: 1px solid #A3A2A2;
border-radius: 13px;
display: inline-block;
text-align: center;
margin-right: 21px;
cursor: pointer;
}
#duigou2{
width: 31px;
height: 31px;
border: 1px solid #242424;
display:inline-block;
margin-left: 30px;
cursor: pointer;
}
.gou{
    height: 10px;
    width: 20px;
    border-bottom: 2px solid #242424;
    border-left: 2px solid #242424;
    transform: rotate(-45deg);
    margin-top: 5px;
    margin-left: 4px;
}
.duigou{
width: 31px;
height: 31px;
background-color: #FFB100 !important;
display:inline-block;
}
.LogIn{
    margin-left: 522px;
    margin-top: 104px;
}
.number{
    width: 876px;
height: 86px;
background: #242424;
border-radius: 30px;
border: none;
background-image: url(../img/二维码.png);
background-repeat: no-repeat;
background-position: 814px 22px;
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A3A3A3;
padding-left: 25px;
}
.number2{
width: 876px;
height: 86px;
background: #242424;
border-radius: 30px;
border: none;
background-image: url(../img/键盘.png);
background-repeat: no-repeat;
background-position: 814px 22px;
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A3A3A3;
padding-left: 25px;
margin-top: 33px;
}
input{
    outline: none;
}
.chose{
    width: 31px;
    height: 31px;
    margin-left: 37px;
   
}
.span1{
color: #929191;
font-size: 26px;
font-family: Microsoft YaHei;
font-weight: 400;
margin-left: 37px;
margin-right: 566px;
}
.span2{
    color: #FFB100;
font-size: 26px;
font-family: Microsoft YaHei;
font-weight: 400;
}
.right{
    margin-top: 40px;
    display: flex;height: 31px;
}
.LogInBtn span:nth-child(1){
width: 250px;
height: 64px;
background: #FFB100;
border-radius: 10px;
padding: 17px 92px 17px 92px;
font-size: 30px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
margin-left: 148px;
}
.LogInBtn{
    margin-top: 77px;
}
.LogInBtn span:nth-child(2){
    width: 250px;
height: 64px;
background: #DBD8D8;
border-radius: 10px;
padding: 17px 92px 17px 92px;
font-size: 30px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #343434;
margin-left: 108px;
}
.LogInBtn span:nth-child(2):hover{
    background-color: pink;
    transition: all 0.5s;
}
.LogInBtn span:nth-child(1):hover{
    background-color: pink;
    transition: all 0.5s;
}
.LogInImg{
    margin-left: 362px;
    margin-top: 47px;
}
.LogInImg img:nth-child(2){
    margin-left: 37px;
}
.LogInP1{
    margin-top: 15px;
    margin-left: 384px;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #B8B6B6;
}
.LogInP2{
display: flex;
height: 30px;
align-content: center;    
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A3A3A3;
margin-left: 130px;
margin-top: 43px;
}
.LogInP2>a{
    color: #FFB100;
    text-decoration: none;
}
.LogInP2>a:hover{
    text-decoration: underline;
    transition: all 0.5s;
}
</style>