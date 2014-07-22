'use strict';

//var request = require('request');

function Client(name,funds){
  this.name= name;
  this.funds = parseInt(funds);
  this.position=0;
}

module.exports = Client;
