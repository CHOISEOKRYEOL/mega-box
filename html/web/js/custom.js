// 윈도우 팝업
$(".window").click(function (e) {
    e.preventDefault();
    // window.open("파일명", "팝업이름", "옵션설정");
    // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbars=0,toolbar=0, menubar=0");
});

// 레이어 팝업
$(".layer").click(function (e) {
    e.preventDefault();
    $("#layer").slideDown(300);
});
$("#layer .close").click(function (e) {
    e.preventDefault();
    $("#layer").slideUp(300);
});

//탭메뉴
var $tab_list = $(".tab_menu");
// tab_menu의 ul에 ul을 찾고(find) 그것은 숨긴다(hide)
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


// 배너
// html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 --> 제이쿼리 호출
$('.ban').slick({
    // slick 사이트에 있는 효과들
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

// 갤러리
// slick() : 실행 함수
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function () {
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function () {
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function () {
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function () {
    $(".gallery_img").slick("slickNext");
});

// 버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function (e) {
    // preventDefault:클릭시 #으로 이동하게 설정되있는데 그것을 없애준다
    e.preventDefault();
    // 1. display:blcok으로 바꿔준다
    // $("#cont_nav").css("display","block");
    // 2. show: display:none에서 block으로 바꿔주는 메소드
    // $("#cont_nav").show();
    // 3. fadein: 천천히 바꿔주는 효과
    // $("#cont_nav").fadeIn();
    // 4. 약간의 애니메이션이 작동되면서 천천히 내려간다
    // $("#cont_nav").slideDown();
    // 5. 위에 것들은 한 번 하면 끝이지만 toggle은 올렸다 내렸다 반복적으로 가능
    // $("#cont_nav").toggle();
    // 6.fadeToggle: 천천히 나타났다가 없어지게 할 수 있는 메소드
    // $("#cont_nav").fadeToggle();
    // 7. 조금 더 부드럽게 토글되는 메소드
    $("#cont_nav").slideToggle(200);

    // 버튼 클릭시 버튼 모양을 바꿔주면서 토글할 수 있다
    // $(".tit .btn").toggleClass("on");
    // 자기 자신을 표현할때 this를 쓴다
    $(this).toggleClass("on");
});