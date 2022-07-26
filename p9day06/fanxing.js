
// ts中的类
class Anmial {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    run() {
        console.log("我在运动");

    }
}
class Dog extends Anmial {
    constructor(props) {
        super(props)
    }
}
let d = new Dog("哈士奇")
console.log(d.name);
d.run()




