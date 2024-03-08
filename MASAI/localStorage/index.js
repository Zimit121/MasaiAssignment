localStorage.setItem("age", JSON.stringify(21));
localStorage.setItem("name", JSON.stringify("zimit"));
localStorage.setItem("hobbies", JSON.stringify([
    "hiding","sleeping","running"]));
localStorage.setItem("address", JSON.stringify({
    street: "manipur",
    city: "surat",
    state: "gujarat",
}));


let agess = JSON.parse(localStorage.getItem("age"))
console.log(typeof agess)
let names = JSON.parse(localStorage.getItem("name"))
console.log(typeof names)
let addresss = JSON.parse(localStorage.getItem("address"))
console.log(typeof addresss)
let Hobbiess = JSON.parse(localStorage.getItem("hobbies"))
console.log(Hobbiess)
console.log(typeof Hobbiess)