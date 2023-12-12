#!/usr/bin/env ts-node

import type * as ts from 'typescript';
import { gameObject } from './gameObject';
import { TupleUnion } from './TupleUnion';




type gameObjectProcessor = {
  (name: string): void;
  //toJson: (number) => number; // arrow function
}


//allowedTypes = (
type registerableObjectsTypes = (
  gameObject |
  HullSchema
);




interface HullSchema extends gameObject {
  readonly cost: number;
  readonly keys?: Array<[HullSchema['name'], HullSchema['cost']]>;
}
type HullSchemaKeys = [HullSchema['name'], HullSchema['cost']];
//type HullSchemaKeys = (keyof HullSchema)[];



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
//let Hulls2: any[][] = [];



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
//const RegisteredObjects2: gameObject[] = [];
//const RegisteredObjects3: gameObject[][] = [];
const RegisteredHulls   = new Array<HullSchema>();
//console.log(RegisteredObjects, RegisteredObjects2, RegisteredObjects3);

//let RegisteredObjects = new Array<RegisteredObject>();
//const RegisteredObjects: RegisteredObject = [];

const currObject: gameObject = {name: 'name'};
RegisteredObjects.push(currObject);

function registerObject(obj: gameObject): void {
  const currObject: gameObject = obj;
  console.log('Object registered:', currObject);
  RegisteredObjects.push(currObject);
}
function registerHull(hull: HullSchema): void {
  const currHull: HullSchema = hull;
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

export class reger {
  constructor() {}
  reg(type: any, value: any) {
    console.log(type, value);
  }
  regObj(value: string) {
    console.log(value);
  }
}

/////////////////////////////

let tom = new gameObjectt("Lorem Ipsum", 36);
tom.print();        // name: Tom  age: 36

let myReg = new reger();
myReg.regObj('123');

const hull1: HullSchema = {name: 'Lorem Ipsum 1', cost: 100222222};
const hull2333333: HullSchema = {name: 'Lorem Ipsum 2111', cost: 250};

console.log([hull1, hull2333333, RegisteredObjects]);


function Hull(name: string, cost: number): HullSchema {
  const tmp: HullSchema = {name: name, cost: cost}
  //return (name, cost): Hull => {return {"name": name, "cost": cost}};
  return tmp;
}
const Hulls: HullSchema[] = [
  Hull('Lorem Ipsum 1', 100),
  Hull('Lorem Ipsum 2', 250),
];
/// keyof Hull
//const Hulls2: [HullSchema['name'], HullSchema['cost']][] = [
//const Hulls2: HullSchema['keys'] = [
//const Hulls2: TupleUnion<keyof HullSchema>[0][] = [
const Hulls2: HullSchemaKeys[] = [
  ['Lorem Ipsum 1', 100],
  ['Lorem Ipsum 2', 250],
];
Hulls2.forEach((hull: HullSchemaKeys) => Hull(hull[0], hull[1]));
console.log("Hulls:", Hulls);
console.log("Hulls:", JSON.stringify(Hulls));

//let Bbbbb :keyof Hull;
//let myRegmyReg: Bbbbb = {name: 'Lorem Ipsum 1', cost: 100222222};
//console.log(myRegmyReg);

