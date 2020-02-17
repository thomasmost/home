import Inferno, { VNode, Props } from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";

class DotStat implements VNode {
      children: string | number | boolean | VNode | (string | number | VNode)[];
      dom: Element;
      className: string;
      flags: number;
      key: any;
      props: Props;
      ref: (node?: Element) => void;
      type: string | Function;
      parentVNode?: VNode;
   constructor (label: string, value: number) {
      return <DotStat>t('div', {className: 'dot-stat'}, 
         [
            t('label', null, label),
            this.getDots(5, value)
         ]);
   }
   private getDots (total:number, value:number)
   {
      var rngDots:any[] = []
      for (var i=0; i<total; i++)
      {
         rngDots.push(t('div', {class: ('dot ' + ((i<value)?'filled':'empty'))}, null))
      }
      return rngDots
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

module.exports = DotStat;