/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
This Answer:
This allows us to reference objects - The window is the forest, the objects are trees. .This allows us to reference the trees.

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
const redCarrier = {
    name: 'Verizon',
    tech: 'CDMA 5G',
    sell: function() {
      console.log(`${this.name} sells ${this.tech}`);
    }
  }
  redCarrier.sell();

// Principle 3

// code example for New Binding
function RetailPerson(greeter){ 
  this.greeter = greeter; 
  this.greeting = 'Hello';
  this.speak = function() {
    console.log(`${this.greeting}, ${this.greeter}`)
  }
}

const customer = new RetailPerson(`SneakyRep`);
const sneakyrep = new RetailPerson(`customer`);

console.log(customer);

sneakyrep.speak();
customer.speak();


// Principle 4

// code example for Explicit Binding
const blueCarrier = {
    names: 'AT&T'
  }
  
  // .call
  const phone = ['iPhone X', ' Samsung S10', ' Nokia']; 
  
  function introduce(phone) {
  "use strict"; //this keeps it from window binding
    console.log(`Hello! We are ${this.names}, and we sell the ${phone}`)
  }
  introduce.call(blueCarrier,phone);

