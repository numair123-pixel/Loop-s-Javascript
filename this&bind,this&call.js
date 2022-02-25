// will not work 
let person1 = {
    name: 'Alex'
};
let person2 = {
    name:'Alexsis'
}

function namer() {
    return this.name;
}
namer();
// outcome undefined 
// soloution 
namer.bind(person1) ();
namer.bind(person2) ();
