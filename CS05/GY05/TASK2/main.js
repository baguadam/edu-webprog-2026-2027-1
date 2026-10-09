class Entity {
  constructor(x, y, icon, cssClass) {
    this.x = x;
    this.y = y;
    this.icon = icon;
    this.cssClass = cssClass;
  }
}

class Player extends Entity {
  constructor(x, y) {
    super(x, y, "X", "player");
  }
}

class Cop extends Entity {
  constructor(x, y) {
    super(x, y, "O", "cop");
  }
}

class Collectible extends Entity {
  constructor(x, y) {
    super(x, y, "Y", "collectible");
  }
}

const player = new Player(0, 0);
console.log(player);
