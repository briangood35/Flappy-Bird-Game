function Bird() {

  this.x = 150;
  this.y = height / 2;
  this.w = 20;

  this.update = function() {
    this.y += (gravity^2) - force;
    if (this.y + this.w >= height) {
      this.y = height - this.w;
      reset();
    }
    if (this.y <= 0) {
      this.y = 0;
      force = 0;
    }
  }

  this.show = function() {
    fill(255);
    ellipse(this.x + (this.w /2), this.y + (this.w /2), this.w, this.w)
  }
}
