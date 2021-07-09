class iron{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.width = 80;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("BROWN")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}