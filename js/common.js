//инициализация переменных	
function init(){
	//голова
	side_head = 25;
	head_posx = 150;
	head_posy = 150;
	head = new rect('#000', head_posx,head_posy, side_head, side_head);
	
	//объект - game - игровое поле
	game = new rect('#fff', 0, 0, 800, 600);
	
	//хвост
	tail_quan = 5; //первоначальное кол-во клеток хвоста
	tail_color = '#888'; //цвет хвоста
	tail = [];
	createTail(tail_color, tail_quan);

	//еда
	eat = new rect('#3e3', 20, 20, 20, 20);
	
	//--------------------
	canvas = document.getElementById('canvas_id');
	canvas.width = game.width;
	canvas.height = game.height;
	context = canvas.getContext('2d'); 
	//--------------------
	
	//первоначальное направление движения(1 вверх, 2 вправо, 3 вниз, 0 влево)
	check = 2;

	//шаг движения
	step = side_head;

	game.drawRect();
	
	//скорость
  speed = 7;
  //цикл


	timer = setTimeout(play, 1000/speed);
}

//отрисовка
function draw(){
	game.clRect(); 
	head.drawRect();
	drawTail();
	drawEat();
}

//главная функция цикла
function play(){
	updateHead();
	var death = checkDeath();
	if(!death){
		updateTail();
		draw();
	}
	//checkEat();
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
	for(var i = 0; i < tail.length; i++)
	if((head.x == tail[i].x)&&(head.y == tail[i].y)){
		return true;
	}
}

function drawEat(){
	//eat = new rect('#3e3', 20, 20, 20, 20);
	eat.drawRect();
}

function checkEat(){
	if((head.x == eat.x)&&(head.y == eat.y)){
		addTailItem();
	}
}

//влево - 0, вверх - 1, вправо - 2, вниз - 3 
document.body.onkeydown = function(e){
	switch (e.keyCode) {
		case 37:
			if((check != 2) && check != -1){
				check = 0;
			}
			break;
		case 38:
			if(check != 3){
				check = 1;
			}
			break;
		case 39:
			if(check != 0){
				check = 2;
			}
			break;
		case 40:
			if(check != 1){
				check = 3;
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
        context.strokeStyle = this.color;
        context.strokeRect(this.x, this.y, this.width, this.height);
    }

    this.clRect = function() // Метод стирающий прямоугольник
    {
        context.clearRect(this.x, this.y, this.width, this.height);
    }
}



init();
