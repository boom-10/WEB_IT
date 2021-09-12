<template>
  <div id="Homepage">
    <HomepageNav></HomepageNav>
    <OtherNav></OtherNav>
    <Second></Second>
    <third></third>
    <Fourth></Fourth>
    <Fifth></Fifth>
    <Six></Six>
    <FonterC></FonterC>
  </div>
</template>

<script>
import FonterC from '../components/Fonter'
import HomepageNav from '../components/HomepageNav'
import OtherNav from '../components/OtherNav'
import Second from '../components/Second'
import third from '../components/third'
import Fourth from '../components/Fourth'
import Fifth from '../components/Fifth'
import Six from '../components/Six'
export default {
  name: 'Homepage',
  components: {
    FonterC,
    HomepageNav,
    OtherNav,
    Second,
    third,
    Fourth,
    Fifth,
    Six
    
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
</style>
