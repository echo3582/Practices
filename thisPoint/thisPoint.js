class Person {
  constructor(name) {
    this.name = name;
    //创建Person实例的时候默认会执行这条语句
    //这条语句的意思是调用sayName方法时默认this指向该实例
    //以这段代码为例，这里的三个this指的均为person实例
    this.sayName = this.sayName.bind(this);
  }
  sayName() {
    console.log(this.name, "name");
  }
}
let person = new Person("Lily");
//这里的赋值会使sayNameCopy函数里面的this丢失掉他的context，即它现在只是一个单纯的函数，因为class里面的代码默认在严格模式下，所以这里的this为undefined，但是由于创建person实例的时候会自动执行constructor里面的代码，即对this.sayName方法做了this绑定，所以函数里面的this指向person实例。最后控制台会输出Lily。
let sayNameCopy = person.sayName;
sayNameCopy();  //Lily