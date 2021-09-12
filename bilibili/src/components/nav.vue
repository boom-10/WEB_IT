<template>
<div class="NavFirst1">
  <div class="navSignin">
    <!-- <div class="bg"></div> -->
    <div class="navLeft">
      <a href="">
        <ul class="navLeftUl">
          <li class="navLeftLiFirst">
            <img
              src="../iamges/顶栏和底栏/小电视.png"
              alt=""
              class="navLeftLiImg1"
            />
          </li>
          <li
            v-for="(item, index) in Navleft"
            :key="index"
            class="navLeftLi fs18px ffffff MicrosoftYaHeiUI fw400 navHover"
          >
            <p class="navP fs18px ffffff MicrosoftYaHeiUI fw400">
              {{ item }}
            </p>
          </li>
          <li class="navLeftLiLast navHover">
            <div class="navHover">
              <img
                src="../iamges/顶栏和底栏/智能手机.png"
                alt=""
                class="navLeftLiImg2"
              />
              <p
                class="navLeftLi fs18px ffffff MicrosoftYaHeiUI fw400"
              >
                下载APP
              </p>
            </div>
          </li>
        </ul>
      </a>
    </div>
    <div class="navMid">
      <div class="search">
        <input type="text" class="searchBox" />
        <img src="..\iamges\顶栏和底栏\搜索.png" alt="" class="navMidImg1" />
      </div>
    </div>
    <div class="navRight">
      <a href="">
        <ul class="navRightUl">
          <li class="navRightLiFirst">
            <img src="..\iamges\顶栏头像.png" alt="" />
          </li>
          <li v-for="(item, index) in NavRight" :key="index" class="navRightLi ">
            <p class="navP fs18px ffffff MicrosoftYaHeiUI fw400 navHover">
              {{ item }}
            </p>
          </li>
        </ul>
      </a>
      <div class="navRightBtnDiv">
        <button class="navRightBtn">
          <p class="fs18px MicrosoftYaHeiUI fw500">投稿</p>
        </button>
      </div>
    </div>
  </div>
  <div class="bilbil"></div>
  </div>
</template>

<script>
// import tv from '../iamges/顶栏和底栏/小电视.png'
export default {
  name: "nav",
  data: function () {
    return {
      tvsrc: "..iamges/顶栏和底栏/小电视.png",
      Navleft: ["主站", "番站", "游戏中心", "直播", "会员购", "漫画", "赛事"],
      NavRight: ["大会员", "消息", "动态", "收藏", "历史", "个人中心"],
    };
  },
};
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
a{
    text-decoration: none;
}
.NavFirst1{
    width: 100%;
    height: 265px;
    background-color: skyblue;
    background-image: url(../img/17c110d7ef6cb037fcc5ef1c4be7e9bd.jpg);
    background-position: 0px -283px;
    background-size: 100%;
    
}
.fw500 {
  font-weight: 500;
}
.ffffff {
  color: rgba(255, 255, 255, 1);
}
.navSignin {
  
  height: 81px;
  display: flex;
  align-items: center;
}
.navLeft {
  color: pink;
  position: relative;
  display: flex;
  align-items: center;
  height: 81px;
}
.navLeftLi {
  display: inline;
  margin-left: 15px;
}
.navLeftLiFirst {
  margin-left:73px;
  display: inline;
  margin-right: 33px;
}
.navLeftLiLast {
  margin-left: 59px;
  display: inline;
  transition: all 0.5s;
}
.navLeftLi {
  width: 837px;
  transition: all 0.5s;
}
.navLeftLiImg1 {
  position: absolute;
  top: 27px;
}
.navLeftLiImg2 {
  position: absolute;
  left: 775px;
  top: 27px;
}
.MicrosoftYaHeiUI {
  font-family: MicrosoftYaHeiUI;
}
.fs18px {
  font-size: 18px;
  text-align: center;
}
.fw400 {
  font-weight: 400;
}
/* .bg {
  background-color: #fdf6f8;
  opacity: 0.45;
  width: 89px;
  height: 76px;
  position: absolute;
  z-index: 0;
  top: 1.5px;
  left: 220px;
} */
.searchBox {
  width: 283px;
  height: 52px;
  border-radius: 5px;
  background-color: rgba(52, 52, 52, 1);
  border: none;
  margin-left: 15px;
  font-size: 20px;
  padding-left: 10px;
  color: rgba(255, 255, 255, 1);
}
.navMidImg1 {
  position: absolute;
  z-index: 1;
  top: 28px;
  left: 1145px;
}
.navRightLiFirst {
  margin-left: 10px;
  display: inline;
}
.navRightLiFirst {
  display: inline;
  margin-left: 42px;
}
.navRightUl {
  display: flex;
  align-items: center;
}
.navRight {
  display: flex;
}
.navRightBtn {
  background-color: rgba(253, 176, 1, 1);
  width: 115px;
  height: 53px;
  margin-left: 30px;
  border-radius: 5px;
}
.navHover {
  /* background-color: pink; */
  height: 200px;
  width: 50px;
  display: inline;
  padding: 20px 10px 20px 0px;
  border-radius: 5px;
  transition: all 0.5s
}
.navP{
  display: inline;
  margin-left: 15px;
}
.navLeftLi:hover,.navLeftLiLast:hover,.navHover:hover{
  background-color:grey;
  /* opacity: 0.45; */
}
</style>
