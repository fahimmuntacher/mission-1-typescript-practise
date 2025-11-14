class Animal {
    name : string;
    species : string;
    sound: string

    constructor(name: string, species: string,
        sound: string
    ){
        this.name = name,
        this.species = species,
        this.sound = sound
    }
    makeSound(){
        console.log(`${this.name} this animal maing ${this.sound}`);
    }
}

const dog = new Animal("Dogesh", "Dog", "geo geo");
console.log(dog);
dog.makeSound()
