//const sum = require('./sum');  import a module with commonJS
import sum from './sum.js'; // import a module with ES2015
import './image_viewer'; //se agarra asi porque el codigo dentro del archivo hace todo al ser ejecutado


const total = sum (10, 5);
console.log(total);