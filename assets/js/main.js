$(function(){

// 헤더 영역
    $('.gnb .nav-item').hover(function(){
        if($(this).find('.sub-list').length){
            $('.header').addClass('on');
            $(this).find('.sub-list').addClass('on')
        }
    },function(){
        $('.header').removeClass('on')
        $(this).find('.sub-list').removeClass('on')
    })

    

    $('.sub-list li:first-child').addClass('on')
    $('.sub-list li').hover(function(){
        //올
        $(this).addClass('on').siblings().removeClass('on')
    },function(){
        //땟]
        $('.sub-list li:first-child').addClass('on').siblings().removeClass('on')
    })

    // sc-vision 재생버튼 영역 
    $('#playButton').click(function(){

        if($(this).hasClass('on')){
            $('#myVideo').get(0).play()
        }else{
            $('#myVideo').get(0).pause()
        }

        $(this).toggleClass('on');
    })

    
    $('.btn-relate').click(function(e){

       e.preventDefault();

        $('.relate-item').toggleClass('on')

        })

// 사이드메뉴 열기 닫기  
    $('.btn-menu').click(function(){
        $('.side-gnb').addClass('on')
      })
    
      $('.close').click(function(){
        $('.side-gnb').removeClass('on')
      })


// 사이드메뉴 li 토글버튼
$('.side-gnb .side-item svg').click(function(e){
    e.preventDefault();

    $(this).toggleClass('on')
    $(this).siblings().slideToggle();
  })

  // 사이드메뉴 안에 sub-list 열고 닫기
  $('.side-list .flex').click(function(e){
    e.preventDefault(); //링크이벤트막기

    if ($(this).hasClass('on')) { //만약에 내가 클릭한 'nav'가 on이 있습니가?
               //예 있습니다 (두번째클릭)

        $(this).removeClass('on').siblings('.sub-list').slideUp()
        
    } else { //아니요 없습니다. (첫클릭)
        
        //모두닫히고
        $('.nav').removeClass('on').siblings('.sub-list').slideUp()

        
        //나만열려요
        $(this).addClass('on').siblings('.sub-list').slideDown()
        
    }
})


// 메인슬라이드 영역
    var swiper = new Swiper(".main-slide", {
        pagination: {
             el: ".swiper-pagination",
             clickable:true,
        }
    });

    

}) //지우지마세요

