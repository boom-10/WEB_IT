<template>
    <div class="TitleC">
        <div class="Img">
            <img :src="mg4.img" >
        </div>
        <p class="P1">{{msg}}</p>
        <img :src="mg5.img" class="img2" >
        <p class="P2">
            
                                {{msg2}}
                                <a href="" class="">
                               {{msg3}}
                            </a>
                            
        </p>
    </div>
</template>
<style scoped>
.TitleC{
    display: flex;
    width: 600px;
}
.Img{
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin-top: 5px;
}
.Img>img{
    width: 50px;
    height: 50px;
    margin-left: -50px;
    filter: drop-shadow(50px 0px 0rem #FFB100);
}
.P1{
 
padding-top: 15px;
font-size: 30px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FDFDFD;
margin-left: 12px;
}
.img2{
    width: 20px;
    height: 20px;
    margin-top: 27px;
    margin-left: 40px;
}
.P2{
font-size: 18px;
font-family: Microsoft YaHei UI;
font-weight: 400;
color: #FFFFFF;
margin-top: 27px;
}
a{
    font-size: 18px;
    color: #0083FF;
    text-decoration: underline;
}
a:hover{
    color:skyblue;
    transition: all 0.5s;
}
</style>
<script>
export default {
    props:{
        msg:String,
        msg2:String,
        msg3:String,
        parentImg:Array,
        mg4:Object,
        mg5:Object,
        // show:{
        //     type:Boolean
        // }
    }
}
</script>
