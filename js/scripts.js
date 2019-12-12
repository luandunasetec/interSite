function shuffle(arr) {
	var i,
	j,
	temp;
	for (i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};

var arrMonstros = ['./img/monstros/01.png', './img/monstros/02.png', './img/monstros/03.png', './img/monstros/04.png', './img/monstros/05.png', './img/monstros/06.png']
var array = ['./vids/curtas/01.mp4', './vids/curtas/02.mp4', './vids/curtas/03.mp4', './vids/curtas/04.mp4', './vids/curtas/05.mp4']
var vids = shuffle(array)
console.log(vids);

var zoom = false;

var turnPage = new Audio('./aud/turn_page.mp3');
var i = 0;

$(".livro").click(function () {
	$('.page1').attr('src', arrMonstros[i]);
});

$(".livro").click(function () {
	if (zoom === false) {
		$('.hall').addClass('zoom-in');
		$('.livro').addClass('zoom-index')
		$('.hall').removeClass('zoom-out');
		$('.carol1').addClass('zoom-index');
		$('.eduardo').addClass('zoom-index');
		$('.kyee').addClass('zoom-index');
		$('.carol2').addClass('zoom-index');
		$('.ariadne').addClass('zoom-index');
		$('.bgblack').css('display', 'block');
		$('.page1').css('display', 'block');
		$('.page2').css('display', 'block');
		setTimeout(function () {
			$('.bgblack').animate({ opacity: 0.8 });
			$('.page1').animate({ opacity: 1 });
			$('.next').removeClass('zoom-index');
		}, 1000);
		setTimeout(function () {
			zoom = true;
		}, 50);
		console.log('true')
	}
	console.log("click");
});

$('.bgblack').click(function () {
	if (zoom == true) {
		$('.hall').removeClass('zoom-in');
		$('.hall').addClass('zoom-out');
		$('.livro').removeClass('zoom-index');
		$('.carol1').removeClass('zoom-index');
		$('.eduardo').removeClass('zoom-index');
		$('.kyee').removeClass('zoom-index');
		$('.carol2').removeClass('zoom-index');
		$('.ariadne').removeClass('zoom-index');
		$('.back').addClass('zoom-index');
		$('.next').addClass('zoom-index');
		$('.bgblack').animate({ opacity: 0 });
		$('.page1').animate({ opacity: 0 });
		$('.page2').animate({ opacity: 0 });
		i = 0;
		setTimeout(function () {
			$('.bgblack').css('display', 'none');
			$('.page1').css('display', 'none');
			$('.page2').css('display', 'none');
		}, 1000);
		zoom = false;
	}
})

$(".playc").click(function () {
	$('.hall').animate({ opacity: 0 });
	$('.hallvid').get(0).play();
	console.log($('.hallvid').attr('src') === "./vids/hall/hall-curto.mp4");
	$('.livro , .carol1 , .eduardo, .kyee, .carol2, .ariadne, .playc').addClass('zoom-index');
});

$(".next").click(function () {
	if (i < arrMonstros.length-1 && $('.page2').css('opacity') == 0){
		i++;
		$('.page2').css('display', 'block');
		$('.page2').attr('src', arrMonstros[i]);
		$('.page1').animate({ opacity: 0 });
		$('.page2').animate({ opacity: 1 });
		$('.back').removeClass('zoom-index');
		turnPage.play();
		if(i >= arrMonstros.length-1){
			$('.next').addClass('zoom-index');
		}
	}
	if (i < arrMonstros.length-1 && $('.page2').css('opacity') == 1){
		i++;
		$('.page1').css('display', 'block');
		$('.page1').attr('src', arrMonstros[i]);
		$('.page2').animate({ opacity: 0 });
		$('.page1').animate({ opacity: 1 });
		$('.back').removeClass('zoom-index');
		turnPage.play();
		if(i >= arrMonstros.length-1){
			$('.next').addClass('zoom-index');
		}
	}
});

$(".back").click(function () {
	if (i <= arrMonstros.length-1 && $('.page1').css('opacity') == 0){
		i--;
		$('.page1').attr('src', arrMonstros[i]);
		$('.page1').animate({ opacity: 1 });
		$('.page2').animate({ opacity: 0 });
		turnPage.play();
		$('.next').removeClass('zoom-index');
	}
	if (i <= arrMonstros.length-1 && $('.page1').css('opacity') == 1){
		i--;
		$('.page2').attr('src', arrMonstros[i]);
		$('.page2').animate({ opacity: 1 });
		$('.page1').animate({ opacity: 0 });
		turnPage.play();
		$('.next').removeClass('zoom-index');
	}
	if(i == 0){
		$('.back').addClass('zoom-index');
	}
});


$('.hallvid').on('ended', function () {
	console.log(vids.length)
	if ($('.hallvid').attr('src') === "./vids/hall/hall-longo.mp4" && vids.length != 0){
		$('.hallvid').attr('src', vids[0]);
		$('.hallvid').get(0).load();
		$('.hallvid').get(0).play();
	}
	else if ($('.hallvid').attr('src') !== "./vids/hall/hall-longo.mp4" && $('.hallvid').attr('src') !== "./vids/hall/hall-curto.mp4" && vids.length != 0){
		$('.hall').animate({ opacity: 1 });
		$('.hallvid').attr('src', './vids/hall/hall-curto.mp4');
		$('.hallvid').get(0).load();
		$('.livro , .carol1 , .eduardo, .kyee, .carol2, .ariadne, .playc').removeClass('zoom-index');
		vids.shift(0, 1);
	}
	else if ($('.hallvid').attr('src') === "./vids/hall/hall-curto.mp4" && vids.length != 0){
		$('.hallvid').attr('src', vids[0]);
		$('.hallvid').get(0).load();
		$('.hallvid').get(0).play();
	}
	else if (vids.length == 0 && $('.hallvid').attr('src') != "./vids/curtas/makingof.mp4"){
		$('.hallvid').attr('src', './vids/curtas/makingof.mp4');
		$('.hallvid').get(0).load();
		$('.hallvid').get(0).play();
	}
	else if (vids.length == 0 && $('.hallvid').attr('src') === "./vids/curtas/makingof.mp4"){
		$('.hall').animate({ opacity: 1 });
		$('.hallvid').attr('src', './vids/hall/hall-longo.mp4');
		$('.hallvid').get(0).load();
		$('.livro , .carol1 , .eduardo, .kyee, .carol2, .ariadne, .playc').removeClass('zoom-index');
		array = ['./vids/curtas/01.mp4', './vids/curtas/02.mp4', './vids/curtas/03.mp4', './vids/curtas/04.mp4', './vids/curtas/05.mp4'];
		vids = shuffle(array)
		console.log(vids)
	}
});

console.log('load JQUERY');

tippy('.livro', {
	content: 'Grimório - Sr. Divino.',
	hideOnClick: true,
	placement: 'top',
	animation: 'shift-away-extreme',
	maxWidth: '10rem',
	delay: [0, 0],
});

tippy('.eduardo', {
	content: 'Gustavo Gabriel',
	followCursor: true,
	placement: 'top',
	animation: 'shift-away-extreme',
	maxWidth: '10rem',
	delay: [300, 0],
});

tippy('.kyee', {
	content: 'Ricardo Cortez Leal',
	followCursor: true,
	placement: 'top',
	animation: 'shift-away-extreme',
	maxWidth: '10rem',
	delay: [300, 0],
});

tippy('.ariadne', {
	content: 'Ann Sagan',
	followCursor: true,
	placement: 'top',
	animation: 'shift-away-extreme',
	maxWidth: '10rem',
	delay: [300, 0],
});

tippy('.carol1', {
	content: 'Jezz Me Tonini',
	followCursor: true,
	placement: 'top',
	animation: 'shift-away-extreme',
	maxWidth: '10rem',
	delay: [300, 0],
});

tippy('.carol2', {
	content: 'Débora Szamk',
	followCursor: true,
	placement: 'top',
	animation: 'shift-away-extreme',
	maxWidth: '10rem',
	delay: [300, 0],
});

tippy('.playc', {
	content: 'Click',
	followCursor: true,
	placement: 'top',
	animation: 'shift-away-extreme',
	maxWidth: '10rem',
	delay: [0, 0],
});



window.onload = function(){
	
	window.alert("Aperte F11")

};