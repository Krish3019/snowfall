class Snow{
constructor(x,y,w,h){
    var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
this.width = w
this.height = h
this.body = Bodies.rectangle(x,y,w,h,options)
this.image = loadImage("snow4.webp")
World.add(world,this.body)

}

display(){
    var pos  = this.body.position
    push();
     translate(this.body.position.x, this.body.position.y);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     pop();
}

updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}
















}