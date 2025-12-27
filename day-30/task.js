// const newClass = class {
//     greet() {
//         console.log('hello');
//     }
// }

// const hello = new newClass()
// hello.greet()
// console.log(typeof newClass);

// const greed = function (name) {
//     console.log("name :" +  name );
// }

// greed('senthur')

// class animal {
//     constructor(name) {
//         this.Name = name;
//      }

//      get name() {
//         return this._name;
//      }

//      set name(value) {
//         this._name = value
//      }
// }

// const puli = new animal('TIGer')

// console.log(puli.Name);
// console.log(puli.Name + puli.Name);

// class Washer {
//     brand;
//     constructor(brand, ) {
//         this.brand = brand
//     }
//     #status;

//     run() {
//         console.log('washer started');
//         console.log('washing ends');
//     }

//     #statusOn(status) {
//         if(!status === true) {
//             status = true
//         }
//     }
// }

// const lg = new Washer('LG', false);

// console.log(lg);
// console.log(lg.brand);
// lg.run()

// ## 1. Create a Book Class

class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
     }
     describe() {
        console.log(`${this.title} is written by ${this.author} with ${this.pages} pages `);
     }
}

const whiteNights = new Book('White Nights', 'tosvosky', '150');
const karukku = new Book("karukku", "bama", "110");

karukku.describe();
whiteNights.describe()

// ## 2. Use Getters and Setters with a Temperature Class

class Temperature {
    #celsius;

    constructor(vaule) {
        this.#celsius = vaule
    }

    get celsius() {
        return `The Fahrenheit : ${(this.#celsius * 1.8) + 32}`
    }

    set celsius(value) {
        return this.#celsius = value;
    }
}

const et = new Temperature(25)
console.log(et.celsius);
console.log(et);

class User {
  name = "name";
  #password = "213";

  checkPassword(pw) {
    if (pw === this.#password) {
      console.log("Okay");
    } else {
      console.log("Not matched!");
    }
  }
}

let guy = new User()
guy.checkPassword("213")
console.log(User.#password);


class Vechile {
    constructor(make, model) {
        this.make = make
        this.model = model;
    }
    start() {
        console.log(`Vechile is starting`);
    }
}

class Car extends Vechile {
    constructor(make, model, fueltype) {
        super(make, model);
        this.fueltype = fueltype;
    }

    start() {
        console.log(`Starting ${this.fueltype} car: ${this.make} ${this.model}`);
    }
}

const car1 = new Vechile('bmw', 'ww');
car1.start()

const car2  = new Car('Porchse', '10rt', 'disel')
car2.start()


class MathUtils {
  static add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
  }
  static subtract(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
  }
  static randomInt(min, max ) {
    console.log(`${Math.floor(Math.random(max)*min)}`);
  }
}

MathUtils.add(1,2)

MathUtils.subtract(6,2)

MathUtils.randomInt(11, 2);
MathUtils.randomInt(5, 2);
MathUtils.randomInt(121, 42);


class SmartBulb {
    trunOn() {
        if(this.#connectWiFi) {
            console.log('Lights on');
        }
    }

    trunOff() {
        this.#connectWiFi(false)
        console.log('Lights off');
        
    }

    #connectWiFi(status) {
        return true;
    }

    static info() {
        console.log(
          "SmartLightBulb v1.0 supports remote control and scheduling."
        );
    }
}

SmartBulb.info()
const mi = new SmartBulb
mi.trunOn()
mi.trunOff();
// mi.#connectWiFi()


class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name)
    }
    makeSound() {
        console.log(`The Dog ${this.name} barking`);
    }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log(`The Cat ${this.name} meows`);
  }
}

const nila = new Dog('Kumari')
nila.makeSound()
const pilli = new Dog("Meenu");
pilli.makeSound();

nila.sleep()