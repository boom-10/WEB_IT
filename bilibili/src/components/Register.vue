<template>
  <div class="Register">
    <input type="text" class="numberR" placeholder="昵称">
    <input type="password" class="numberR2" placeholder="设置密码（6-20位，含有字母和数字）">
    
    <div class="numberR2">
      <input type="text" class="numberR3" placeholder="手机号/邮箱">
      <a href="" class="RegisterA">获取验证码</a>
    </div>
    <input type="text" class="numberR2" placeholder="验证码">
    <div class="RegisterLog">注册</div>
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
    IsActive3:true
  }
},
methods:{
  HiddenTab:function(){
          this.IsActive3=!this.IsActive3;

    }
}
}
</script>

<style>
.RegisterLog:hover{
  background-color: pink;
  transition: all 0.5s;
}
.RegisterLog{
  width: 250px;
height: 64px;
background: #FFB100;
border-radius: 10px;
text-align: center;
line-height: 64px;
font-size: 30px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
margin-left: 317px;
margin-top: 67px;
margin-bottom: 64px;
}
.Register{
  width: 876px;
  margin-top: 45px;
  margin-left: 522px;
}
.numberR{
    width: 876px;
height: 86px;
background: #242424;
border-radius: 30px;
border: none;
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A3A3A3;
padding-left: 25px;
}
.numberR2{
      width: 876px;
height: 86px;
background: #242424;
border-radius: 30px;
border: none;
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A3A3A3;
padding-left: 25px;
margin-top: 32px;
}
.numberR3{

height: 86px;
background: #242424;
border-radius: 30px;
border: none;
font-size: 24px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #A3A3A3;

}
.RegisterA{
color: #FFB100;
text-decoration: none;
margin-left: 430px;
}
.RegisterA:hover{
  color: pink;
  transition: all 0.5s;
}
</style>