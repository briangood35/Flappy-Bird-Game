function Pipe(x) {

this.x = x;
this.resetX = x;
this.y = 0;
this.h = Math.floor(Math.random() * 300 + 100);
this.w = 50;
this.gap = 150;
this.scored = false;

this.update = function() {
  this.x -= 2;
  if (this.x + this.w <= 0) {
    this.x = width;
    this.h = Math.floor(Math.random() * 300 + 100);
    this.scored = false;
  }
}
this.show = function() {
  fill(11, 99, 38);
  rectMode(CORNER);
  rect(this.x, this.y, this.w, this.h);
  rect(this.x, this.h + this.gap, this.w, height - this.h - this.gap);
  }

}
