// 获取元素所有子节点
function getChildNode(node) {
    //先找到子结点
    var nodeList = node.childNodes;
    for (var i = 0; i < nodeList.length; i++) {
        //childNode获取到到的节点包含了各种类型的节点
        //但是我们只需要元素节点  通过nodeType去判断当前的这个节点是不是元素节点
        var childNode = nodeList[i];
        //判断是否是元素结点
        if (childNode.nodeType == 1) {
            childNode.style.border = "1px solid pink";
            getChildNode(childNode);
        }
    }
}
// var pTags = document.body.querySelectorAll(".cjk");
// console.log(pTags);
// for (i = 1; i <= 7; i++) {
//     var oldNode = pTags[i].removeChild(pTags[i].firstChild);
//     oldNode = null;
// }
var job = document.body.querySelector("p.job");
// job.innerHTML = 
var email = document.body.querySelector("p.email");
// email.innerHTML = 
var tele = document.body.querySelector("p.tele")
    // tele.innerHTML = 
var office = document.body.querySelector("p.office")
    // office.innerHTML = 
var researchArea = document.body.querySelector("p.researchArea")
    // researchArea.innerHTML = 
var img = document.body.querySelector("img.teacherImg")

var show = localStorage.getItem("showTeacher")
var normal = document.body.querySelector(".info1");
var teacher = document.body.querySelector(".info2");

if (localStorage.getItem("teacherInfo") != "undefined") {
    var teacherData = JSON.parse(localStorage.getItem("teacherInfo"))
}

