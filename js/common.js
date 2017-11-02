//инициализация переменных	
function init(){
	//объект - game - игровое поле
	//game = new rect('#fff', 0, 0, 800, 600);
  key_delay = true;
  tail_side = true;
	//--------------------
	canvas = document.getElementById('canvas_id');
	canvas.width = 800;
	canvas.height = 600
	context = canvas.getContext('2d'); 
	//--------------------
	
	//шаг движения
	step = 50;
	//первоначальное направление движения(1 вверх, 2 вправо, 3 вниз, 0 влево)
	check = 2;	
	//начальная скорость
  speed = 7;

	//голова
	side_head = step;
	head_posx = 150;
	head_posy = 150;
	head = new imag(head_posx,head_posy);
	
	//хвост
	tail_quan = 4; //первоначальное кол-во клеток хвоста
	tail = [];
	createTail(tail_quan);
	
	//еда
	eat = new imag(0, 0);
	checkCoordEat();
 
	//картинка фона
	backgr = new imag(0, 0);

  //цикл
	timer = setTimeout(play, 1000/speed);
}

//отрисовка
function draw(){
	
}

//главная функция цикла
function play(){
	updateHead();
	checkEat();
	var death = checkDeath();
	if(!death){
		backgr.drawImg(backgr_pic);
		drawHead();
		updateTail();
		drawTail();
		eat.drawImg(food_pic);
	}
	timer = setTimeout(play, 1000/speed);
	if(death){
		clearTimeout(timer);
	}
}

//обновление координат головы
function updateHead(){
	switch (check) {
		case 0:
				head.x = head.x - step;	
			break;
		case 1:
				head.y = head.y - step;		
			break;
		case 2:
				head.x = head.x + step;							
			break;
		case 3:
				head.y = head.y + step;			
			break;
		default:
			break;
	}
}

//присваивание картинки для головы в зависимости от направления и отрисовка
function drawHead(){
	switch (check) {
		case 0:
				head.drawImg(head_left_pic);
			break;
		case 1:
				head.drawImg(head_top_pic);
			break;
		case 2:
				head.drawImg(head_right_pic);
			break;
		case 3:
				head.drawImg(head_bot_pic);
			break;
		default:
			break;
	}
}



function checkDeath(){
	//проверка левой стороны
	if(head.x < 0){
		return true;
	}
	//проверка верхней стороны
	if(head.y < 0){
		return true;
	}
	//проверка правой стороны
	if(head.x > canvas.width - step){
		return true;
	}
	//проверка нижней стороны
	if(head.y > canvas.height - step){
		return true;
	}
	//проверка налезания на хвост
	for(var i = 0; i < tail.length; i++){
		if((head.x == tail[i].x)&&(head.y == tail[i].y)){
			return true;
		}
	}
}

//функция проверки координат еды
function checkEat(){
	if((head.x == eat.x)&&(head.y == eat.y)){
		//увеличение скорости
		speed = speed + 0.1;
		//добавление хвоста
		addTailItem();
		//новые координаты для еды
		checkCoordEat();
	}
}

//вычисление коорожинат для еды
function checkCoordEat(){
	eat.x = getRandom(0, canvas.width - step,step);
	eat.y = getRandom(0, canvas.height - step,step);
	var b = true;	
	for(var i = 0; i < tail.length; i++){
		if((eat.x == tail[i].x) && (eat.y == tail[i].y)){
			b = false;
		}
	}

	if((eat.x == head.x)&&(eat.y == head.y)){
		b = false;
	}

	if(!b){
		checkCoordEat();
	}
}

//получение случайных координат для еды
function getRandom(min, max, step){
	var a;
	while(a%step!=0){
		a = Math.floor(Math.random() *(max - min + 1)) + min;
	}
	return a;
}


//влево - 0, вверх - 1, вправо - 2, вниз - 3 
document.body.onkeydown = function(e){
	switch (e.keyCode) {
		case 37:
			if((check != 2) && (check != -1) && (key_delay == true)){
				check = 0;
				key_delay = false;
				setTimeout(function() { key_delay = true; }, 700/speed); 
			}
			break;
		case 38:
			if((check != 3)&&(key_delay == true)){
				check = 1;
				key_delay = false;
				setTimeout(function() { key_delay = true; }, 700/speed);
			}
			break;
		case 39:
			if((check != 0)&&(key_delay == true)){
				check = 2;
				key_delay = false;
				setTimeout(function() { key_delay = true; }, 700/speed);
			}
			break;
		case 40:
			if((check != 1)&&(key_delay == true)){
				check = 3;
				key_delay = false;
				setTimeout(function() { key_delay = true; }, 700/speed);
			}
			break;
			default:
				break;
	}	

}

//функция-коструктор для картинок
function imag(x, y) {
    this.x = x; // координата х на холсте
    this.y = y; // координата у
    this.drawImg = function(pic) // Метод рисующий картинку
    {
				context.drawImage(pic, this.x, this.y);      
    }

}

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

//хвост
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

