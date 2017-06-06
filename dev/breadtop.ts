/// <reference path="ingredients.ts"/>

class Breadtop extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 5;

    constructor(){
        super();
        this.ingredient = document.createElement("breadtop");
        this.x = 500;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y, this.key);
        
    }

    

    

}