if (show == "true") {
    console.log("显示info2");
    teacher.style.display = "block";
    normal.style.display = "none";
    var name = document.body.querySelector("span.Article_Title").innerHTML;
    console.log(img);
    job.innerHTML = teacherData.job;
    email.innerHTML = teacherData.email;
    tele.innerHTML = teacherData.tele;
    office.innerHTML = teacherData.office;
    researchArea.innerHTML = teacherData.researchArea;
    img.src = teacherData.img;
    if (tele.innerHTML == "") {
        var div = document.body.querySelector("div.right").firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        console.log(div);
        div.style.display = "none";
    }


    // 更改标题样式。、

    // 删除不必要的信息（ 例如 姓名、职称等）
    // var ps = document.body.querySelector(".info2");
    var ps = document.body.querySelector(".info2").querySelectorAll("p.cjk");
    // var ps = document.body.querySelector(".info3").querySelectorAll("p.cjk");
    console.log("ps:", ps);
    var spans = document.body.querySelector(".info2").querySelector(".detailedIntro").getElementsByTagName("span")
    var fonts = document.body.querySelector(".info2").getElementsByTagName("font")
        // var spans = document.body.querySelector(".info3").getElementsByTagName("span")
    var t = 0;
    var eraseArr = [];
    var t = 0;
    // 强行显示数组
    var dbArr = [];
    console.log(spans); 
	{
        while (spans[t].innerHTML.indexOf("姓名") == -1 && t <= ps.length - 1) {
            t++;
        }
        eraseArr.push(spans[t]);
        var t = 0;
        while (spans[t].innerHTML.indexOf("职称") == -1 && t <= ps.length - 1) {
            t++;
        }
        eraseArr.push(spans[t]);
        var t = 0;
        while (spans[t].innerHTML.indexOf("邮箱") == -1 && t <= ps.length - 1) {
            t++;
        }
        eraseArr.push(spans[t]);
        var t = 0;
        while (spans[t].innerHTML.indexOf("办公室") == -1 && t <= ps.length - 1) {
            t++;
        }
        eraseArr.push(spans[t]);
        var t = 0;
        while (spans[t].innerHTML.indexOf("研究方向") == -1 && t <= ps.length - 1) {
            t++;
        }
        eraseArr.push(spans[t]);
        var t = 0;
        while (spans[t].innerHTML.indexOf("办公室电话") == -1 && t <= ps.length - 1) {
            t++;
        }
        eraseArr.push(spans[t]);
    } {
        var t = 0;
        while (fonts[t] != undefined && fonts[t].innerHTML.indexOf("姓名") == -1) {
            t++;
        }
        if (fonts[t] != undefined) {
            eraseArr.push(fonts[t]);
        }
        var t = 0;
        while (fonts[t] != undefined && fonts[t].innerHTML.indexOf("职称") == -1) {
            t++;
        }
        if (fonts[t] != undefined) {
            eraseArr.push(fonts[t]);
        }
        var t = 0;
        while (fonts[t] != undefined && fonts[t].innerHTML.indexOf("邮箱") == -1) {
            t++;
        }
        if (fonts[t] != undefined) {
            eraseArr.push(fonts[t]);
        }
        var t = 0;
        while (fonts[t] != undefined && fonts[t].innerHTML.indexOf("办公室") == -1) {
            t++;
        }
        if (fonts[t] != undefined) {
            eraseArr.push(fonts[t]);
        }
        var t = 0;
        while (fonts[t] != undefined && fonts[t].innerHTML.indexOf("研究方向") == -1) {
            t++;
        }
        if (fonts[t] != undefined) {
            eraseArr.push(fonts[t]);
        }
        var t = 0;
        while (fonts[t] != undefined && fonts[t].innerHTML.indexOf("办公室电话") == -1) {
            t++;
        }
        if (fonts[t] != undefined) {
            eraseArr.push(fonts[t]);
        }
    }
    console.log("eraseArr：", eraseArr);
    // 删除他们的父元素
    for (let i = 0; i <= eraseArr.length - 1; i++) {
        if (eraseArr[i].parentElement.className.indexOf("Article_Content") >= 0) {
            eraseArr[i].style.display = "none";
        } else {
            while (eraseArr[i].parentElement.className.indexOf("Article_Content") == -1) {
                eraseArr[i] = eraseArr[i].parentElement;
                console.log(eraseArr[i]);
            }
            eraseArr[i].style.display = "none";
        }
    } // 给指定的标题添加样式
    var styleArr = [];

    var t = 0;
    while (spans[t] != undefined && spans[t].innerHTML.indexOf("主讲课程") == -1) {
        t++;
    }
    // spans[t].parentElement.style.display = "none"
    if (spans[t] != undefined) {
        styleArr.push(spans[t]);
        dbArr.push(spans[t]);
    }

    var t = 0;
    while (spans[t] != undefined && spans[t].innerHTML.indexOf("学习与工作经历") == -1) {
        t++;
    }
    // spans[t].parentElement.style.display = "none";
    if (spans[t] != undefined) {
        styleArr.push(spans[t]);
        dbArr.push(spans[t]);
    }
    var t = 0;
    while (spans[t] != undefined && spans[t].innerHTML.indexOf("科研项目") == -1) {
        t++;
    }
    // spans[t].parentElement.style.display = "none";
    if (spans[t] != undefined) {
        styleArr.push(spans[t]);
    }
    var t = 0;
    while (spans[t] != undefined && spans[t].innerHTML.indexOf("文章及论著") == -1) {
        t++;
    }
    // spans[t].parentElement.style.display = "none";
    if (spans[t] != undefined) {
        styleArr.push(spans[t]);
    }
    var t = 0;
    while (spans[t] != undefined && spans[t].innerHTML.indexOf("荣誉获奖") == -1) {
        t++;
    }
    // spans[t].parentElement.style.display = "none";
    if (spans[t] != undefined) {
        styleArr.push(spans[t]);
    }
    console.log("styleArr：", styleArr);

    for (let i = 0; i <= styleArr.length - 1; i++) {
        // styleArr[i].parentElement.style.display = "none"
        styleArr[i].parentElement.classList.add("header");
        styleArr[i].classList.add("header");
		while(styleArr[i].classList.indexOf("cjk") == -1) {
			styleArr[i] = styleArr[i].parentElement;
		}
		
        var t = 0;
        // console.log(styleArr[i].parentElement.childNodes);
        while (styleArr[i].parentElement.childNodes[t]) {
            console.log(t);
            if (styleArr[i].parentElement.childNodes[t].classList != undefined) {
                styleArr[i].parentElement.childNodes[t].classList.add("header")
            }
            t++;
        }
        var childs = styleArr[i].childNodes;
    }

    // 为字体添加样式
    for (var i = 0; i <= spans.length - 1; i++) {
        spans[i].classList.add("spansStyle")
    }
    for (var i = 0; i <= fonts.length - 1; i++) {
        fonts[i].classList.add("spansStyle");
        fonts[i].style = "";
        fonts[i].size = "";
    }

    for (var i = 0; i <= dbArr.length - 1; i++) {
        while (dbArr[i].parentElement.className.indexOf("Article_Content") == -1) {
            dbArr[i] = dbArr[i].parentElement;
        }
        dbArr[i].classList.add("d-b")
    }
} else {
    console.log("显示info1");
    teacher.style.display = "none";
    normal.style.display = "block";
}

