console.log("destructering");
//
// oject destructer
//
const person={
    name:'chetan',
    age:30,
    location:{
        city:"jalgaon",
        temp:48
    }
}

const {name,age}=person;

console.log(`${name} is ${age} old`);

const {city,temp:temprture}=person.location;

console.log(`its ${temprture} in ${city}`);



const book={
    title:'Ego is Enemy',
    auther:'Ryan Holiday',
    publisher:{
        name:'penguin'
    }
};

const {name:publisherName='self_published'}=book.publisher;

console.log(publisherName);


//
// array destructering
//

const array=['38 gandherva colony','Jalgaon','Maharashtra','425001']
const [,city1,state="New York"]=array;

console.log(`you are in ${city1},${state}`);


const coffee=['Coffee(Hot)','$2.0','$2.50','$2.75'];

const [itemName,,mediumPrice]=coffee;
console.log(`the medium ${itemName} is at ${mediumPrice}`);