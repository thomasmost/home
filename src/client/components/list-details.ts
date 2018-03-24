import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";

class ListDetails {
   constructor (title:string, details:string[])
   {
     var rngEls:any[] = []
     for (var i=0; i<details.length; i++)
     {
       rngEls.push(t('div', {className: 'detail'}, details[i]))
     }
      return t('div', {className: 'list-details'}, 
         [
            t('label', null, title),
            t('div', {className: 'rows'}, rngEls)      
         ])
     
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

module.exports = ListDetails;