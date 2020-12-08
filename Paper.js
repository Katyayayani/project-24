class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body = Matter.Bodies.rectangle(x,y,50,50,options);
    this.height=50
    this.width=50
    this.x=x
    this.y=y
    World.add(world, this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        stroke("blue");
        strokeWeight(5);
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
        pop();
      }
}