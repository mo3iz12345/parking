// import { helloworld } from "./hello-funcs";
// let  message = helloworld();
// console.log(message);
// import { helloYou } from "./hello-funcs";
// const message2= helloYou("John");
// console.log(message2);
import { helloHuman } from "./hello-funcs";
import type { Humans } from "./types";
const johnDoe: Humans = {
    firstName: "John",
    lastName: "Doe",
    birthday: 1980
};
console.log(helloHuman(johnDoe));