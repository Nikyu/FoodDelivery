//window.onLoad  = changeHeaderBackground(); it doesn't work :(

function changeHeaderBackground(){
	var imagesCount = 7;
	var img_src = "url('img/headerimage"+getRandomInt(1, imagesCount)+".jpg')";
	var header = document.getElementById('headerid');
	header.style.backgroundImage = img_src;
}

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}