import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";

class AttacksBlock {

   constructor (label:string, value:string, link?:string, external?:boolean)
   {
      return t('div', {className: 'attacks-block'}, 
         [
            t('label', {className: 'header'}, 'Attacks'),
            new AttackRow('Internet Sarcasm', 2, '75% backfire'),
            new AttackRow('Unarmed', 4, 'ow')
         ])
   }
}

class AttackRow {
   constructor(name:string, dicepool: number, special: string)
   {
      return t('div', {className: 'attack-row'}, 
         [
            t('div', {className: 'written-row'},
            [
               t('div', {className: 'attack-name'}, name),
               t('div', {className: 'attack-dice'}, dicepool + 'd10'),
               t('div', {className: 'attack-special'}, special)
            ]),
            t('div', {className: 'label-row'},
            [
               t('label', {className: 'attack-name'}, 'Attack'),
               t('label', {className: 'attack-dice'}, 'Dicepool'),
               t('label', {className: 'attack-special'}, 'Special')
            ])
         ])
   }
}


module.exports = AttacksBlock;