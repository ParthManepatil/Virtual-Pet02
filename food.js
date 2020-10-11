class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed;
this.image=loadImage("images/milk.png");
    }
    updateFS(foodStock){
        this.foodStock=foodStock
    }
    getFT(lastFed){
        this.lastFed=lastFed
    }
    deductFood(){
        if(this.foodStock>0){
this.foodStock=this.foodStock-1;
        }
    }
    getFS(){
        return this.foodStock;

    }
    display(){
        var x=80;
var y=100;
imageMode(CENTER);
image(this.image,720,220,70,70);
if(this.foodStock!==0){
for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
x=80;
y=y+80;
    }
image(tis.image,x,y,50,50);
x=x+30;
}
feed=createButton("feed the dog");
feed.position(700,95);
feedmousePressed(feedDog);
}
addFood=createButton("add food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

    }
    fill(255,255,254);
    textSize(15);
if(lastfed==0){
    text("lastFed"+lastFed%+"Ft",350,10);

}
else{
    text("lastFeed"+lastFed+"FT",350,10);
}
}