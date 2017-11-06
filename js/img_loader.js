
var image_check = 0;
//общее кол-во картинок
var image_need = 18;

//фоновая картинка
var backgr_pic = new Image();
backgr_pic.src = 'img/bg.png';

backgr_pic.onload = function(){
	image_check++;
		if(image_check == image_need){
			init();
		}
}
//голова
var head_top_pic = new Image();
head_top_pic.src = 'img/head_top.png';

var head_left_pic = new Image();
head_left_pic.src = 'img/head_left.png';

var head_right_pic = new Image();
head_right_pic.src = 'img/head_right.png';

var head_bot_pic = new Image();
head_bot_pic.src = 'img/head_bot.png';

head_top_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

head_left_pic.onload = function(){
	image_check++;
		if(image_check == image_need){
			init();
		}
}

head_right_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

head_bot_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

//5
//хвост

//тело
var tail_left_vert_pic = new Image();
tail_left_vert_pic.src = 'img/tail_left_vert.png';

var tail_right_vert_pic = new Image();
tail_right_vert_pic.src = 'img/tail_right_vert.png';

var tail_left_gor_pic = new Image();
tail_left_gor_pic.src = 'img/tail_left_gor.png';

var tail_right_gor_pic = new Image();
tail_right_gor_pic.src = 'img/tail_right_gor.png';

//изгибы
var tail_1_pic = new Image();
tail_1_pic.src = 'img/1.png';

var tail_2_pic = new Image();
tail_2_pic.src = 'img/2.png';

var tail_3_pic = new Image();
tail_3_pic.src = 'img/3.png';

var tail_4_pic = new Image();
tail_4_pic.src = 'img/4.png';

//конец хвоста
var tail_end_top_pic = new Image();
tail_end_top_pic.src = 'img/tail_end_top.png';

var tail_end_right_pic = new Image();
tail_end_right_pic.src = 'img/tail_end_right.png';

var tail_end_bot_pic = new Image();
tail_end_bot_pic.src = 'img/tail_end_bot.png';

var tail_end_left_pic = new Image();
tail_end_left_pic.src = 'img/tail_end_left.png';

tail_right_vert_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_left_vert_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_right_gor_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_left_gor_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_1_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_2_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_3_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_4_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_end_top_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_end_right_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_end_bot_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

tail_end_left_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}

//еда
var food_pic = new Image();
food_pic.src = 'img/food.png';

food_pic.onload = function(){
	image_check++;
	if(image_check == image_need){
			init();
		}
}