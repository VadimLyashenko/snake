//инициализация переменных	
function init(){
	//объект - game - игровое поле
	game = new rect('#fff', 0, 0, 500, 500);
	
	//голова
	side_head = 20;
	head_posx = 160;
	head_posy = 160;
	head = new rect('#666', head_posx,head_posy, side_head, side_head);
	
	//хвост
	tail =[];

	tail[0] = new rect('#888', head_posx - side_head,head_posy, side_head, side_head);

	tail[1] = new rect('#888', head_posx - side_head * 2,head_posy, side_head, side_head);

	//еда
	eat = new rect('#3e3', 20, 20, 20, 20);
	
	//--------------------
	canvas = document.getElementById('canvas_id');
	canvas.width = game.width;
	canvas.height = game.height;
	context = canvas.getContext('2d'); 
	//--------------------
	
	//направление движения(1 вверх, 2 вправо, 3 вниз, 0 влево)
	check = 2;

	//скорость движения
	headSpeed = 20;

	game.drawRect();

	setInterval(play, 1000/10);
}

//отрисовка
function draw(){
	game.clRect(); 
	head.drawRect();
	drawTail();
	drawEat();
}

function play(){
	updateHead();
	updateTail();
	checkEat();
	draw();
}

function updateHead(){
	switch (check) {
		case 0:
			if(head.x > 0){
				head.x = head.x - headSpeed;
			}
			break;
		case 1:
			if(head.y > 0){
				head.y = head.y - headSpeed;
			}
			break;
		case 2:
			if(head.x < (game.width - side_head)){
				head.x = head.x + headSpeed;
			}
			break;
		case 3:
			if(head.y < (canvas.height - side_head)){
				head.y = head.y + headSpeed;
			}
			break;
		default:
			break;
	}
	
}

function updateTail(){
		for(var i = tail.length - 1; i > 0; i--){
			if(check != -1){	
				tail[i].x = tail[i-1].x;
				tail[i].y = tail[i-1].y;
			}
		}
			switch (check) {
				case 0:	
						tail[0].x = head.x + headSpeed;
						tail[0].y = head.y;		
					break;
				case 1:	
						tail[0].y = head.y + headSpeed;
						tail[0].x = head.x;		
					break;
				case 2:
						tail[0].x = head.x - headSpeed;
						tail[0].y = head.y;		
					break;
				case 3:
						tail[0].y = head.y - headSpeed;
						tail[0].x = head.x;
					break;
				default:
					break;
		}
}

function addTailItem(){
	tail.push(new rect('#888', tail[tail.length-1].x + 20, tail[tail.length-1].y + 20, side_head, side_head));
}

function drawTail(){
	for(var i = 0; i < tail.length; i++){
		tail[i].drawRect();
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
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    this.clRect = function() // Метод рисующий прямоугольник
    {
        context.clearRect(this.x, this.y, this.width, this.height);
    }
}

init();
