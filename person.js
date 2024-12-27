class Person{
    constructor(name){
        this.name =name;
    }
sayMyName(){
    return `\n My name is ${this.name}`
}
}

module.exports = {
    Person,
}