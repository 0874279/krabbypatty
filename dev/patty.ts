/// <reference path="collision.ts"/>

class Patty extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 2;

    constructor(){
        super();
        this.ingredient = document.createElement("patty");
        this.x = 400;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y, this.key);
        
    }

    

}