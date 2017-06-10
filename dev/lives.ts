/// <reference path="start.ts"/>

class Lives{
    div:HTMLElement;
    lives:number = 3;
    start:Start;    

    constructor(){
        this.createDiv()
        
    }

    private createDiv(){
        this.div = document.createElement("lives");
        document.body.appendChild(this.div);
    }

    public loseLife(){
        if (this.start.repeat == false){
        console.log("gelukt!")
        this.start = new Start;
        }
        
    }


}