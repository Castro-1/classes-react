// // ES6 classes review

// class Character {
//   // If you need to initialize values when creating the
//   // object, you must include a constructor
//   constructor(initialHp = 100) {
//     this.hp = initialHp;
//   }

//   // If you will always initialize an instance with a hard-coded
//   // value, you can declare that without a constructor
//   alive = true;

//   // I can refer to the object calling this method as `this`
//   // and therefore can access and update the properties of
//   // this object with, e.g.: `this.hp = ...`
//   updateHp(amount) {
//     const calc = this.hp + amount;
//     if (calc <= 0) {
//       // Trying to avoid any character
//       // having a negative amount of HP
//       this.hp = 0;
//       this.alive = false;
//     } else {
//       this.hp = calc;
//     }
//   }
// }

// const char = new Character(100);
// console.log(char.hp);
// char.updateHp(100);
// console.log(char.hp);

// class Enemy extends Character {
//   constructor(hp, lootToDrop) {
//     super(hp);
//     this.lootToDrop = lootToDrop;
//   }
// }

// class Hero extends Character {
//   inventory = [];

//   defeatEnemy(enemy) {
//     if (enemy.lootToDrop) {
//       this.inventory.push(enemy.lootToDrop);
//     }
//     enemy.updateHp(-enemy.hp);
//   }
// }

// const enemy = new Enemy(100, "Sword of a Thousand Truths");
// const me = new Hero(100);

// console.log(me.hp);
// console.log(me.alive);
// me.updateHp(50);
// console.log(me.hp);

// me.defeatEnemy(enemy);
// console.log("My inventory:", me.inventory);
// console.log("Enemy's HP:", enemy.hp);
// console.log("enemy.alive:", enemy.alive);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App type="Class" />);
