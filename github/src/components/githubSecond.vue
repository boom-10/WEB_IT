<template>
 
        <div class="secondContainer">
            <img src="../../Github.images/01.svg" alt="" class="SecondImg">
         <div class="SecondArea1">
        <h1 class="SecondTitle">Get started with <br> GitHub Enterprise</h1>
        <p class="SecondArea11">
        Take collaboration to the next level <br> with security and administrative <br> features built for teams.
        </p>
    </div>
    <div class="SecondArea2">
        <div class="Secondtupian1">
            <img src="../../Github.images/02.svg" alt="" class="Secondtupian11">
            <h4>Enterprise</h4>
            <p class="Secondtupian12">Deploy to your environment or the cloud.</p>
            
            <a href=""><button class="Secondtupian13">
                Start a free trial
            </button>
            </a>
        </div>
        <div class="Secondtupian2">
<img src="../../Github.images/03.svg" alt="" class="Secondtupian11">
            <h4>Enterprise</h4>
            <p class="Secondtupian12">Talk to us</p>
            
            <a href=""><button class="Secondtupian14">
                Contact Sales
            </button>
            </a>
        </div>
    </div>
    </div>
 
</template>
<style>
.secondContainer{
width: 1232px;
height: 323px;
margin: 0 auto;
 padding: 48px;   
 display: flex;
 margin-top: 156px;
 position: relative;
 box-shadow: 5px 5px 5px #d1d5da
}
.SecondTitle{
    font-size: 32px;
    color: #24292e;
}
.SecondArea1{
    flex: 1;
    
}
.SecondArea2{
    flex: 2;
    
    display: flex;
}
.SecondArea11{
    font-size: 20px;
    
    margin-top: 40px;
    line-height: 30px;
    color: #586069;
}
h4{
    font-weight: 500;
    font-size: 16px;
}
.Secondtupian12
{
    font-size: 14px;
    color: #586069;
    margin-top: 5px;
    margin-bottom: 38px;
}
.Secondtupian1{
    flex: 1;
    margin-left: 120px;
    text-align: center;
}
.Secondtupian2{
    flex: 1;
    text-align: center;
}
.Secondtupian11{
    margin-top: 84px;
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
}
.Secondtupian13{
    font-size: 14px;
    width: 148px;
    height: 50px;
    background-color: #1074e7;
    border-radius: 10px;
    border: none;
    color: #fff;
    
}
.Secondtupian13:hover{
    background-color: #0366d6;
    transition: all 0.5s;
}
.Secondtupian14{
    font-size: 14px;
    width: 148px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #87b9f3;
    background-color: #fff;
    color: #0368da;
}
.Secondtupian14:hover{
    border: 1px solid #0368da ;
    transition: all 0.5s;
}
.SecondImg{
    position: absolute;
    left: 869px;
    bottom: 395px;
}
</style>
<script>
export default {
    
}
</script>