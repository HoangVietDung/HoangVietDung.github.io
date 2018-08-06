var cards = ['b1','b2','b3','b4','b5'];
var current = null;
var count = 0;
var remainingTime = 35;
var isPlaying = false;
var running = null;
var normalTime = 5;
var hardTime = 10;
var maxTime = remainingTime = normalTime;
//Đảo vị trí
function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 != currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function flip(card) {
	
	//vô hiệu hóa ấn vào thẻ
	$(card).toggleClass('flipped');
	console.log(card);
	$(card).css('pointer-events','none');
	if(!current){
		
		//bắt đầu đoán
		current = $(card);
		console.log(current);
		//bật nhạc nền
		document.getElementById('bg-ms').play();

	}else {
		console.log(current.attr('data-name'));
		console.log( $(card).attr('data-name'));
		
		//vô hiệu hóa tất cả các thẻ bài
		$('.card').css('pointer-events','none');


		if (current.attr('data-name') != $(card).attr('data-name')) {
			console.log(current);
			
			//âm thanh
			document.getElementById('w-ms').play();

			//tự úp thẻ bài nếu không đúng
			setTimeout(function(){
			current.toggleClass('flipped')			
			$(card).toggleClass('flipped');
			console.log('khác nhau')
			current=null;

			//mở lại click cho các thẻ
			$('.card').css('pointer-events','auto');

		},500)
		}else{
			
			//âm thanh khi chọn đúng thẻ bài
			document.getElementById('t-ms').play();
			
			//ẩn thẻ bài nếu chọn đúng
			setTimeout(function(){
			console.log('giống nhau')
			$(card).css('opacity','0');
			current.css('opacity', '0');
			count +=1;
			current = null;
			$('.card').css('pointer-events','auto');


			//chiến thắng khi chọn đúng tất cả thẻ bài
			if(count == 5){
				//mở nhạc chiến thắng
				document.getElementById('win-ms').play();
				// tắt nhạc nền
				document.getElementById('bg-ms').load();
				//dừng game
				stopGame();
				  openModal('win');
				  $('.btn-reset').css('opacity', '1');

			}
			},500)
		}
	}
}

$(function(){
	  // thanh thời gian
  //$('.progressbar').css('display', 'none');
  $('.progress').css('display', 'none');
  $(".six-sec-ease-in-out").animate({
    width: "100%"
  }, 1);
  $('.six-sec-ease-in-out').css('background-color', '#32CD32');

	cards = cards.concat(cards);

	cards = shuffle(cards);

	//thêm thẻ vào wrap
	var html = '';
	for(var i = 0; i < cards.length; i++){
		html += '<div class="card" data-name="' + cards[i] + '" onclick="flip(this)">'+
		'<div class="front"><img src="img/fr2.jpg"></div>' +
		'<div class="back"><img src="img/' + cards[i] +'.jpg"/></div>' + '</div></div>';		
	};
	$('.grid').html(html);
	//mở modal bắt đầu
	openModal('begin');
	var run = setInterval(function(){
		remainingTime--;
	
		// console.log(remainingTime);
		if(remainingTime == 0 && count < 5){
			//mở nhạc thua
			document.getElementById('lose-ms').play();
			//tắt nhạc nền
			document.getElementById('bg-ms').load();
			// clearInterval(run)
			stopGame();
				  openModal('lose');
				  $('.btn-reset').css('opacity', '1');
		}
	},1000);
});

console.log(maxTime)
function stopGame(){
	isPlaying = false;
	if(running !== null){
		clearInterval(running);
	}
	$('card').css('pointer-events', 'none');
}
function openModal(type) {
  $('.modal-backdrop').css('display', 'block');
  $('.modal').hide();
  // hiện modal ra 
  $('.modal.' + type).fadeIn();

}
function closeModal() {
  $('.modal-backdrop').css('display', 'none');
  $('.modal').hide();
}


function startGame(mode) {
	if (mode == 1) {
	  // dễ
	  maxTime = remainingTime = normalTime;
	} else {
	  // khó
	  maxTime = remainingTime = hardTime;
	}
  
  
	//đóng modal
	closeModal();
	$('.btn-reset').css('opacity', '0');
  
	// bắt đầu game
	isPlaying = true;
	point = 0;
	var current = null;
	$('.card').css('pointer-events', 'auto');
  
	//bật nhạc nền
	document.getElementById('bg-ms').play();
  
	//bắt đầu thanh thời gian
	remainingTime = maxTime;
	/*$('.progressbar').css('display', 'block');
	$('progress').val(100);*/
	$('.progress').css('display', 'block');
	$('.six-sec-ease-in-out').css('transition', 'width ' + maxTime + 's ease-in-out');
	$(".six-sec-ease-in-out").animate({
	  width: "0%"
	}, 1000);
	// start in under a sec
	running = setInterval(function() {
	  remainingTime--;
	  //$('progress').val(remainingTime / maxTime * 100);
	  //15s chuyển mầu vàng
	  if (remainingTime == 18) {
  
		$('.six-sec-ease-in-out').css('background-color', 'yellow');
	  }
	  // 10s chạy hiệu ứng animate
	  if (remainingTime == 13) {
  
		$('.six-sec-ease-in-out').addClass('animate');
		document.getElementById('bg-ms').load();
		document.getElementById('10s-sound').play();
	  }
  
	  // hết giờ kết thúc game
	  if (remainingTime == 0) {
		//tắt nhạc nền
		document.getElementById('bg-ms').load();
  
  
		//nhạc bật nhạc thua
		document.getElementById('lose-ms').play();
  
		//dừng game
		stopGame();
		openModal('lose');
		$('.btn-reset').css('opacity', '1');
  
		// bỏ class 10s
		document.getElementById('10s-sound').load();
		$('.six-sec-ease-in-out').removeClass('animate');
	  }
	}, 1000);
  }
  