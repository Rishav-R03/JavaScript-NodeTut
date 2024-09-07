/**
 * Object methods
 */
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    toUppercase: function() {
        return (this.firstName + " " + this.lastName).toUpperCase();  
    }
  };

  document.getElementById("demo").innerHTML = person.fullName();
  document.getElementById("demo1").innerHTML = person.toUppercase();
  //accessing methods
  console.log(person.fullName())
//   or 
 let name = person.fullName();
 console.log(name)