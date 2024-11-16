import type { Type } from "typescript";
import type { Humans } from "./types";

export function helloworld():String{
    return "helloworld";
}
export function helloYou(name:String):String{
    return "Hello, "+name+"!";
}

export function helloHuman(human: Humans): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - human.birthday;
    return `Hello, ${human.firstName} ${human.lastName}! You are ${age} years old.`;
}