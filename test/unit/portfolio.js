/*jshint expr:true*/
/*global describe, it*/
'use strict';

 var expect = require('chai').expect;
 var Portfolio = require('../../app/models/portfolio.js');

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
 });
