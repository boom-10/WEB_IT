window.onload = function() {
    // 保存showTeacher在浏览器上
    
    var News = document.querySelector('.News')
    var Infor = document.querySelector('.Container')
    var Fengcai = document.querySelector('.LastContainer');
    var btnNews = document.querySelector('.testbtn');
    var PrimeNav = document.querySelector('.PrimeNav');
    var BigImg = document.querySelector('.BigImg')
    var Arrow = document.querySelector('.blueArrows');
    var Footer = document.querySelector('.ContainerDiv');
    var blueArrowsContainer = document.querySelector('.blue');
    var whiteArrowsContainer = document.querySelector('.white');
    var whiteArrow = document.querySelector('.whiteArrows');
    var otherNav = document.querySelector('.OtherNav');
    var NavShow = true;
    var NewsIsShow = false;
    var InfoIsShow = false;

    var FengcaiIsShow = false;
    var getScrollTopNum = 0;
    var tdlist = document.querySelector('.FistSlideShow').children[0].children[0].children[0].children;
    var tdlist2 = document.querySelector('.SecondSlideShow').children[0].children[0].children[0].children;
    var FirstPre = document.querySelector('#FirstPre');
    var SecondPre = document.querySelector('#SecondPre');
    var SecondNext = document.querySelector('#SecondNext');
    var FirstSlideShowStep = 0;
    var SecondSlideShowStep = 0;
    var FirstNext = document.querySelector('#FirstNext');
    var isShowArray = [NavShow, NewsIsShow, InfoIsShow, FengcaiIsShow];
    var objArray = [{
            obj: [PrimeNav, otherNav, BigImg],
            isShow: true,
        },
        {
            obj: [News],
            isShow: false,
        },
        {
            obj: [Infor],
            isShow: false,
        },
        {
            obj: [Fengcai, Footer],
            isShow: false,
        }
    ]
    tdlist[2].classList.add('DisplayNone');
    tdlist[3].classList.add('DisplayNone');
    tdlist[4].classList.add('DisplayNone');
    tdlist[5].classList.add('DisplayNone');
    tdlist2[2].classList.add('DisplayNone');
    tdlist2[3].classList.add('DisplayNone');
    tdlist2[4].classList.add('DisplayNone');
    tdlist2[5].classList.add('DisplayNone');
    FirstPre.onclick = function() {
        if (FirstSlideShowStep > 0) {
            for (var i = 0; i < tdlist.length; i++) {
                tdlist[i].classList.add('DisplayNone');
                // tdlist[i].classList.remove('animate__slideInRight');
                // tdlist[i].classList.add('animate__fadeIn');
            }
            FirstSlideShowStep--;
            tdlist[FirstSlideShowStep * 2 + 1].classList.remove('DisplayNone');
            tdlist[FirstSlideShowStep * 2].classList.remove('DisplayNone');

        }
    }
    SecondPre.onclick = function() {
        if (SecondSlideShowStep > 0) {
            for (var i = 0; i < tdlist2.length; i++) {
                tdlist2[i].classList.add('DisplayNone');
                // tdlist[i].classList.remove('animate__slideInRight');
                // tdlist[i].classList.add('animate__fadeIn');
            }
            SecondSlideShowStep--;
            tdlist2[SecondSlideShowStep * 2 + 1].classList.remove('DisplayNone');
            tdlist2[SecondSlideShowStep * 2].classList.remove('DisplayNone');
        }
    }
    FirstNext.onclick = function() {
        if (FirstSlideShowStep < 2) {
            for (var i = 0; i < tdlist.length; i++) {
                tdlist[i].classList.add('DisplayNone');
                tdlist[i].classList.add('animate__animated');
                // tdlist[i].classList.remove('animate__slideInLeft');
                tdlist[i].classList.add('animate__fadeIn');
            }
            FirstSlideShowStep++;
            tdlist[FirstSlideShowStep * 2 + 1].classList.remove('DisplayNone');
            tdlist[FirstSlideShowStep * 2].classList.remove('DisplayNone');
        }
    }
    SecondNext.onclick = function() {
            if (SecondSlideShowStep < 2) {
                for (var i = 0; i < tdlist2.length; i++) {
                    tdlist2[i].classList.add('DisplayNone');
                    tdlist2[i].classList.add('animate__animated');
                    // tdlist[i].classList.remove('animate__slideInLeft');
                    tdlist2[i].classList.add('animate__fadeIn');
                }
                SecondSlideShowStep++;
                tdlist2[SecondSlideShowStep * 2].classList.remove('DisplayNone');
                tdlist2[SecondSlideShowStep * 2 + 1].classList.remove('DisplayNone');
            }
        }
        // 首页效果2
    Arrow.onclick = function() {
        objArray[0].obj[0].style.display = 'none';
        objArray[0].obj[1].style.display = 'block';
        objArray[0].obj[2].style.display = 'none';
        objArray[1].obj[0].style.display = 'flex';
        objArray[2].obj[0].style.display = 'flex';
        objArray[3].obj[1].style.display = 'flex';
        objArray[3].obj[0].style.display = 'flex';
        // objArray[1].obj[0].style.display = 'flex';
        objArray[0].isShow = false;
        objArray[1].isShow = true;
        blueArrowsContainer.style.display = 'none';
    }

    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }
    window.onmousewheel = function(e) {
            // console.log();
            console.log("e", typeof(e.wheelDelta), e.wheelDelta);
            if (e.wheelDelta < 0) {
                if (objArray[0].isShow) {
                    objArray[0].obj[0].style.display = 'none';
                    objArray[0].obj[1].style.display = 'block';
                    objArray[0].obj[2].style.display = 'none';
                    objArray[1].obj[0].style.display = 'flex';
                    var timer = setTimeout(function() {
                        objArray[2].obj[0].style.display = 'flex';
                        objArray[3].obj[1].style.display = 'flex';
                        objArray[3].obj[0].style.display = 'flex';
                    }, 100);
                    // objArray[1].obj[0].style.display = 'flex';
                    objArray[0].isShow = false;
                    objArray[1].isShow = true;
                    blueArrowsContainer.style.display = 'none';
                }
            } else if (e.wheelDelta > 0) {
                if (objArray[1].isShow) {
                    if (getScrollTop() == '0') {
                        objArray[0].obj[0].style.display = 'block';
                        objArray[0].obj[1].style.display = 'none';
                        objArray[0].obj[2].style.display = 'flex';
                        objArray[1].obj[0].style.display = 'none';
                        objArray[2].obj[0].style.display = 'none';
                        objArray[3].obj[1].style.display = 'none';
                        objArray[3].obj[0].style.display = 'none';
                        // objArray[1].obj[0].style.display = 'flex';
                        // console.log('fuck');
                        objArray[0].isShow = true;
                        blueArrowsContainer.style.display = 'flex';
                        objArray[1].isShow = false;
                    }
                }
            }
        }
        // 主页效果1
        // Arrow.onclick = function() {
        //     objArray[0].obj[0].style.display = 'none';
        //     objArray[0].obj[1].style.display = 'block';
        //     objArray[0].obj[2].style.display = 'none';
        //     objArray[1].obj[0].style.display = 'flex';
        //     objArray[1].isShow = true;
        //     objArray[0].isShow = false;
        //     blueArrowsContainer.style.display = 'none';
        //     // whiteArrowsContainer.style.display = 'flex';
        // }
        // whiteArrow.onclick = function() {
        //     for (var i = 1; i < objArray.length - 1; i++) {
        //         if (objArray[i].isShow) {
        //             objArray[i].isShow = false;
        //             objArray[i + 1].isShow = true;
        //             for (var j = 0; j < objArray[i].obj.length; j++) {
        //                 objArray[i].obj[j].style.display = 'none';
        //             }
        //             for (var k = 0; k < objArray[i + 1].obj.length; k++) {
        //                 objArray[i + 1].obj[k].style.display = 'flex';
        //             }
        //             break;
        //         }
        //     }
        //     if (objArray[3].isShow) {
        //         whiteArrowsContainer.style.display = 'none';
        //     }
        // }
        // window.onmousewheel = function(e) {
        //     if (e.wheelDelta == 150) {
        //         if (objArray[1].isShow) {
        //             objArray[0].obj[0].style.display = 'block';
        //             objArray[0].obj[1].style.display = 'none';
        //             objArray[0].obj[2].style.display = 'flex';
        //             objArray[1].obj[0].style.display = 'none';
        //             objArray[1].isShow = false;
        //             objArray[0].isShow = true;
        //             blueArrowsContainer.style.display = 'flex';
        //             whiteArrowsContainer.style.display = 'none'
        //         } else if (objArray[2].isShow) {
        //             objArray[2].isShow = false;
        //             objArray[1].isShow = true;
        //             objArray[2].obj[0].style.display = 'none';
        //             objArray[1].obj[0].style.display = 'flex';
        //         } else if (objArray[3].isShow) {
        //             objArray[3].isShow = false;
        //             objArray[2].isShow = true;
        //             objArray[2].obj[0].style.display = 'flex';
        //             objArray[3].obj[0].style.display = 'none';
        //             objArray[3].obj[1].style.display = 'none';
        //             whiteArrowsContainer.style.display = 'flex';

    //         }
    //     } else if (e.wheelDelta == 120) {
    //         if (objArray[1].isShow) {
    //             objArray[0].obj[0].style.display = 'block';
    //             objArray[0].obj[1].style.display = 'none';
    //             objArray[0].obj[2].style.display = 'flex';
    //             objArray[1].obj[0].style.display = 'none';
    //             objArray[1].isShow = false;
    //             objArray[0].isShow = true;
    //             blueArrowsContainer.style.display = 'flex';
    //             whiteArrowsContainer.style.display = 'none'
    //         } else if (objArray[2].isShow) {
    //             objArray[2].isShow = false;
    //             objArray[1].isShow = true;
    //             objArray[2].obj[0].style.display = 'none';
    //             objArray[1].obj[0].style.display = 'flex';
    //         } else if (objArray[3].isShow) {
    //             objArray[3].isShow = false;
    //             objArray[2].isShow = true;
    //             objArray[2].obj[0].style.display = 'flex';
    //             objArray[3].obj[0].style.display = 'none';
    //             objArray[3].obj[1].style.display = 'none';
    //             whiteArrowsContainer.style.display = 'flex';

    //         }
    //     } else {
    //         if (objArray[0].isShow) {
    //             objArray[0].obj[0].style.display = 'none';
    //             objArray[0].obj[1].style.display = 'block';
    //             objArray[0].obj[2].style.display = 'none';
    //             objArray[1].obj[0].style.display = 'flex';
    //             objArray[1].isShow = true;
    //             objArray[0].isShow = false;
    //             blueArrowsContainer.style.display = 'none';
    //             whiteArrowsContainer.style.display = 'flex';
    //         } else {
    //             for (var i = 1; i < objArray.length - 1; i++) {
    //                 if (objArray[i].isShow) {
    //                     objArray[i].isShow = false;
    //                     objArray[i + 1].isShow = true;
    //                     for (var j = 0; j < objArray[i].obj.length; j++) {
    //                         objArray[i].obj[j].style.display = 'none';
    //                     }
    //                     for (var k = 0; k < 1; k++) {
    //                         objArray[i + 1].obj[k].style.display = 'flex';
    //                     }
    //                     break;
    //                 }
    //             }
    //             if (objArray[3].isShow) {
    //                 whiteArrowsContainer.style.display = 'none';
    //                 var timer = setTimeout(function() {
    //                     objArray[3].obj[1].style.display = 'flex';
    //                 }, 100);
    //             }
    //         }
    //     }
    // }
    window.localStorage.setItem("showTeacher", "false");
    window.addEventListener('DOMMouseScroll', function(event) {})
    var swiper = new Swiper('.swiper-container', {
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function(swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
        var all_a = document.getElementsByTagName('a');
    console.log(all_a);
    for (var i = 0; i < all_a.length; i++) {
        all_a[i].target = "_blank";
    }
    var nav = document.querySelector('.wap_nav');
    // var nav=document.getElementsByClassName('wap_nav')
    console.log(nav);
    var test = document.getElementsByClassName('wap_nav');
    console.log(this.test);

    function handleFontSize() {
        console.log("handle被调用了");
        // 设置网页字体为默认大小
        window.WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        // 重写设置网页字体大小的事件
        window.WeixinJSBridge.on('menu:setfont', function() {
            window.WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
    }

    function banWechat() {
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
            console.log("我被调用了1");
            handleFontSize();
        } else {
            console.log("我被调用了2");
            if (document.addEventListener) {
                document.addEventListener("WeixinJSBridgeReady", handleFontSize(), false);
            } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", handleFontSize());
                document.attachEvent("onWeixinJSBridgeReady", handleFontSize());  }
        }
    }
    banWechat();


    var lis2 = test[1].children;
    var ToFooter = document.getElementsByClassName('ToFooter');
    console.log(this.ToFooter);
    var lis = nav.children; // 得到4个小li
    // 2.循环注册事件
    var Divwidth = 0;
    var isTrue = true;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function() {
            this.children[2].style.display = 'block';
            // var timer=setInterval(addOpacity(sub_nav),1000)
        }
        lis[i].onmouseout = function() {
            this.children[2].style.display = 'none';
        }
        lis2[i].onmouseover = function() {
            this.children[2].style.display = 'block';
            // var timer=setInterval(addOpacity(sub_nav),1000)
        }
        lis2[i].onmouseout = function() {
            this.children[2].style.display = 'none';
        }
    }
    for (var i = 0; i < this.ToFooter.length; i++) {
        ToFooter[i].onclick = function() {
            console.log('footer');
            var t = document.body.clientHeight;
            window.scroll({
                top: t,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    

}