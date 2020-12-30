class Bird {
  constructor(name) {
    this.name = name;
  }
}

class FlyingBird extends Bird {
  isFlying = false;
  fly() {
    this.isFlying = true;
    return this;
  }
  land() {
    this.isFlying = false;
  }
}

// undefined
// const bird = new Bird("penguin")
// undefined
// VM738 Script snippet %231:1 undefined
// bird
// Bird {name: "penguin"}
// const raven = new FlyingBird("bird face")
// undefined
// raven
// FlyingBird {name: "bird face", isFlying: false}
// raven.fly()
// undefined
// Script snippet %231:1 undefined
// raven
// FlyingBird {name: "bird face", isFlying: true}
// const eagle = new FlyingBird("King")
// undefined
// eagle.fly()
// FlyingBird {name: "King", isFlying: true}
// eagle.fly().land()
// undefined
// eagle
// FlyingBird {name: "King", isFlying: false}
