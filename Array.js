let origDogs = ["BullDogs", "Beagle","Labrador"];
let cats = new Array("America Curl","Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

//Array Copy Elements
let sliceDogs = origDogs.slice(1,2);
let CopyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack function Push and pop
let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "poodle";

//Add And Remove from First
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();

//Atomic Add and remove elements (where,how many to remove, elements list)
dogs.splice(2, 1,"Pug","Boxer");

//Array Function And Remove Elements - Concat , Spread , slice and sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs,...cats,...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second]) { console.log("Scan :" + first + " " + second); }
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals += animal + " ";

console.log("Animals : " + allAnimals);


