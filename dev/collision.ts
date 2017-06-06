/// <reference path="start.ts"/>


class Collision{
    
    private player:Player;
    private confirm:boolean =false; 
    private spaceBar:number =32;
    private anwser:Array<number> = [];

    // Ingredients
    private breadtop:Breadtop;
    private breadbot:Breadbot;
    private mustard:Mustard;
    private patty:Patty
    private ketchup:Ketchup;



    constructor(){
        this.breadtop = new Breadtop();
        this.breadbot = new Breadbot();
        this.patty = new Patty();
        this.ketchup = new Ketchup();
        this.mustard = new Mustard();
        this.player = new Player();

        requestAnimationFrame(this.gameLoop.bind(this));


    }
    	
        gameLoop(){
        this.player.move();
        this.collisionBreadTop();
        this.collisionPatty();
        this.collisionBreadBot();
        this.collisionKetchup();
        this.collisionMustard();


        requestAnimationFrame(this.gameLoop.bind(this));
    }
        // collision player > breadTop
        collisionBreadTop() { 
            if (this.player.x < this.breadtop.x + this.breadtop.width &&
            this.player.x + this.player.width > this.breadtop.x &&
            this.player.y < this.breadtop.y + this.breadtop.height &&
            this.player.height + this.player.y > this.breadtop.y) {


            // bugs to fix -> on key press / when collision is made add only 1 number to the Array
            window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
            window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

            this.anwser.push(this.breadtop.key);
            console.log(this.anwser);
            }   
    }

        // collision player > patty
        collisionPatty() { 
                if (this.player.x < this.patty.x + this.patty.width &&
                this.player.x + this.player.width > this.patty.x &&
                this.player.y < this.patty.y + this.patty.height &&
                this.player.height + this.player.y > this.patty.y) {

                window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
                window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

                console.log(this.patty.key);
                
                }   
    }
        // collision player > breadBot
        collisionBreadBot() { 
            if (this.player.x < this.breadbot.x + this.breadbot.width &&
            this.player.x + this.player.width > this.breadbot.x &&
            this.player.y < this.breadbot.y + this.breadbot.height &&
            this.player.height + this.player.y > this.breadbot.y) {

            window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
            window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

            console.log(this.confirm);
            }   
    }

        // collision player > ketchup
        collisionKetchup() { 
            if (this.player.x < this.ketchup.x + this.ketchup.width &&
            this.player.x + this.player.width > this.ketchup.x &&
            this.player.y < this.ketchup.y + this.ketchup.height &&
            this.player.height + this.player.y > this.ketchup.y) {

            window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
            window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

            console.log(this.confirm);
            }   
    }

        // collision player > mustard
        collisionMustard() { 
            if (this.player.x < this.mustard.x + this.mustard.width &&
            this.player.x + this.player.width > this.mustard.x &&
            this.player.y < this.mustard.y + this.mustard.height &&
            this.player.height + this.player.y > this.mustard.y) {

            window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
            window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

            console.log(this.confirm);
            }   
    }
    

    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
            case this.spaceBar:
                this.confirm = false;
                break;    
        }
}
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case this.spaceBar:
                this.confirm = true;
                break;
        }
    }
}