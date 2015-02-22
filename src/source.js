class A {
    constructor(name) {
        this.name = name;
    }
}

class B extends A {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

var instance = new B();

console.log(instance);
