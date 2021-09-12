<template>
    <ul>
        <li class="li1">直播</li>
        <li class="li11">番剧</li>
        <li class="li11">美食</li>
        <li class="li11">特别推荐</li>
        <li class="LiImg">
            <div class="Img"><img src="../img/上下.png" alt=""></div>
        </li>
        <li class="LiImg">
            <div class="Img"><img src="../img/回到顶部.png" alt=""></div>
        </li>
        
        
    </ul>
</template>
<style scoped>
ul{
    width: 103px;
    height: 439px;
    background-image: url(../img/猫猫框.png);
    display: flex;
    flex-direction: column;
    justify-content: start;
    border: none;
    position: relative;
    left: -1.5px;
}
li{
    width: 77px;
    height: 40px;
    border-bottom: 1px solid #B1A9AC;
}
.li1{
    margin-top: 129px;
    border-top: 1px solid #B1A9AC;
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #8A8A8A;
line-height: 40px;
text-align: center;
}
.li1:hover{
    background-color: #FDB001;
    color: #343434;
    transition: all 0.5s;
    cursor: pointer;
}
.li11:hover{
    background-color: #FDB001;
    color: #343434;
    transition: all 0.5s;
    cursor: pointer;
}
.li11{
    font-size: 16px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #8A8A8A;
line-height: 40px;
text-align: center;
 border-bottom: 1px solid #B1A9AC;

}
.Img{
    width: 20px;
    height: 20px;
    overflow: hidden;
    margin: auto;
    margin-top: 9px;
}
.Img>img{
    width: 20px;
    height: 20px;
    margin-left: -20px;
    filter: drop-shadow(20px 0px 0rem #B6B5B5);
}
.LiImg:hover img{
    width: 20px;
    height: 20px;
    margin-left: -20px;
    filter: drop-shadow(20px 0px 0rem #343434);
}
.LiImg:hover{
    background-color: #FDB001;
    color: #343434;
    transition: all 0.5s;
    cursor: pointer;
}
</style>