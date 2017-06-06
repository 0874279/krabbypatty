var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Start = (function () {
    function Start() {
        this.width = 50;
        this.height = 50;
        this.collision = new Collision();
        this.compare = new Compare();
    }
    return Start;
}());
var Ingredients = (function () {
    function Ingredients() {
        this.width = 50;
        this.height = 50;
    }
    Ingredients.prototype.createDiv = function (ingredient, x, y, key) {
        document.body.appendChild(ingredient).innerHTML = key;
        ingredient.style.transform = "translate(" + x + "px," + y + "px)";
    };
    return Ingredients;
}());
var Breadbot = (function (_super) {
    __extends(Breadbot, _super);
    function Breadbot() {
        var _this = _super.call(this) || this;
        _this.key = 1;
        _this.ingredient = document.createElement("breadbot");
        _this.x = 100;
        _this.y = 500;
        _this.createDiv(_this.ingredient, _this.x, _this.y, _this.key);
        return _this;
    }
    return Breadbot;
}(Ingredients));
var Breadtop = (function (_super) {
    __extends(Breadtop, _super);
    function Breadtop() {
        var _this = _super.call(this) || this;
        _this.key = 5;
        _this.ingredient = document.createElement("breadtop");
        _this.x = 500;
        _this.y = 500;
        _this.createDiv(_this.ingredient, _this.x, _this.y, _this.key);
        return _this;
    }
    return Breadtop;
}(Ingredients));
var Collision = (function () {
    function Collision() {
        this.confirm = false;
        this.spaceBar = 32;
        this.anwser = [];
        this.breadtop = new Breadtop();
        this.breadbot = new Breadbot();
        this.patty = new Patty();
        this.ketchup = new Ketchup();
        this.mustard = new Mustard();
        this.player = new Player();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Collision.prototype.gameLoop = function () {
        this.player.move();
        this.collisionBreadTop();
        this.collisionPatty();
        this.collisionBreadBot();
        this.collisionKetchup();
        this.collisionMustard();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Collision.prototype.collisionBreadTop = function () {
        var _this = this;
        if (this.player.x < this.breadtop.x + this.breadtop.width &&
            this.player.x + this.player.width > this.breadtop.x &&
            this.player.y < this.breadtop.y + this.breadtop.height &&
            this.player.height + this.player.y > this.breadtop.y) {
            window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
            this.anwser.push(this.breadtop.key);
            console.log(this.anwser);
        }
    };
    Collision.prototype.collisionPatty = function () {
        var _this = this;
        if (this.player.x < this.patty.x + this.patty.width &&
            this.player.x + this.player.width > this.patty.x &&
            this.player.y < this.patty.y + this.patty.height &&
            this.player.height + this.player.y > this.patty.y) {
            window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
            console.log(this.patty.key);
        }
    };
    Collision.prototype.collisionBreadBot = function () {
        var _this = this;
        if (this.player.x < this.breadbot.x + this.breadbot.width &&
            this.player.x + this.player.width > this.breadbot.x &&
            this.player.y < this.breadbot.y + this.breadbot.height &&
            this.player.height + this.player.y > this.breadbot.y) {
            window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
            console.log(this.confirm);
        }
    };
    Collision.prototype.collisionKetchup = function () {
        var _this = this;
        if (this.player.x < this.ketchup.x + this.ketchup.width &&
            this.player.x + this.player.width > this.ketchup.x &&
            this.player.y < this.ketchup.y + this.ketchup.height &&
            this.player.height + this.player.y > this.ketchup.y) {
            window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
            console.log(this.confirm);
        }
    };
    Collision.prototype.collisionMustard = function () {
        var _this = this;
        if (this.player.x < this.mustard.x + this.mustard.width &&
            this.player.x + this.player.width > this.mustard.x &&
            this.player.y < this.mustard.y + this.mustard.height &&
            this.player.height + this.player.y > this.mustard.y) {
            window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
            console.log(this.confirm);
        }
    };
    Collision.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.spaceBar:
                this.confirm = false;
                break;
        }
    };
    Collision.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.spaceBar:
                this.confirm = true;
                break;
        }
    };
    return Collision;
}());
var Compare = (function () {
    function Compare() {
        this.code = [];
        this.codeGenerator();
    }
    Compare.prototype.codeGenerator = function () {
        while (this.code.length < 5) {
            this.randnumber = Math.ceil(Math.random() * 5);
            if (this.code.indexOf(this.randnumber) > -1)
                continue;
            this.code[this.code.length] = this.randnumber;
        }
        console.log(this.code);
    };
    return Compare;
}());
var Game = (function () {
    function Game() {
        this.startbtn = new Start();
    }
    return Game;
}());
var Ketchup = (function (_super) {
    __extends(Ketchup, _super);
    function Ketchup() {
        var _this = _super.call(this) || this;
        _this.key = 3;
        _this.ingredient = document.createElement("ketchup");
        _this.x = 200;
        _this.y = 500;
        _this.createDiv(_this.ingredient, _this.x, _this.y, _this.key);
        return _this;
    }
    return Ketchup;
}(Ingredients));
window.addEventListener("load", function () {
    new Game();
});
var Mustard = (function (_super) {
    __extends(Mustard, _super);
    function Mustard() {
        var _this = _super.call(this) || this;
        _this.key = 4;
        _this.ingredient = document.createElement("mustard");
        _this.x = 300;
        _this.y = 500;
        _this.createDiv(_this.ingredient, _this.x, _this.y, _this.key);
        return _this;
    }
    return Mustard;
}(Ingredients));
var Patty = (function (_super) {
    __extends(Patty, _super);
    function Patty() {
        var _this = _super.call(this) || this;
        _this.key = 2;
        _this.ingredient = document.createElement("patty");
        _this.x = 400;
        _this.y = 500;
        _this.createDiv(_this.ingredient, _this.x, _this.y, _this.key);
        return _this;
    }
    return Patty;
}(Ingredients));
var Player = (function () {
    function Player() {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.leftKey = 65;
        this.rightKey = 68;
        this.upKey = 87;
        this.downKey = 83;
        this.createDiv();
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.createDiv = function () {
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.move();
    };
    Player.prototype.move = function () {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 0;
                break;
            case this.downKey:
                this.downSpeed = 0;
                break;
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
        }
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 5;
                break;
            case this.downKey:
                this.downSpeed = 5;
                break;
            case this.leftKey:
                this.leftSpeed = 5;
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
        }
    };
    return Player;
}());
//# sourceMappingURL=main.js.map