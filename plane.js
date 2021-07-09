class plane{
    constructor(x, y) {
        var options = {
          isStatic:true
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       
       
      
        fill("BROWN")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
      
      }
}