let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = 800;
let height = 800;

canvas.width = width;
canvas.height = height;
canvas.style.backgroundColor = '#ccc';

let aud = new Audio('audio/start.mp3');
let lazer = new Audio('audio/lazer.WAV');
aud.play();


let spaceship = new Image();
spaceship.src = 'img/spaceship.png';

let meteorite = new Image();
meteorite.src = 'img/meteorite.webp';

let bullet = new Image();
bullet.src = 'img/bullet.png';

let bg = new Image();
bg.src = 'img/bg.png';

let player = {
	x: 0,
	y: 0,
	health: 100,
	points: 0
}

let meteorites = [];

let bullets = [];

setInterval(function () {
	bullets.push({
		x: player.x - 5,
		y: player.y - 90,
		speedY: -5
	});
	lazer.play();
}, 2000);

setInterval(function () {
	meteorites.push({
		x: Math.random() * ( (width - 100) - 0) + 0,
		y: 10,
		speedY: 3
	});
}, 500);

//управление игроком
canvas.addEventListener('mousemove', function (e) {
	player.x = e.offsetX;
	player.y = e.offsetY;
});

//игровой цикл
function game() {
	window.requestAnimationFrame(game);
	update();
	draw();
}

bg.onload = game();



//логика
function update() {
	//обновление позиций метеоритов
	for (var i in meteorites) {
		//проверка столконовения с кораблем
		meteorites[i].y += meteorites[i].speedY;
		if ( (meteorites[i].x < player.x + 100) &&
		     (meteorites[i].x + 200 > player.x) && 
		     (meteorites[i].y < player.y + 100) &&
		     (meteorites[i].y + 150 > player.y) 

			) {
			meteorites.splice(i, 1);
			player.health -= 10;

			//проверка здоровья
			if (player.health <= 0) {
				location.reload();
			}
		}
	}

	//пули
	for (var i in bullets) {
		//скорость стрельбы
		bullets[i].y += bullets[i].speedY;
		//удаление пуль
		if (bullets[i].y < 0) {
			bullets.splice(i, 1);
		}
		//уничтожение метеоритов
		for (var j in meteorites) {
			if (bullets[i].x > meteorites[j].x &&
				bullets[i].x + 11 < meteorites[j].x + 100 &&
				bullets[i].y < meteorites[j].y + 100) {
				meteorites.splice(j, 1);
			}
		}
	}
}


//отрисовка
function draw() {
	ctx.clearRect(0, 0, width, height);
	//отрисовка фона
	ctx.drawImage(bg, 0, 0, width, height);

	//отрисовка метеоритов
	for (var i in meteorites) {
		ctx.drawImage(meteorite, meteorites[i].x, meteorites[i].y, 100, 100);
	}
	

	//отрисовка корабля(игрока)
	ctx.drawImage(spaceship, player.x - 100, player.y - 100, 200, 150);
	
	//отрисовка пуль
	for (var i in bullets) {
		ctx.drawImage(bullet, bullets[i].x, bullets[i].y, 11, 18);
	}
	

}



