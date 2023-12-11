#!/usr/bin/env ts-node

import type * as ts from 'typescript';


/////////////////////////////

type gameObject = {
  /**
   * The full name of the N:FC game object
   */
  name: string;
}
type gameObjectProcessor = {
  (name: string): void;
  //toJson: (number) => number; // arrow function
}


//allowedTypes = (
type registerableObjectsTypes = (
  gameObject |
  Hull
);




interface Hull extends gameObject {
  cost: number;
}


//type RegisteredHull = Hull[];
//type RegisteredHulls = RegisteredHull[];

/*
type ThreadObj = {foo:string}
type ThreadList = Hull[];
type ThreadListList = ThreadList[];
const obj: ThreadObj = {
  foo: '123'
}
const singleDim: ThreadList = [
  obj
]
const multiDim: ThreadListList = [
  singleDim,
  singleDim
]
*/

//let Hulls = new Array<Hull>();
//let Hulls: string[][] = RegisteredHulls;
//let Hulls: string[][] = new Array<RegisteredHull>();
let Hulls2: any[][] = [];



/*
type MyGroupType = {
  [key: string]: gameObject;
}
var obj2: MyGroupType = {
  "0": { "name": "Available" }
};
*/

// https://stackoverflow.com/a/35435158/8175291
//type RegisteredObjects = new Array<gameObject>();
//type RegisteredObjects = gameObject[];

//var RegisteredObject: Array<string> = [];
const RegisteredObjects = new Array<gameObject>();
const RegisteredHulls   = new Array<Hull>();

//let RegisteredObjects = new Array<RegisteredObject>();
//const RegisteredObjects: RegisteredObject = [];

const currObject: gameObject = {name: 'name'};
RegisteredObjects.push(currObject);

function registerObject(obj: gameObject): void {
  const currObject: gameObject = obj;
  console.log('Object registered:', currObject);
  RegisteredObjects.push(currObject);
}
function registerHull(hull: Hull): void {
  const currHull: Hull = hull;
  const currObject: gameObject = hull;
  registerObject(currObject);
  RegisteredHulls.push(currHull);
  console.log('Hull registered: ', currHull);
}
registerObject({name: 'Lorem Ipsum 1'});
registerHull({name: 'Lorem Ipsum 1', cost: 100222222});


/////////////////////////////

export default class gameObjectt {
  name: string;

  constructor(objectName: string, userAge: number) {
    this.name = objectName;
  }

  print() {
    console.log(`objectName: ${this.name}`);
  }
  toJson() {
    return JSON.stringify(this);
  }
  //flat() {return this.name.flat();}

  get my_name() {
    return this.name;
  }
}

/////////////////////////////

let tom = new gameObjectt("Lorem Ipsum", 36);
tom.print();        // name: Tom  age: 36

const hull1: Hull = {name: 'Lorem Ipsum 1', cost: 100222222};
const hull2333333: Hull = {name: 'Lorem Ipsum 2111', cost: 250};

console.log([hull1, hull2333333, RegisteredObjects]);
