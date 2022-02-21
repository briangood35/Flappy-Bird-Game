var gravity = 5;
var force = 0;
var animateSprites = true;
var startScreen = false;
var pipes = new Array();
var score = 0;
let backgroundImage;

function setup() {
	createCanvas(600, 600);
	bird = new Bird();
	for (var i = 0; i < 3; i++) {
		pipes[i] = new Pipe(width + i*(width / 3));
	}

}

function draw() {
	background(51);
	if (startScreen) {
		if (frameCount % 6 == 0 && force > 0) {
			force -= 3;
		}
		
		if (animateSprites) {
				for (var i in pipes) {
				pipes[i].update();
			}
		}

		for (var i in pipes) {
			pipes[i].show();
		}

		bird.update();
		checkScore();
		checkCollision();

} else {
	rectMode(CENTER);
	fill(0);
	rect(width / 2, 3*height / 4 + 12, 570, 110);
	textSize(38);
	fill(255);
	textAlign(CENTER);
	text("Press any button to jump,\nand survive as long as possible!", width / 2, 3*height / 4);
}
	
bird.show();
drawScoreboard();
	
}

function keyPressed() {
	if (!startScreen) {
		startScreen = true;
		animateSprites = true;
		score = 0;
	}
	if (animateSprites) {
		force += 17;
		if (force > 17) {
			force = 17;
		}
	}
}

function mousePressed() {
	keyPressed();
}

function reset() {
	bird.y = height / 2;
	for (var i in pipes) {
		pipes[i].x = pipes[i].resetX;
		pipes[i].scored = false;
		startScreen = false;
		}
}

function checkCollision() {
	for (var i in pipes) {
		if (bird.x + bird.w > pipes[i].x && bird.x < pipes[i].x + pipes[i].w) {
			if (bird.y < pipes[i].h || bird.y > pipes[i].h + pipes[i].gap) {
				death();
			}
		}
	}

}

function death() {
	animateSprites = false;
}

function checkScore(){
	for (var i in pipes) {
		if (bird.x + (bird.w / 2) >= pipes[i].x + (pipes[i].w / 2) && pipes[i].scored == false) {
			score += 1;
			pipes[i].scored = true;
		}
	}
}

function drawScoreboard() {
	fill(0);
	rectMode(CORNER);
	rect(width / 2 - 35, 25, 70, 50);
	fill(255);
	textSize(48);
	if (score > 99) {
		textSize(35);

	}
	textAlign(CENTER);
	text(str(score), width / 2, 68);
}
