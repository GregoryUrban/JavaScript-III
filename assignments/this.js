/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
* 2. Implicit
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log();
// or
function windowBinding() {
      console.log(this);
    }
    
    windowBinding();

// Principle 2

// code example for Implicit Binding
const redCarrier = {//object literal
    name: 'Verizon',
    tech: 'CDMA 5G',
    sell: function() { // method
      console.log(`${this.name} sells ${this.tech}`);
    }
  }
  // carrier is "this" for the sell method
  redCarrier.sell();

// Principle 3

// code example for New Binding
function RetailPerson(greeter){ //capital shows its a constructor
  this.greeter = greeter; //key value pair will have newman
  this.greeting = 'Hello'; //basically hobbit object
  this.speak = function() {
    console.log(`${this.greeting}, ${this.greeter}`)
  }
}

// const jerry = {
// name: 'Greg'  
// }

const customer = new RetailPerson(`SneakyRep`);
const sneakyrep = new RetailPerson(`customer`);

console.log(customer);

sneakyrep.speak();
customer.speak();






// this is old
// const yellowCarrier = {
//   name: 'Sprint'
// }
  
//   const brands = ['cheap', 'fast', 'reliable']; /// these are separated individually by using .apply below
  
//   function introduce(brands1, brands2, brands3) {
//       "use strict" //this keeps it from window binding
//       console.log(`Hello! We are ${this.name}, we offer our customers ${brands1}, ${brands2}, and ${brands3} service`)
//     }
//     // how can we bind?? With a method (function in a function)
//     // bind is to use this later! It has the same ability as call
//     const useLater = introduce.bind(yellowCarrier,...brands)
//     // useLater();



// Principle 4

// code example for Explicit Binding

const blueCarrier = {
    names: 'AT&T'
  }
  
  // .call
  const phone = ['iPhone X', ' Samsung S10', ' Nokia']; /// these arent separated individually. That would require a .apply
  
  function introduce(phone) {
  "use strict"; //this keeps it from window binding
    console.log(`Hello! We are ${this.names}, and we sell the ${phone}`)
  }
  // how can we bind?? With a method (function in a function)
  introduce.call(blueCarrier,phone); //this is the thing I want to be bound to,,, its the explicit point. Notice that the second argument (skills) didnt require "this"