// console.log();
// var i = 0;
// while (styleArr[i].parentElement.childNodes[i]) {
//     styleArr[i].parentElement.childNodes[i].classList.add("header")
//     i++;
// }


// var curUrl = window.location.href;
// if (show == "true") {
//     console.log("显示老师，存url");
//     window.localStorage.setItem("curUrl", JSON.stringify(window.location.href))
// }
// if (window.location.href != curUrl) {
//     localStorage.setItem("showTeacher", "false");
// }
// // localStorage.setItem("showTeacher", "false");

// // `    window.onbeforeunload = function() {
// //     localStorage.setItem("showTeacher", "true");
// // }`

// var curUrl = window.location.href;
// window.localStorage.setItem("curUrl", JSON.stringify(window.location.href))


// if (show == "true") {
//     window.onbeforeunload = function() {
//         localStorage.setItem("showTeacher", "true")
//     }
// } else {
//     localStorage.setItem("showTeacher", "false");
// }


// console.log("hahahah");

//   var spans = document.body.querySelector(".info2").querySelector(".detailedIntro").getElementsByTagName("span")

// var styleArr = [];

//     var t = 0;
//     while (spans[t] != undefined && spans[t].innerHTML.indexOf("主讲课程") == -1) {
//         t++;
//     }
//     // spans[t].parentElement.style.display = "none"
//     if (spans[t] != undefined) {
//         styleArr.push(spans[t]);
//         dbArr.push(spans[t]);
//     }

//     var t = 0;
//     while (spans[t] != undefined && spans[t].innerHTML.indexOf("学习与工作经历") == -1) {
//         t++;
//     }
//     // spans[t].parentElement.style.display = "none";
//     if (spans[t] != undefined) {
//         styleArr.push(spans[t]);
//         dbArr.push(spans[t]);
//     }
//     var t = 0;
//     while (spans[t] != undefined && spans[t].innerHTML.indexOf("科研项目") == -1) {
//         t++;
//     }
//     // spans[t].parentElement.style.display = "none";
//     if (spans[t] != undefined) {
//         styleArr.push(spans[t]);
//     }
//     var t = 0;
//     while (spans[t] != undefined && spans[t].innerHTML.indexOf("文章及论著") == -1) {
//         t++;
//     }
//     // spans[t].parentElement.style.display = "none";
//     if (spans[t] != undefined) {
//         styleArr.push(spans[t]);
//     }
//     var t = 0;
//     while (spans[t] != undefined && spans[t].innerHTML.indexOf("荣誉获奖") == -1) {
//         t++;
//     }
//     // spans[t].parentElement.style.display = "none";
//     if (spans[t] != undefined) {
//         styleArr.push(spans[t]);
//     }
//     console.log("styleArr：", styleArr);

//     for (let i = 0; i <= styleArr.length - 1; i++) {
//         // styleArr[i].parentElement.style.display = "none"
//         styleArr[i].parentElement.classList.add("header");
//         styleArr[i].classList.add("header");
// 		while(styleArr[i].classList.indexOf("cjk") == -1) {
// 			styleArr[i] = styleArr[i].parentElement;
// 		}
		
//         var t = 0;
//         // console.log(styleArr[i].parentElement.childNodes);
//         while (styleArr[i].parentElement.childNodes[t]) {
//             console.log(t);
//             if (styleArr[i].parentElement.childNodes[t].classList != undefined) {
//                 styleArr[i].parentElement.childNodes[t].classList.add("header")
//             }
//             t++;
//         }
//         var childs = styleArr[i].childNodes;
//     }
