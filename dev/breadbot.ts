/// <reference path="ingredients.ts"/>

class Breadbot extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 1;

    constructor(){
        super();
        this.ingredient = document.createElement("breadbot");
        this.x = 100;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y, this.key);

    }
}