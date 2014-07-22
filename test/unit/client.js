/*jshint expr:true*/
/*global describe, it*/
'use strict';

 var expect = require('chai').expect;
 //var Stock = require('../../app/models/stock.js');
 //var Portfolio = require('../../app/models/portfolio.js');
 var Client = require('../../app/models/client.js');


 describe('Client', function(){
   describe('constructor', function(){
     it('Should create a new Client', function(){
       var bob = new Client('Bob Smith', '10000');

       expect(bob).to.be.instanceof(Client);
       expect(bob.name).to.equal('Bob Smith');
       expect(bob.funds).to.equal(10000);
       expect(bob.position).to.equal(0);
        });
      });
 });
