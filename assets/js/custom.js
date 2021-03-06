(function ($) {

    // 배너 이미지 슬라이드
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        // autoplay: {
        // elay: 5000,
        // },
    });

    // 영화차트 이미지 슬라이드
    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        mousewheel: true,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay: 6000,
        },
        // breakpoints: responsive 반응형 화면 크기마다 갯수 설정
        breakpoints: {
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });

    // 영화차트 탭 메뉴
    var movBtn = $(".movie_title > ul > li");
    var movCont = $(".movie_chart > div");

    // hide : 감추는 함수
    // eq : 순서대로 정하는 것
    movCont.hide().eq(0).show();

    movBtn.click(function (e) {
        e.preventDefault();
        // this를 사용하게 되면 클릭시 그게 몇번째가 클릭 되는지 그 index번호를 알수 있다
        var target = $(this);
        // 그 클린된 번호를 받아 index에 넣는다
        var index = target.index();
        movBtn.removeClass("active");
        target.addClass("active");
        movCont.css("display", "none");
        movCont.eq(index).css("display", "block");
    });

    // 공지사항 탭 메뉴
    var tabMenu = $(".notice");

    // 컨텐츠 내용을 숨김
    tabMenu.find(" ul > li >ul").hide();
    tabMenu.find("li.active >ul").show();

    function tabList(e) {
        e.preventDefault(); // #의 기능을 차단
        var target = $(this);
        // next() : 형제를 찾는다
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        // 버튼을 클릭하면 형제의 ~ul을 보여주고
        // 부모의 li태그에 클래스 추가하고
        // 형제의 li태그에 클래스를 제거하고
        // 제거한 자식의 ul 태그를 숨겨줌
    }

    // focus : 전체공지에서 탭을 누르면 전체 공지 ul에 바로 포커스를 가게 한다
    tabMenu.find("ul > li> a").click(tabList).focus(tabList);

})(jQuery);