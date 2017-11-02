//первоначалльное создание хвоста
function createTail(quan){
	for(var i = 0; i < quan; i++){
		//tail[i] = new rect(color, head.x - side_head * (i+1), head.y, side_head, side_head);
		tail[i] = new imag(head.x - side_head * (i+1), head.y);
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
					// if(tail_side){
					// 	tail[0].drawImg(tail_left_gor_pic);
					// 	tail_side = false;}
					// else{
					// 	tail[0].drawImg(tail_right_gor_pic);
					// 	tail_side = true;
					// }				
				break;
			case 1:	
					tail[0].y = head.y + side_head;
					tail[0].x = head.x;		
					// if(tail_side){
					// 	tail[0].drawImg(tail_left_vert_pic);
					// 	tail_side = false;}
					// else{
					// 	tail[0].drawImg(tail_right_vert_pic);
					// 	tail_side = true;
					// }	
				break;
			case 2:
					tail[0].x = head.x - side_head;
					tail[0].y = head.y;
					// if(tail_side){
					// 	tail[0].drawImg(tail_left_gor_pic);
					// 	tail_side = false;}
					// else{
					// 	tail[0].drawImg(tail_right_gor_pic);
					// 	tail_side = true;
					// }			
				break;
			case 3:
					tail[0].y = head.y - side_head;
					tail[0].x = head.x;
					// if(tail_side){
					// 	tail[0].drawImg(tail_left_vert_pic);
					// 	tail_side = false;}
					// else{
					// 	tail[0].drawImg(tail_right_vert_pic);
					// 	tail_side = true;
					// }	
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
// function drawTail(){

// 		switch (check) {
// 			case 0:	
// 					for(var i = 0; i < tail.length; i++)
// 						tail[i].drawImg(tail_left_gor_pic);
// 				break;
// 			case 1:	
// 					for(var i = 0; i < tail.length; i++)
// 						tail[i].drawImg(tail_left_vert_pic);
// 				break;
// 			case 2:
// 					for(var i = 0; i < tail.length; i++)
// 						tail[i].drawImg(tail_left_gor_pic);
// 				break;
// 			case 3:
// 					for(var i = 0; i < tail.length; i++)
// 						tail[i].drawImg(tail_left_vert_pic);
// 				break;
// 			default:
// 				break;
// 		}		
// }

//отрисовка хвоста
function drawTail(){
	tail[-1] = head;
	for(var i = 0; i < tail.length; i++){

		//хвост
		if(i == tail.length - 1){
			if(tail[i].x > tail[i-1].x)
			tail[i].drawImg(tail_end_left_pic);
			
			if(tail[i].x < tail[i-1].x)
			tail[i].drawImg(tail_end_right_pic);

			if(tail[i].y > tail[i-1].y)
			tail[i].drawImg(tail_end_top_pic);
			
			if(tail[i].y < tail[i-1].y)
			tail[i].drawImg(tail_end_bot_pic);
			
			break;
		}

		//горизонтально
		if((tail[i].y == tail[i-1].y) && (tail[i].y == tail[i+1].y))
			tail[i].drawImg(tail_left_gor_pic);
		//вертикально
		if((tail[i].x == tail[i-1].x) && (tail[i].x == tail[i+1].x))
			tail[i].drawImg(tail_left_vert_pic);

		//слева-направо сверху-вниз---------------
		if((tail[i].x == tail[i-1].x) && (tail[i].x > tail[i+1].x) &&(tail[i].y < tail[i-1].y))
			tail[i].drawImg(tail_1_pic);

		//справа-налево снизу-вверх
		if((tail[i].x > tail[i-1].x) && (tail[i].x == tail[i+1].x) && (tail[i].y < tail[i+1].y))
			tail[i].drawImg(tail_1_pic);
		
		//слева-направо снизу-вверх----------------
		if((tail[i].x == tail[i-1].x) && (tail[i].x > tail[i+1].x) &&(tail[i].y > tail[i-1].y))
			tail[i].drawImg(tail_2_pic);

		//справа-налево сверху-вниз
		if((tail[i].x > tail[i-1].x) && (tail[i].x == tail[i+1].x) && (tail[i].y > tail[i+1].y))
			tail[i].drawImg(tail_2_pic);

		//слева-направо сверху-вниз----------------
		if((tail[i].x < tail[i-1].x) && (tail[i].x == tail[i+1].x) &&(tail[i].y > tail[i+1].y))
			tail[i].drawImg(tail_3_pic);

		//справа-налево снизу-вверх
		if((tail[i].x < tail[i+1].x) && (tail[i].x == tail[i-1].x) && (tail[i].y > tail[i-1].y))
			tail[i].drawImg(tail_3_pic);

		//справа-налево сверху-вниз----------------
		if((tail[i].x == tail[i-1].x) && (tail[i].x < tail[i+1].x) &&(tail[i].y < tail[i-1].y))
			tail[i].drawImg(tail_4_pic);

		//слева-направо сверху-вниз
		if((tail[i].x < tail[i-1].x) && (tail[i].x == tail[i+1].x) &&(tail[i].y < tail[i+1].y))
			tail[i].drawImg(tail_4_pic);
	
	}

}

function addTailItem(){
	tail.push(
		// new rect('#888', tail[tail.length-1].x + 20, tail[tail.length-1].y + 20, side_head, side_head)
		 new imag(tail[tail.length-1].x + 20, tail[tail.length-1].y + 20)
		);
}

// //функция-коструктор для прямоугольников
// function rect(color, x, y, width, height) {
//     this.color = color; // цвет прямоугольника
//     this.x = x; // координата х
//     this.y = y; // координата у
//     this.width = width; // ширина
//     this.height = height; // высота
//     this.drawRect = function() // Метод рисующий прямоугольник
//     {
//         context.fillStyle = this.color;
//         context.fillRect(this.x, this.y, this.width, this.height);
//     }

//     this.clRect = function() // Метод стирающий прямоугольник
//     {
//         context.clearRect(this.x, this.y, this.width, this.height);
//     }
// }