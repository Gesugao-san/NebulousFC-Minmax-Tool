#!/usr/bin/env ts-node

import type * as ts from 'typescript';
import { gameObject } from './gameObject';


/* type gameObjectProcessor = {
  (name: string): void;
  //toJson: (number) => number; // arrow function
}

type registerableObjectsTypes = ( //allowedTypes = (
  gameObject |
  HullSchema
); */

/**
 * Schema of spaceship hull.
 */
interface HullSchema extends gameObject {
  /**
   * The full name of the spaceship hull.
   */
  readonly name: string;
  /**
   * The cost of hull.
   */
  readonly cost: number;
  //readonly keys?: Array<[HullSchema['name'], HullSchema['cost']]>;
}
type HullSchemaTypes = [HullSchema['name'], HullSchema['cost']];


/////////////////////////////

export default class gameObjectt {
  name: string;

  constructor(objectName: string, userAge: number) {
    this.name = objectName;
  }
}

console.log('/////////////////////////////');


function Hull(name: HullSchema['name'], cost: HullSchema['cost']): HullSchema {
  const tmp: HullSchema = {name: name, cost: cost};
  return tmp;
}

const Hulls: HullSchema[] = [
  Hull('Lorem Ipsum 1', 100),
  Hull('Lorem Ipsum 2', 250),
];

console.log("Hulls:", Hulls);
//Array.apply(null, new Array(5)).map((i) => i);


console.log('/////////////////////////////');


var Hulls2: (HullSchemaTypes | HullSchema)[] = [
  ['Lorem Ipsum 1', 100],
  ['Lorem Ipsum 2', 250],
];

[...Hulls2].map((values: HullSchemaTypes | HullSchema, i: number) => {
  const _values: any = values;
  const hull: HullSchema = {name: _values[0], cost: _values[1]};
  Hulls2[i] = hull;
});

console.log("Hulls2:", Hulls2);


console.log('/////////////////////////////');


var Hulls3: (HullSchemaTypes | HullSchema)[] = [
  ['Lorem Ipsum 1', 100],
  ['Lorem Ipsum 2', 250],
];

//for (var i: number = 0; i < Hulls3.length; i++) {
//for (let i in [...Array(Hulls3.length).keys()]) {
for (var i in Hulls3) {
  const values: any = Hulls3[i];
  const hull: HullSchema = {name: values[0], cost: values[1]};
  Hulls3[i] = hull;
}

console.log("Hulls3:", Hulls3);

console.log('/////////////////////////////');
