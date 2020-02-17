import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";
// Chance
var chance = require('chance').Chance();


class StatusBlock {

   constructor ()
   {
      return t('div', {className: 'status-block'}, 
         [
            t('label', {className: 'header'}, 'Status'),
            t('div', {className: 'bars'}, [
                  new StatusBar('Health', 75, 75),
                  new StatusBar('Mana', chance.natural({min:0,max: 50}), 50),
                  new StatusBar('Wellbeing', chance.natural({min:10,max: 50}), 50)
               ])
         ])
   }
}


class StatusBar {
   constructor (label:string, value:number, total:number)
   {
      var percentage = Math.round(value/total * 100)
      return t('div', {className: 'status'}, [
               t('label', null, label), 
               t('div', {className: 'bar-container'}, t('div', {class: 'status-bar ' + label.toLowerCase()}, t('div', {class: 'value-bar ' + ((percentage < 98)?'flat':''), style: 'height: ' + percentage + '%;'}, null ))),
               t('div', {className: 'value'}, value + '/' + total)
            ])
   }
}

module.exports = StatusBlock;