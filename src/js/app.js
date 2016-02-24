console.log("app.js loaded");

import Module1Class from './modules/module1.js';

const configObj = {"firstName": "Han", "surname": "Solo"};

const module1Obj = new Module1Class(configObj);
document.getElementById("main").innerHTML = module1Obj.getTemplate();