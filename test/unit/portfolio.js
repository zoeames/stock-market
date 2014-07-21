/*jshint expr:true*/
/*global describe, it*/
'use strict';

 var expect = require('chai').expect;
 var Portfolio = require('../../app/models/portfolio.js');
 var Stock = require('../../app/models/stock');

 describe('Portfolio', function(){
   describe('constructor', function(){
     it('Should create a new portfolio', function(){
       var orange = new Portfolio('mine');

       expect(orange).to.be.instanceof(Portfolio);
       expect(orange.name).to.equal('mine');
       expect(orange.stocks).to.be.a('array');
       expect(orange.stocks).to.have.length(0);
        });
      });
   describe('#add', function(){
     it('Should add a stock to the portfolio', function(){
       var tech = new Portfolio('tech');
       tech.add('appl',50);
       tech.add('AMZN',30);
       tech.add('appl',50);

       expect(tech.stocks).to.have.length(2);
       expect(tech.stocks[0]).to.be.instanceof(Stock);
       expect(tech.stocks[0].count).to.equal(100);
       expect(tech.stocks[1].count).to.equal(30);
     });
      });
 });
