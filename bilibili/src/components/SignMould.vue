<template>
  <div class="navSignInRework" :class="[navbgTran ? navbgTransparant : 'bgc242424']">
    <div class="navSignInReworkContent">
      <div class="navSignInReworkLeft">
        <li class="navSignInReworkLeftLi navSignInReworkLeftLiFirst">
          <div class="smallTvDiv">
            <img src="../iamges/顶栏和底栏/smallTv.png" alt="" :class="[whitePicture ? 'smallTvWhite' : [blackPicture ? 'smallTvBlack' : '']]" />
          </div>
        </li>
        <li v-for="(item, index) in navSignInReworkLeftLiArray" :key="index" class="navSignInReworkLeftLi">
          <p class="fs18  MicrosoftYaHeiUI" :class="[pffffff ? 'ffffff' : 'clr242424']">
            {{ item }}
          </p>
        </li>
        <li class="navSignInReworkLeftLi navSignInReworkLeftLiLast">
          <div class="phoneImg">
            <img src="../iamges/顶栏和底栏/Phone.png" alt="" :class="[whitePicture ? 'phoneImgWhite' : [blackPicture ? 'phoneImgBlack' : '']]"/>
          </div>
          <p class="fs18  MicrosoftYaHeiUI" :class="[pffffff ? 'ffffff' : 'clr242424']">下载APP</p>
        </li>
      </div>
      <div class="navSignInReworkMid" :class="[searchShow ? '' : 'searchHidden']">
        <input type="text" class="navSignInReworkMidSearchBox" />
        <img src="../iamges/顶栏和底栏/sousuo.png" alt="" class="navSignInReworkMidSearchImg"/>
      </div>
      <div class="avatarDiv">
        </div>
      <div class="navSignInReworkRight">
        <div class="navSignInReworkRightLiDiv">
          <p class="fs18 ffffff MicrosoftYaHeiUI">未登录</p>
        </div>
      </div>
      <div class="navSignInReworkBtnDiv">
        <button class="navSignInReworkBtn">
          <p class="fs18  MicrosoftYaHeiUI" :class="[btnpffffff ? 'ffffff' : 'clr343434']">投稿</p>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignMould",
  data: function () {
    return {
      navSignInReworkLeftLiArray: [
        "主站",
        "番剧",
        "游戏中心",
        "直播",
        "会员购",
        "漫画",
        "赛事",
      ],
      navSignInReworkRightLiArray: ["大会员", "消息", "动态", "收藏", "历史", "个人中心"],
    }
  },
  props:{
    whitePicture:Boolean,
    blackPicture:Boolean,
    searchShow:Boolean,
    pffffff:Boolean,
    btnpffffff:Boolean,
    navbgTran:Boolean,
    fanjubg:Boolean,
  }
};
</script>


<style>
.navbgTransparant{
  background-color: transparent;
}
.navSignInReworkContent{
  display: flex;
  margin: 0px 100px;
  justify-content: space-around;
  align-items: center;
}
.navSignInReworkLeft {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1.6;
  height: 55px;
}
.navSignInReworkLeftLi{
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  transition: all 0.5s;
}
.navSignInReworkLeftLiLast {
  display: flex;
  align-items: center;
}
.navSignInReworkRight {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  height: 80px;
}
.navSignInReworkRightLiDiv {
  display: flex;
  align-items: center;
  flex: 1;
  height: 75px;
  /* height: 88px; */
  /* margin-top: 0px; */
}
.navSignInReworkMid{
  position: relative;
}
.navSignInReworkMidSearchBox{
  width: 280px;
  height: 49px;
  background: #343434;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: none;
  color: #ffffff;
  padding-left: 14px;
  font-size: 18px;
}
.navSignInReworkMidSearchImg{
  position: absolute;
  bottom: 9px;
  right: 12px;
}
.navSignInReworkRightLi{
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding: 0px 10px;
  cursor: pointer;
  transition: all 0.5s;
}
.navSignInReworkBtn{
  width: 114px;
  height: 52px;
  background: #FFB100;
  border-radius: 5px;
  transition:background-color 0.5s;
}
.navSignInReworkBtn:hover{
  background-color: #f4ea2a;
}
.avatarDiv{
  margin-left: 42px;
  margin-right: 25px;
  width: 56px;
  height: 56px;
  background-color: #525252;
  border-radius: 50%;
  cursor: pointer;
}
.phoneImg{
  margin-right: 12px;
}
.navSignInReworkLeftLi:hover,.navSignInReworkRightLi:hover{
  background-color: #868384;
}
.navSignInReworkLeftLiFirst:hover{
  background-color: transparent;
}
.smallTvDiv{
  width: 25px;
  height: 23px;
  overflow: hidden;
}
.smallTvWhite{
  width: 25px;
  height: 23px;
  margin-left: -25px;
  filter: drop-shadow(25px 0px #fdfdfd);
}
.smallTvBlack{
  width: 25px;
  height: 23px;
  margin-left: -25px;
  filter: drop-shadow(25px 0px #242424);
}
.phoneImg{
  width: 19px;
  height: 29px;
  overflow: hidden;
}
.phoneImgWhite{
  width: 19px;
  height: 29px;
  margin-left: -19px;
  filter: drop-shadow(19px 0px #fdfdfd);
}
.phoneImgBlack{
  width: 19px;
  height: 29px;
  margin-left: -19px;
  filter: drop-shadow(19px 0px #242424);
}
.searchHidden{
  opacity: 0;
}
</style>
