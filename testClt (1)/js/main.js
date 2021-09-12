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
}