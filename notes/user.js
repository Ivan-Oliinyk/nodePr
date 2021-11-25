const user = {
  name: 'Ivan',
  sayHay() {
    console.log(this.name + " hay");
  }
}

const sayHello = (userName) => console.log(`Hello ${userName}`);

module.exports = {
  user: user,
  sayHello
}


