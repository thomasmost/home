import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";


class ProjectBlock {

   constructor (title:string, imageUrl:string, description: string, link?:string)
   {
      return t('div', {className: 'project'}, [
          projectHeader(title, imageUrl, link),
          t('div', {className: 'project-desc'}, description)
        ])
   }
}

function projectHeader (title:string, imageUrl:string, link?:string)
{
   if (link)
   {
     return t('a', {href: link , target: '_blank'}, [
          t('img', {className: 'project-image', src: imageUrl}, null),
          t('div', {className: 'project-title'}, title)
       ])
   }
   else
   {
     return t('div', null, [
          t('img', {className: 'project-image', src: imageUrl}, null),
          t('div', {className: 'project-title'}, title)
       ])
   }
}



module.exports = ProjectBlock;