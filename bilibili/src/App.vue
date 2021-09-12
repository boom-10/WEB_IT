<template>
  <div id="app">
    <!-- <Nav></Nav>
    <OtherNav></OtherNav>
    <Second></Second>
    <third></third>
    <Fourth></Fourth>
    <Fifth></Fifth>
    <Six></Six>
    <FonterC></FonterC> -->
    <Homepage></Homepage>
    <!-- <Sign></Sign> -->
  </div>
</template>

<script>
// import FonterC from './components/Fonter'
// import Nav from './components/nav'
// import OtherNav from './components/OtherNav'
// import Second from './components/Second'
// import third from './components/third'
// import Fourth from './components/Fourth'
// import Fifth from './components/Fifth'
// import Six from './components/Six'
import Homepage from './views/Homepage'
// import Sign from'./views/Sign'
export default {
  name: 'App',
  components: {
    // FonterC,
    // Nav,
    // OtherNav,
    // Second,
    // third,
    // Fourth,
    // Fifth,
    // Six
    Homepage,
    // Sign
  }
}
</script>

<style>
#app{
  background-color: #343434;
}
*{
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none;
}
* {
  margin: 0px;
  padding: 0px;
}
a{
  text-decoration: none;
}
li{
  list-style-type: none;
}
.Adobe {
  font-family: Adobe Heiti Std R;
}
.SimHei{
  font-family: SimHei;
}
.MicrosoftYaHeiUI{
  font-family: MicrosoftYaHeiUI;
} 
.fs14{
  font-size: 14px;
}                  
.fs16 {
  font-size: 16px;
}
.fs18 {
  font-size: 18px;
}
.fs20 {
  font-size: 20px;
}
.fs27{
  font-size: 27px;
}
.fs28 {
  font-size: 28px;
}
.fs24 {
  font-size: 24px;
}
.fs30{
  font-size: 30px;
}
.fs36 {
  font-size: 36px;
}
.ffffff{
  color: #ffffff;
}
.clr343434 {
  color: #343434;
}
.clr7f7f7f{
  color: #7f7f7f;
}
.clrfdf6f8{
  color: #fdf6f8;
}
.clrd9d6d6{
  color: #d9d6d6;
}
.clr6f6f6f{
  color: #6f6f6f;
}
.clra9a5a5{
  color: #a9a5a5;
}
.clr938e8e{
  color: #938e8e;
}
.clrffb100{
  color: #ffb100;
}
.clr707070{
  color: #707070;
}
.clr474747{
  color: #474747;
}
.clr868686{
  color: #868686;
}
.textaligncenter {
  text-align: center;
}
.bgcdbdbdbd {
  background-color: #dbdbdb;
}
.bgcffb100 {
  background-color: #ffb100;
}
.bgc343434{
  background-color: #343434;
}
.bgc474646{
  background-color: #474646;
}
.bgc242424{
  background-color: #242424;
}
.bgc2a2a2a{
  background-color: #2a2a2a;
}
.bgcb8b8b8{
  background-color: #b8b8b8;
}
.w1296px{
  width: 1296px;
}
.h15px{
  height: 15px;
}
img{
  cursor: pointer;
}


</style>
