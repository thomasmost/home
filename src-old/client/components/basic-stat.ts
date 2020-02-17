import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";

class BasicStat {

   constructor (label:string, value:string, link?:string, external?:boolean)
   {
      return t('div', {className: 'basic-stat'}, 
         [
            t(link?'a':'span',  {target: external?'_blank':'', href: link}, value),
            t('label', null, label)      ])
   }
}


// function getDots (total:number, value:number)
// {
//    var rngDots = []
//    for (var i=0; i<total; i++)
//    {
//       rngDots.push(t('div', {class: ('dot ' + ((i<value)?'filled':'empty'))}, null))
//    }
//    return rngDots
// }

module.exports = BasicStat;