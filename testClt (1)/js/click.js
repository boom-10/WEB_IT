// window.localStorage.clear();
var url = window.location.href;
console.log("url:", url);
console.log("进入click.js");
// 用来处理点击事件
var xygk = document.body.querySelector("li.nav-item.i1");
var szdw = document.body.querySelector("li.nav-item.i2");
var rcpy = document.body.querySelector("li.nav-item.i3");
var kxyj = document.body.querySelector("li.nav-item.i4");
var djgz = document.body.querySelector("li.nav-item.i5");
var xsgz = document.body.querySelector("li.nav-item.i6");
var hzjl = document.body.querySelector("li.nav-item.i7");
var xyzx = document.body.querySelector("li.nav-item.i8");
xygk.onclick = function() {
    window.localStorage.setItem("title", "学院概况");
    // window.localStorage.removeItem("title");

}

szdw.onclick = function() {
    console.log("师资力量被点击了");
    var a = szdw.children[0];
    a.href = "/sxx/list.htm";
    window.localStorage.setItem("title", "师资队伍");
    // window.localStorage.removeItem("title");

}
rcpy.onclick = function() {
    window.localStorage.setItem("title", "人才培养");
    // window.localStorage.removeItem("title");

}
kxyj.onclick = function() {
    window.localStorage.setItem("title", "科学研究");
    // window.localStorage.removeItem("title");

}
djgz.onclick = function() {
    window.localStorage.setItem("title", "党建工作");
    // window.localStorage.removeItem("title");

}
xsgz.onclick = function() {
    window.localStorage.setItem("title", "学生工作");
    // window.localStorage.removeItem("title");

}
hzjl.onclick = function() {
    window.localStorage.setItem("title", "合作交流");
    // window.localStorage.removeItem("title");

}
xyzx.onclick = function() {
        window.localStorage.setItem("title", "校友中心");
        // window.localStorage.removeItem("title");

    }
    // if (url == "https://math.ouc.edu.cn/" || url == "http://math.ouc.edu.cn/") {
    //     console.log("当前是首页");

//     // more按钮的点击事件
//     // 新闻动态
//     var xwdtMore = document.body.querySelector("#NewsA")
//     console.log("新闻动态more", xwdtMore);
//     xwdtMore.onclick = function() {
//             window.localStorage.removeItem("title");
//             window.localStorage.setItem("title", "新闻动态");

//         }
//         // 通知公告
//     var tzggMore = document.body.querySelector("#InfoA")
//     console.log("通知公告more", tzggMore);
//     tzggMore.onclick = function() {
//             window.localStorage.removeItem("title");
//             window.localStorage.setItem("title", "通知公告");
//         }
//         // 学术公告
//     var xsggMore = document.body.querySelector("#learningA")
//     console.log("学术公告more", xsggMore);
//     xsggMore.onclick = function() {
//             window.localStorage.removeItem("title");
//             window.localStorage.setItem("title", "学术公告");

//         }
//         // 风采展示
//     var fczsMore = document.body.querySelector("#FengcaiA")
//     console.log("风采展示more", fczsMore);
//     fczsMore.onclick = function() {
//             window.localStorage.removeItem("title");
//             window.localStorage.setItem("title", "风采展示");


//         }
//         //     // 学生活动
//         // var xshdMore = document.body.querySelector("#ActA")
//         // console.log("学生活动more", xshdMore);
//         // xshdMore.onclick = function() {
//         //     window.localStorage.removeItem("title");
//         //     window.localStorage.setItem("title", "学生活动");

//     // }

//     // 6个跳转链接
//     // 研究成果
//     var yjcg = document.body.querySelector("#ResearchA");
//     console.log("研究成果", yjcg);
//     yjcg.onclick = function() {
//             window.localStorage.removeItem("title");

//             window.localStorage.setItem("title", "研究成果");

//         }
//         // 就业信息
//     var jyxx = document.body.querySelector("#EmploymentA");
//     console.log("就业信息", jyxx);
//     jyxx.onclick = function() {
//             window.localStorage.removeItem("title");

//             window.localStorage.setItem("title", "就业信息");

//         }
//         // 人才引进
//     var rcyj = document.body.querySelector("#personnelA");
//     console.log("人才引进", rcyj);
//     rcyj.onclick = function() {
//             window.localStorage.removeItem("title");

//             window.localStorage.setItem("title", "人才引进");

//         }
//         // 常用下载
//     var cyxz = document.body.querySelector("#DownLodeA");
//     console.log("常用下载", cyxz);
//     cyxz.onclick = function() {
//             window.localStorage.removeItem("title");
//             window.localStorage.setItem("title", "常用下载");

//         }
//         // 院长信箱
//     var yzxx = document.body.querySelector("#mailboxA");
//     console.log("院长信箱", yzxx);
//     yzxx.onclick = function() {
//         window.localStorage.removeItem("title");
//         window.localStorage.setItem("title", "学院概况");


//     }
// }