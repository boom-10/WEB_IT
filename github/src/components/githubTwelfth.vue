<template>
    <div>
    <div class="SixthC">
        
   
    <ul class="SixthUl">
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/developer-1.jpg" alt="" class="SixthImg">
                <p class="SixthP1"> Russell Keith-Magee</p>
                <p class="SixthP2">
          Russell Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on every platform.
      </p>
                <div class="SixthP3">Read more</div>
            </div>
        </li>
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/developer-2.jpg" alt="" class="SixthImg">
                <p class="SixthP1"> Kris Nova</p>
                <p class="SixthP2" id="TwelfthP">
          Kris Nova quickly developed a passion for open source software. Now she gets to work on open source tooling at her day job, which includes maintaining Kubernetes Operations (kops).
      </p>
                <div class="SixthP3">Read more</div>
            </div>
        </li>
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/developer-3.jpg" alt="" class="SixthImg">
                <p class="SixthP1"> Evan You</p>
                <p class="SixthP2">
          In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads.
      </p>
                <div class="SixthP3">Read more</div>
            </div>
        </li>
        <li class="SixthLi">
            <div href="" class="SithA">
                <img src="../../Github.images/developer-4.jpg" alt="" class="SixthImg">
                <p class="SixthP1">Jess Frazelle</p>
                <p class="SixthP2" >
          Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams.
      </p>
                <div class="SixthP3"> Read more</div>
            </div>
        </li>
    </ul>
     <p20px msg="
      
        ...whether you’re making your first commit or sending a Rover to Mars, there’s room for you here, too.
      
    " class="SixthP20"></p20px>
    </div>
    </div>
</template>
<style scoped>
.SixthP20{
    margin-bottom: 40px;
    text-align: center;
    height:20px ;
    margin-bottom: 70px;
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
        color: #586069;
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
#TwelfthP{
    margin-bottom: 4px;
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