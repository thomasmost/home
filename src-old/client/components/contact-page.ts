import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";


export class ContactPage {

   constructor ()
   {
      return t('div', {className: 'subpage'}, [

          t('div', {className: 'header-text'}, 'Contact'),
          t('div', {className: 'content-block'}, [
              t('p', null, ['Easiest thing to do for now is to reach out via ', t('a', {href: 'https://twitter.com/thomascmost', target: '_blank'}, 'Twitter'), '.']),
              t('p', null, 'More soon.')
              ])
        ])
   }
}



module.exports = new ContactPage();