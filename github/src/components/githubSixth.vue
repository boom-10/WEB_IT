<template>
    <div>
    <div class="SixthC">
        
    <p20px msg="
      See how the world's leading companies use GitHub Enterprise.
    " class="SixthP20"></p20px>
    <ul class="SixthUl">
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/See-1.jpg" alt="" class="SixthImg">
                <p class="SixthP1"> MGM Resorts International</p>
                <p class="SixthP2">Hospitality</p>
                <div class="SixthP3">Read more</div>
            </div>
        </li>
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/See-2.jpg" alt="" class="SixthImg">
                <p class="SixthP1"> Nationwide</p>
                <p class="SixthP2">Insurance</p>
                <div class="SixthP3">Read more</div>
            </div>
        </li>
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/See-3.jpg" alt="" class="SixthImg">
                <p class="SixthP1"> SAP</p>
                <p class="SixthP2">Business Software</p>
                <div class="SixthP3">Read more</div>
            </div>
        </li>
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/See-4.jpg" alt="" class="SixthImg">
                <p class="SixthP1">Spotify</p>
                <p class="SixthP2">Technology / Streaming</p>
                <div class="SixthP3">Read more</div>
            </div>
        </li>
    </ul>
    </div>
    </div>
</template>
<style scoped>
.SixthP20{
    margin-bottom: 0px;
    text-align: center;
    height:20px ;
    margin-bottom: 20px;
}
.SixthUl{
    display: flex;
    width: 1280px;
    margin: 0 auto;
   
}
.SixthLi{
    
            flex: 1;
            padding: 16px;
            text-align: center;
}
.SixthImg{
    height: 200px;
    width: 248px;
}
.SithA{
    box-shadow: 0 2px 4px rgba(27,31,35,.15);
    border-radius: 6px!important;
    cursor: pointer;
    display: block;
    padding: 16px;
    
}
.SixthP1{
    font-size: 16px;
    margin-bottom: 12px;
    margin-top: 12px;
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 500;
    text-align: left;
}
.SixthP2{
    margin-bottom: 20px;
        font-size: 12px;
        color:#586069;
        text-align: left;
}
.SixthP3{
    color: #1074e7;
    font-size: 14px;
    padding-bottom: 16px;
    padding-top: 16px;
    line-height: 1.5;
    text-align: left;
    border-top: 1px solid #e1e4e8;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
</style>
<script>
import p20px from '../views/p20px'
export default {
    components: {
        p20px,
    }
}
</script>