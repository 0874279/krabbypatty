/// <reference path="start.ts"/>


class Collision{
    
    private player:Player;
    private confirm5:boolean =true; // breadtop
    private confirm2:boolean = true; // patty
    private confirm1:boolean = true; // breadbot
    private confirm3:boolean = true; // ketchup
    private confirm4:boolean = true; // mustard
    private eventUp;
    private eventDown;
    private spaceBar:number =32;
    public anwser:Array<number> = [];
    private compare:Compare;
    private lives:Lives;


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
        this.compare = new Compare();
        this.lives = new Lives()

        

        requestAnimationFrame(this.gameLoop.bind(this));


    }
    	
        gameLoop(){
        this.player.move();
        this.collisionBreadTop();
        this.collisionPatty();
        this.collisionBreadBot();
        this.collisionKetchup();
        this.collisionMustard();
        this.checker();


        requestAnimationFrame(this.gameLoop.bind(this));
    }
        // collision player > breadTop
        collisionBreadTop() { 
            if (this.player.x < this.breadtop.x + this.breadtop.width &&
            this.player.x + this.player.width > this.breadtop.x &&
            this.player.y < this.breadtop.y + this.breadtop.height &&
            this.player.height + this.player.y > this.breadtop.y && this.confirm5 == true) {

                this.confirm5 = false;
                this.anwser.push(this.breadtop.key);
                console.log(this.anwser);
            }   
    }

        // collision player > patty
        collisionPatty() { 
                if (this.player.x < this.patty.x + this.patty.width &&
                this.player.x + this.player.width > this.patty.x &&
                this.player.y < this.patty.y + this.patty.height &&
                this.player.height + this.player.y > this.patty.y && this.confirm2 == true) {

                this.confirm2 = false;
                this.anwser.push(this.patty.key);
                console.log(this.anwser);
                
                }   
    }
        // collision player > breadBot
        collisionBreadBot() { 
            if (this.player.x < this.breadbot.x + this.breadbot.width &&
            this.player.x + this.player.width > this.breadbot.x &&
            this.player.y < this.breadbot.y + this.breadbot.height &&
            this.player.height + this.player.y > this.breadbot.y && this.confirm1 == true) {

                this.confirm1 = false;
                this.anwser.push(this.breadbot.key);
                console.log(this.anwser);           
             }   
    }

        // collision player > ketchup
        collisionKetchup() { 
            if (this.player.x < this.ketchup.x + this.ketchup.width &&
            this.player.x + this.player.width > this.ketchup.x &&
            this.player.y < this.ketchup.y + this.ketchup.height &&
            this.player.height + this.player.y > this.ketchup.y && this.confirm3 == true) {

                this.confirm3 = false;
                this.anwser.push(this.ketchup.key);
                console.log(this.anwser); 
            }   
    }

        // collision player > mustard
        collisionMustard() { 
            if (this.player.x < this.mustard.x + this.mustard.width &&
            this.player.x + this.player.width > this.mustard.x &&
            this.player.y < this.mustard.y + this.mustard.height &&
            this.player.height + this.player.y > this.mustard.y && this.confirm4 == true) {

                this.confirm4 = false;
                this.anwser.push(this.mustard.key);
                console.log(this.anwser); 
            }   
    }
        // checks if awnser is right
        private checker(){
            if (this.compare.code.length == this.anwser.length){
                if (this.compare.code.toString() == this.anwser.toString()){
                    // awnser is good -> points and next level
                    console.log("Goed gedaan!");
            }
                else{
                    // awnser is bad -> -1 life & try again
                    console.log("fout gemaakt!")
                    // this.lives.loseLife();
                    
                }
        }
    }
}