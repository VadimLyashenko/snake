//инициализация переменных	
function init(){
		//объект - game - игровое поле
	game = new rect('#fff', 0, 0, 800, 600);
  key_delay = true;
	//--------------------
	canvas = document.getElementById('canvas_id');
	canvas.width = game.width;
	canvas.height = game.height;
	context = canvas.getContext('2d'); 
	//--------------------
	
	//шаг движения
	step = 50;
	//первоначальное направление движения(1 вверх, 2 вправо, 3 вниз, 0 влево)
	check = 2;	
		//скорость
  speed = 7;

	//голова
	side_head = step;
	head_posx = 150;
	head_posy = 150;
	head = new rect('#000', head_posx,head_posy, side_head, side_head);
	
	//хвост
	tail_quan = 3; //первоначальное кол-во клеток хвоста
	tail_color = '#888'; //цвет хвоста
	tail = [];
	createTail(tail_color, tail_quan);
	
	//еда
	eat = new rect('#3e3', 100, 100, side_head, side_head);
	checkCoordEat();
	game.drawRect();
 
  //цикл
	timer = setTimeout(play, 1000/speed);
}

//отрисовка
function draw(){
	game.clRect(); 
	head.drawRect();
	drawTail();
	eat.drawRect();
}

//главная функция цикла
function play(){
	updateHead();
	checkEat();
	var death = checkDeath();
	if(!death){
		updateTail();
		draw();
	}
	timer = setTimeout(play, 1000/speed);
	if(death){
		clearTimeout(timer);

	}
}


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
	if(head.x > game.width - step){
		return true;
	}
	//проверка нижней стороны
	if(head.y > game.height - step){
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
	eat.x = getRandom(0, game.width - step,step);
	eat.y = getRandom(0, game.height - step,step);
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

//функция-коструктор для прямоугольников
function rect(color, x, y, width, height) {
    this.color = color; // цвет прямоугольника
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    this.drawRect = function() // Метод рисующий прямоугольник
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    this.clRect = function() // Метод стирающий прямоугольник
    {
        context.clearRect(this.x, this.y, this.width, this.height);
    }
}



init();
