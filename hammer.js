class hammer{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}