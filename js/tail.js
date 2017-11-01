//первоначалльное создание хвоста
function createTail(color,quan){
	for(var i = 0; i < quan; i++){
		tail[i] = new rect(color, head.x - side_head * (i+1), head.y, side_head, side_head);
	}
}

//обновдление координат хвоста
function updateTail(){
	if (check > -1) {
		
		var x_save = [];
		var y_save = [];
		
		for( var i = 0;  i < tail.length; i++){
			x_save[i] = tail[i].x;
			y_save[i] = tail[i].y;
		}

		switch (check) {
			case 0:	
					tail[0].x = head.x + side_head;
					tail[0].y = head.y;		
				break;
			case 1:	
					tail[0].y = head.y + side_head;
					tail[0].x = head.x;		
				break;
			case 2:
					tail[0].x = head.x - side_head;
					tail[0].y = head.y;		
				break;
			case 3:
					tail[0].y = head.y - side_head;
					tail[0].x = head.x;
				break;
			default:
				break;
		}	
	
		for(var i = 1; i < tail.length; i++){
			tail[i].x = x_save[i-1];
			tail[i].y = y_save[i-1];
		}
	}	
}

//отрисовка хвоста
function drawTail(){
	for(var i = 0; i < tail.length; i++){
		tail[i].drawRect();
	}
}

// function addTailItem(){
// 	tail.push(new rect('#888', tail[tail.length-1].x + 20, tail[tail.length-1].y + 20, side_head, side_head));
// }