<template>
    <div class="contaniner">
        <div class="header">
           <div class="svgg">
                <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> </div> 
<div class="first"><a href="">Why GitHub?</a></div>
<div class="first"><a href="">Team</a></div>
<div class="first"><a href="">Enterprise</a></div>
<div class="first"><a href="">Explore</a></div>
<div class="first"><a href="">Marketplace</a></div>
<div class="first"><a href="">Pricing</a></div>
<input type="text" placeholder="Search GitHub" id="second" :class="[isActive ? 'active' : '']" @click="toggleActive">
<div class="first"><a href=""> Sign &nbsp;in</a></div>
<div class="first" ><a href="" id="third"> Sign &nbsp;up</a></div>
        </div>
        <div class="fourth">
            <div class="four1">
                <h1>Built for developers</h1>
                <p class="four11">
                    
          GitHub is a development platform inspired by the way you work. From <a href="" class="NavA" >open source</a> to
          <a href="" class="NavA">business</a>, you can host and review code, manage projects, and build software alongside 50 million developers.
        
                </p>
            </div>
            <div class="four2">
                <div class="four21">
                    <zhuce></zhuce>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.NavA{
    color: #fff;
}
.NavA:hover{
    text-decoration: underline;
}
.header{
height: 72px;

display: flex;
}
svg{
    margin-left: 170px;
    margin-top: 16px;
}
.first{
    margin-left: 15px;
    margin-top: 23px;
  display: inline-block;
  align-items: center;
  display: flex;
  padding-bottom: 25px;
  text-align: center;
}
.first>a{
    font-size: 16px;
    color: white;
}
.first>a:hover{
    color: #9c9ea1;
    transition: all 0.5s;
}
.second{
    height: 36px;
    width: 240px;
    margin-top: auto;
    margin-bottom: auto;
    background-color:#2b3137;
    margin-left: 260px;
    border-radius: 6px;
    border: none;
}
#second{
    height: 36px;
    width: 240px;
    margin-top: auto;
    margin-bottom: auto;
    background-color: #24292e;
    margin-left: 260px;
    outline: none;
    border: none;
    display: flex;
    padding-left: 5px;
    border-radius: 5px;
}
#third{
    border: 1px solid #fff;
    height: 34px;
    width: 71px;
    display: inline-block;
    line-height: 34px;
    border-radius: 5px;
}
#third:hover{
    border: solid 1px  #9c9ea1 ;
    transition: all 0.5s;
}
.active{
    background-color:#2b3137;
    background-color:#50555a!important;
    border-radius: 5px;
}
.contaniner{
    height: 623px;
    background-color: #2b3137;
}
h1{
    font-size: 64px;
    margin-top: 130px;
    color: #fff;
}
.fourth{
    display: flex;
    width: 1024px;
    margin: 0 auto;
}
.four1{
    width: px;
    flex: 7;
}
.four2{
    width: px;
    height: 500px;
    background-color: white;
    flex: 6;
    border-radius: 5px;
    margin-left: 90px;
}
.four11{
    font-size: 20px;
    line-height: 30px;
    color: #aaadaf;
}
.four21{
    width: 380px;
    margin: 0 auto;
    margin-top: 20px;
}
.contaniner{
    background-image: url(../../Github.images/simple-codelines.svg);
    background-size: 100%;
}
</style>
 <script>
 import zhuce from './zhuce'
export default {
    data () {
        return {
            isActive:false
        }
    },
        components: {
            zhuce
    },
    methods: {
        toggleActive:function(){
           this.isActive = !this.isActive;
        }
    }
}
</script>