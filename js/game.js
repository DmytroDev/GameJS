$(function () {
    var canvas = document.getElementById('animal-canvas');
    var context = canvas.getContext('2d');
    var maxX = canvas.width;
    var maxY = canvas.height;

    function Monster() {
        this.x = getRandomInt(20, maxX - 20);
        this.y = getRandomInt(20, maxY - 20);
        this.stepX = getRandomInt(1, 5);
        this.stepY = getRandomInt(1, 5);
    }

    Monster.prototype.draw = function () {
        context.font = "30px Arial";
        context.fillStyle = this.color;
        context.fillText(this.body, this.x, this.y);
    };

    Monster.prototype.move = function () {
        this.x += this.stepX;
        this.y += this.stepY;
        if ((this.x > canvas.width - 20) || (this.x < 0)) {
            this.stepX = -this.stepX
        }
        if ((this.y > canvas.height) || (this.y < 20)) {
            console.log('x= ' + this.x + ', y= ' + this.y + ', stepX= ' + this.stepX + ', stepY = ' + this.stepY);
            this.stepY = -this.stepY;
        }
        //console.log('x= ' + this.x + ', y= ' + this.y + ', stepX= ' + this.stepX + ', stepY = ' + this.stepY);
    };

    function Cat() {
        Monster.call(this); // добавили поля
    }

    Cat.prototype = Object.create(Monster.prototype);
    Cat.prototype.constructor = Cat;
    Cat.prototype.body = 'C';
    Cat.prototype.color = 'coral';

    function Dog() {
        Monster.call(this);
    }

    Dog.prototype = Object.create(Monster.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.body = 'D';
    Dog.prototype.color = 'blue';

    function Mouse() {
        Monster.call(this);
    }

    Mouse.prototype = Object.create(Monster.prototype);
    Mouse.prototype.constructor = Mouse;
    Mouse.prototype.body = 'M';
    Mouse.prototype.color = 'grey';

    // service methods
    function getRandomInt(min, max) {
        return Math.floor((Math.random() * (max - min) + min));  // Math.floor - округляет до целого
    }

    var population = [new Cat(), new Cat(), new Dog(), new Dog, new Dog(), new Mouse(), new Mouse()];

    function run() {
        context.clearRect(0, 0, 500, 500);
        for (i = 0; i < population.length; i++) {
            population[i].draw();
            population[i].move();
        }
    }
    
    setInterval(run, 100);

});


