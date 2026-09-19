

jQuery(document).ready(function(){

  const removeEmptyElement=()=>{
    const emptyMedia=jQuery('.wp-block-cp-timeline-content-timeline-block-child .story-content .wp-block-image img[src=""]');
    const imageBlocks=jQuery('.wp-block-cp-timeline-content-timeline-block-child .story-content .wp-block-image img[src=""]');
    const headingBlocks=jQuery('.wp-block-cp-timeline-content-timeline-block-child .story-content .wp-block-heading:empty');
    const paragraphBlocks=jQuery('.wp-block-cp-timeline-content-timeline-block-child .story-content>p:empty');
    imageBlocks?.closest('.story-content')?.addClass('cp-block-image-not');
    imageBlocks?.closest('figure')?.remove();
    headingBlocks?.remove();
    paragraphBlocks?.remove();
  };
  removeEmptyElement();

  var swiper_el=jQuery(".swiper-outer")
  var child_swiper_el=jQuery(".child-swiper-outer")
  jQuery.each(swiper_el,function(){
      var swiper_id=jQuery(this).attr("id")
      var slides=jQuery(this).attr("data-slide")
     const parentWrp=document.querySelector(`.cool-timeline-block-${swiper_id}`)?.querySelector('.cool-horizontal-timeline-body');
     const designCls=parentWrp.classList;
     const mainSlidePerView=designCls.contains('design-1') ? 1 : slides;

    if(designCls.contains('design-1')){
      var navSwiper= new Swiper('.cool-timeline-block-'+swiper_id+' .ctlb-nav-swiper-outer .swiper',{
        slidesPerView: slides,
        centeredSlides: true,
        allowTouchMove: false,
        breakpoints: {
          // when window width is >= 320px
          280: {
            slidesPerView: 1,
        
          },
          // when window width is >= 480px
          480: {
            slidesPerView: slides < 2 ? slides : 2,
        
          },
          // when window width is >= 640px
          640: {
            slidesPerView: slides,
      
          }
        }
      });
    }

    const swiper =new Swiper('.cool-timeline-block-'+swiper_id+' .swiper-outer .swiper', {
      // Default parameters
      slidesPerView: mainSlidePerView,
      thumbs: designCls.contains('design-1') ? {
        swiper: navSwiper
      } : false,
      // Navigation arrows
      navigation: {
          nextEl: '.cool-timeline-block-'+swiper_id+' .swiper-button-next',
          prevEl: '.cool-timeline-block-'+swiper_id+' .swiper-button-prev',
      },

      breakpoints: {
        // when window width is >= 320px
        280: {
          slidesPerView: 1,
       
        },
        // when window width is >= 480px
        480: {
          slidesPerView: mainSlidePerView < 2 ? mainSlidePerView : 2,
       
        },
        // when window width is >= 640px
        640: {
          slidesPerView: mainSlidePerView,
     
        }
      }
    })

    if(designCls.contains('design-1')){
      swiper.controller.control = navSwiper;
    }


      const post_swiper =new Swiper('.cool-post-timeline-block-'+swiper_id+' .swiper', {
          // Default parameters
          slidesPerView: slides,
          // Navigation arrows
          navigation: {
              nextEl: '.cool-post-timeline-block-'+swiper_id+' .swiper-button-next',
              prevEl: '.cool-post-timeline-block-'+swiper_id+' .swiper-button-prev',
          },
  
          breakpoints: {
            // when window width is >= 320px
            280: {
              slidesPerView: 1,
           
            },
            // when window width is >= 480px
            480: {
              slidesPerView: slides < 2 ? slides : 2,
           
            },
            // when window width is >= 640px
            640: {
              slidesPerView: slides,
         
            }
          }
    })
  })
  jQuery.each(child_swiper_el,function(){
    var swiper_id=jQuery(this).attr("id")
    const media_swiper =new Swiper('.timeline-child-swiper-outer-'+swiper_id+' .child-swiper', {
        // Default parameters
        slidesPerView: 1  ,
        // Navigation arrows
        navigation: {
            nextEl: '.timeline-child-swiper-outer-'+swiper_id+' .swiper-child-button-next',
            prevEl: '.timeline-child-swiper-outer-'+swiper_id+' .swiper-child-button-prev',
        },
  })
  })
})