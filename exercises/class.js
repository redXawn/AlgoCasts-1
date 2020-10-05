class Car {
  constructor(brand) {
    this.carname = brand;
    this.state = {
      name: 'asd',
      age: '24'
    }
  }
  present() {
    return 'I have a ' + this.carname;
  }

  checkName() {
    return this.state.name
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }

  propsCheckName() {
    return this.checkName()
  }
}

myCar = new Model("Ford", "Mustang");

console.log(myCar.show())