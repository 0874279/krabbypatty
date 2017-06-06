/// <reference path="ingredients.ts"/>

class Ketchup extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 3;

    constructor(){
        super();
        this.ingredient = document.createElement("ketchup");
        this.x = 200;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y, this.key);
        
    }

    

}