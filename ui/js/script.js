$(function(){
	// 사진으로 보는 슬라이드
	p_sldr({
		seTarget: '.sldrQckPage',
		seView: '.sldrQckPage-view',
		controls: false,
		pager: false,
		useCss: false,
		seBtnPrev: '.sldrQckPage-btnPrev',
		seBtnNext: '.sldrQckPage-btnNext',
		slideWidth: 105,
		moveSlides: 1,
		maxSlides: 4,
		minSlides: 4,
		reload: function(objSlider){
			var wW = window.innerWidth;
			if(0 <= wW && wW < 400){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					maxSlides: 2,
					minSlides: 2,
					moveSlides: 1,
					slideWidth: 105
				});
			}else if(400 <= wW && wW < 640){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					maxSlides: 3,
					minSlides: 3,
					moveSlides: 1,
					slideWidth: 105
				});
			}else if(640 <= wW){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					maxSlides: 4,
					minSlides: 4,
					moveSlides: 1,
					slideWidth: 105
				});
			}
		}
	});
	
	// 군정소식 슬라이드
	p_sldr({
		seTarget: '.sldrNewsLetter',
		seView: '.sldrNewsLetter-view',
		controls: false,
		pager: false,
		seBtnPrev: '.sldrNewsLetter-btnPrev',
		seBtnNext: '.sldrNewsLetter-btnNext',
		mode: 'horizontal',
		slideWidth: 172,
		onSliderLoad: function(currIdx){ 
			$('.sldrNewsLetter-item').eq(currIdx).css({visibility: 'visible'}).siblings().css({visibility: 'hidden'});
		},
		onSlideBefore: function($slideElement, oldIdx, newIdx){
			$slideElement.css({visibility: 'visible'}).siblings().css({visibility: 'visible'});
		},
		onSlideAfter: function($slideElement, oldIdx, newIdx){
			$('.sldrNewsLetter-btnDownload').eq(newIdx).css({display: 'block'}).siblings().hide();
			$slideElement.css({visibility: 'visible'}).siblings().css({visibility: 'hidden'}); 
		},
		reload: function(objSlider){
			var wW = window.innerWidth;
			if(0 <= wW && wW < 400){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					maxSlides: 1
				});
			}
		}
	});
	
	// 공지사항 슬라이드
	p_sldr({
		seTarget: '.sldrNotice',
		seView: '.sldrNotice-view',
		controls: false,
		pager: false,
		seBtnPrev: '.sldrNotice-btnPrev',
		seBtnNext: '.sldrNotice-btnNext',
		mode: 'vertical',
		swipeThreshold: 10
	});
	
	// 정선메인 슬라이드
	p_sldr({
		seTarget: '.sldrEvts',
		seView: '.sldrEvts-view',
		controls: false,
		pager: false,
		auto: true,
		pause: 8000,
		//slideWidth: 300, 213라인
		seBtnPrev: '.sldrEvts-btnPrev',
		seBtnNext: '.sldrEvts-btnNext',
		seBtnStop: '.sldrEvts-btnStop',
		seBtnPlay: '.sldrEvts-btnPlay',
		onSlideAfter: function($elem, currIdx, oldIdx){
			$('.sldrEvts-pageCounter').children().eq(0).text($elem.index());
		}
	});
	
	// 정선축제 슬라이드
	p_sldr({
		seTarget: '.sldrEvts2',
		seView: '.sldrEvts2-view',
		controls: false,
		pager: false,
		seBtnPrev: '.sldrEvts2-btnPrev',
		seBtnNext: '.sldrEvts2-btnNext',
		onSlideAfter: function($elem, currIdx, oldIdx){
			$('.sldrEvts2-pageCounter').children().eq(0).text($elem.index());
		}
	});
	
	//지명유래 탭
	function p_tabLo(opts){
		/*
		 * target: tab: conts: activeClass:
		 */
		var $T = $(opts.seTarget);
						 
		if($T.length == 0){return;}
		
		$T.find('.'+opts.activeClass).find(opts.seConts).show();
		// 콘텐츠를 보이고나서 높이가 동기화
		var tabH;
		var contsH;
		var tabSize = $T.children().children().length;
		
		function p_setHeight(){
			// 탭의 줄 수를 구함.
			var tabW = $T.children().children().eq(1).find(opts.seTab).width();
			var divid = Math.ceil( (tabW * tabSize) / $T.width() ); 
			
			// 탭과 콘텐츠의 높이를 구함. 	
			tabH = $T.find('.'+opts.activeClass).find(opts.seTab).outerHeight(true);
			contsH = $T.find('.'+opts.activeClass).find(opts.seConts).outerHeight(true);
			
			// 탭 래퍼의 높이를 설정.
			tabH *= divid;
			$T.height(tabH + contsH);
		}
		p_setHeight();
		
		if(opts.evts){
			evts = opts.evts;
		}else {
			evts = 'focusin mouseover';
		}
		
		$T.find(opts.seTab).on(evts, function(){
			var $This = $(this);
			$This.parent().addClass(opts.activeClass).find(opts.seConts).show();
			$This.parent().siblings().removeClass(opts.activeClass).find(opts.seConts).hide();
			// 콘텐츠가 보인 후 높이를 동기화
			p_setHeight();
		});
		
		$(window).resize(function(){
			p_setHeight();
		});
	}
	
	p_tabLo({
		seTarget: '.nameTab',
		activeClass: 'select',
		seTab: '.nameTab-tit',
		seConts: '.nameTab-conts',
		evts: 'click'
	});
	
	//메인탭
	function p_tabMain(){
		var $tabMain = $('.tabMain');
		if($tabMain.length == 0){return;}	
		var $tabList = $('.tabMain-tabList'),
			$contsList = $('.tabMain-contsList'),
			$innerList = $('.tabMain-inner'),
			active = 'active';
		$tabList.find('li').each(function(idx, elem){
			$(elem).on('focusin mouseover click', function(){
				var $this = $(this);
				$this.addClass(active).siblings().removeClass(active);
				$contsList.children().eq(idx).addClass(active).siblings().removeClass(active);
			});
		});
		$innerList.find('.tabMain-tit a').each(function(idx, elem){
			$(elem).on('focusin mouseover click', function(){
				var $this = $(this);
				$this.parent().parent().addClass(active).siblings().removeClass(active);
				$contsList.children().eq(idx).addClass(active).siblings().removeClass(active);
			});
		});
	}
	p_tabMain();
	
	// 국민 , 사업자 , 관광객  수정
	function p_toggleInfo(){
		var $selector = $('.qckCustomize');
		if($selector.length == 0){return;}
		$selector.each(function(idx, elem){
			$(elem).find('.qckCustomize-tit').on('click', function(){
				var $this = $(this);
				if($this.hasClass('active')){
					$this.parent().addClass('noactive').removeClass('active');
					$this.addClass('noactive').removeClass('active');
				}
				else if($this.hasClass('noactive')){
					$this.parent().addClass('active').removeClass('noactive');
					$this.addClass('active').removeClass('noactive');
				}
			});
		});
	}
	p_toggleInfo();

	// 사이트맵 토글
	function p_toggleSitemap(){
		var $selector = $('.sitemap-depth2 li');
		if($selector.length == 0){return;}
		$selector.each(function(idx, elem){
			$(elem).find('.sitemap-depth2Link').on('click', function(){
				var $this = $(this);
				if($this.hasClass('active')){
					$this.parent().addClass('noactive').removeClass('active');
					$this.addClass('noactive').removeClass('active');
				}
				else if($this.hasClass('noactive')){
					$this.parent().addClass('active').removeClass('noactive');
					$this.addClass('active').removeClass('noactive');
				}
			});
		});
	}
	p_toggleSitemap();
	
	// 세입세출예산서 토글
	function p_taxToggle(){
		var $selector = $('.taxbudget-wrapper div');
		if($selector.length == 0){return;}
		$selector.each(function(idx, elem){
			$(elem).find('.taxbudget-has').on('click', function(){
				var $this = $(this);
				if($this.hasClass('active')){
					$this.parent().siblings().children().addClass('noactive').removeClass('active');
					$this.addClass('noactive').removeClass('active');
				}
				else if($this.hasClass('noactive')){
					$this.parent().siblings().children().addClass('noactive').removeClass('active');
					$this.addClass('active').removeClass('noactive');
				}
			});
		});
	}
	p_taxToggle();
	
	/*
	// 세입세출예산서 토글
	function p_taxToggle(){
		var $taxBox = $('.taxbudget-has');
		$taxBox.on('click', function(){
			var $this = $(this);
			
			if(!$this.hasClass('select')){
				$this.addClass('select');
				$this.siblings().removeClass('select');
			}else{
				$this.removeClass('select');
			}
		});
	};
	p_taxToggle();
	*/

	// 농업기술센터 슬라이드 
	p_sldr({
		seTarget: '.atcSldrMain',
		seView: '.atcSldrMain-view',
		seBtnNext: '.atcSldrMain-btnNext',
		seBtnPrev: '.atcSldrMain-btnPrev',
		controls: false,
		pager: false,
		auto: true,
		reload: function (objSlider){
			var wW = window.innerWidth;
			$(this.seView).parents('.bx-wrapper').css('max-width','100%');
			var sliderW = $(this.seView).parent().width();
			if(wW < 460){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 2,
					maxSlides: 2,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*2))/2,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(460 <= wW && wW < 700){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 3,
					maxSlides: 3,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*3))/3,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(700 <= wW && wW < 800){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 4,
					maxSlides: 4,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*5))/4,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(800 <= wW && wW < 900){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 5,
					maxSlides: 5,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*5))/5,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(900 <= wW ){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 6,
					maxSlides: 6,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*6))/6,
					slideWidth: 108,
					moveSlides: 1
				});
			}
		}
	});	
	
	// 탭 
	p_tab({
		seTarget: '.atcTabMain',
		seTab: '.atcTabMain-btnTab',
		seConts: '.atctabMain-conts',
		activeClass: 'active'
	});

	// 보건소 슬라이드 
	p_sldr({
		seTarget: '.healthSldrMain',
		seView: '.healthSldrMain-view',
		seBtnNext: '.healthSldrMain-btnNext',
		seBtnPrev: '.healthSldrMain-btnPrev',
		controls: false,
		pager: false,
		auto: true,
		reload: function (objSlider){
			var wW = window.innerWidth;
			$(this.seView).parents('.bx-wrapper').css('max-width','100%');
			var sliderW = $(this.seView).parent().width();
			console.log(sliderW);
			if(wW < 460){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 2,
					maxSlides: 2,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*2))/2,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(460 <= wW && wW < 700){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 3,
					maxSlides: 3,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*3))/3,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(700 <= wW && wW < 800){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 4,
					maxSlides: 4,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*5))/4,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(800 <= wW && wW < 900){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 5,
					maxSlides: 5,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*5))/5,
					slideWidth: 108,
					moveSlides: 1
				});
			}
			else if(900 <= wW ){
				objSlider.reloadSlider({
					pager: false,
					controls: false,
					auto: false,
					speed: 500,
					minSlides: 6,
					maxSlides: 6,
					slideSelector: 'li',
					slideMargin: (sliderW-(108*6))/6,
					slideWidth: 108,
					moveSlides: 1
				});
			}
		}
	});	
	
	// 탭 
	p_tab({
		seTarget: '.healthTabMain',
		seTab: '.healthTabMain-btnTab',
		seConts: '.healthtabMain-conts',
		activeClass: 'active'
	});

	// 읍면동 바로가기 슬라이드
	p_sldr({
		seTarget: '.eupPanel-main',
		seView: '.u-eupCrsl-view',
		controls: false,
		pager: false,
		auto: true,
		pause: 8000,
		seBtnPrev: '.u-eupCrsl-btnPrev',
		seBtnNext: '.u-eupCrsl-btnNext',
		seBtnStop: '.u-eupCrsl-btnStop',
		seBtnPlay: '.u-eupCrsl-btnPlay'
	});

	// tab
	p_tab({
		target: '.cmct-eupTab',
		tab: '.u-eupTab-btnTab',
		conts: '.u-eupTab-conts',
		activeClass: 'active'
	});

	function chkURL(name){ 
		var lo = location.href;
		var loArray = lo.split('/');
		var chkPage = false;
		for( x in loArray){
			if(loArray[x] == name) {
				chkPage = true;
				break;
			};
		}
		return  chkPage;
	}
	//지도api 
	function pub_customDaumMapApi(m){
		if($('.root_daum_roughmap').length == 0){
			return;
		}
		var mapInfo = m;
		for(var x in mapInfo){
			if(chkURL(mapInfo[x][0])){
				new daum.roughmap.Lander({
					"timestamp" : mapInfo[x][1],
					"key" : mapInfo[x][2],
					"mapWidth" : mapInfo[x][3],
					"mapHeight" : mapInfo[x][4]
				}).render();
				if(!mapInfo[x][5]){
					break;
				}
			}	
		}
	}
	pub_customDaumMapApi([
	    ['hc_facility', '1512459908543', 'kr8t', 1000, 370, false], //보건소
		['directions', '1512463966739', 'krbc', 1000, 370, false], //시청안내
		['facility-jeongseoneup', '1512464295070', 'krbj', 1000, 370, false], //정선읍
		['facility-gohaneup', '1512520686821', 'krh6', 1000, 370, false], //고한읍
		['facility-sabukeup', '1512521719012', 'kri2', 1000, 370, false], //사북읍
		['facility-sindongeup', '1512526640900', 'kro8', 1000, 370, false], //신동읍
		['facility-hwaammyeon', '1512526690644', 'kroa', 1000, 370, false], //화암면
		['facility-nammyeon', '1512525346367', 'krmq', 1000, 370, false], //남면
		['facility-yeoryangmyeon', '1512525565541', 'krn2', 1000, 370, false], //여량면
		['facility-bukpyeongmyeon', '1512525622764', 'krn5', 1000, 370, false], //북평면
		['facility-imgyemyeon', '1512522603791', 'krj2', 1000, 370, false] //임계면
	]);

});