import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";

var $ = require('jquery');
// Chance
var chance = require('chance').Chance();

var dotStat = require('./dot-stat')
var basicStat = require('./basic-stat')
var listDetails = require('./list-details')
var attacksBlock = require('./attacks-block')
var statusBlock = require('./status-block')
var inventoryBlock = require('./inventory-block')

function getExperiencePoints ()
{
   var first = Date.now();
   var second = <any>new Date('September 19, 1991')
   return Math.round((first-second)/(1000*60*60*24));
}

export class CharacterSheet {

   constructor ()
   {
      return t('div', null, [

          t('div', {className: 'header-block'}, [new StatBlock(),  descBlock]),
          t('div', {className: 'content-block'}, [
             t('div', {className: 'content-block-header'}, 'Attributes'),
             attrsBlock]),
          t('div', {className: 'content-block'}, [
             t('div', {className: 'content-block-header'}, 'Skills'),
             skillsBlock]),
          t('div', {className: 'content-block'}, [
             new attacksBlock(),
             new statusBlock()
          ]),
          t('div', {className: 'content-block'}, [
             new listDetails('Traits', ['Pescatarian (+1 vs water-types)', 'Radical Agnostic (-1 def vs divine)', 'Absurdist-Existentialist (Laugh-off Dread 1/day)']),
             new listDetails('Merits', ['Persistence, major', 'Courage, minor', 'Fast Learner, minor']),
             new listDetails('Flaws', ['Thoughtlessness, major', 'Anxiety, minor', 'Vanity, minor'])
             ]),
          t('div', {className: 'content-block'}, [
             new inventoryBlock()
             ]),
          t('hr', null, null)
        ])
   }
}

var ratings = [
  "Awesome",
  "Awesome",
  "Awesome",
  "7.5/10",
  "A for Adult",
  "Hot!",
  "x2 Hot!",
  "11/10",
  "weakling!",
  "deadly",
  "4/10",
  "rocks socks!",
  "Negative Awesome!"
]

var campaigns = [
  "Life on Earth",
  "Foulest Enemies",
  "The Toll of Death",
  "Empire and Archibel",
  "Just gettin' through the day",
  "Just gettin' through the day"
]


class StatBlock {

   constructor ()
   {
      return t('div', {className: 'stat-block'}, [
         new basicStat('Name', 'Thomas Constantine Moore'),
         new basicStat('Player', 'Thomas Constantine Moore'),
         new basicStat('Campaign',  campaigns[chance.natural({min: 0, max: 5})]),
         new basicStat('Level', '25'),
         new basicStat('Rating', ratings[chance.natural({min: 0, max: 12})]),
         new basicStat('Titles', 'Senior Engineer', 'https://www.linkedin.com/in/tomconmo', true)
      ])
   }
}

var descBlock = t('div', {className: 'desc-block'}, [
      new basicStat('Height', "6'2\""),
      new basicStat('Weight', '170lb'),
      new basicStat('Hair', 'Brown'),
      new basicStat('Skin', 'Fair/Olive'),
      new basicStat('Eyes', 'Blue'),
      new basicStat('Tattoos', 'Hell yeah')
   ])


var skillsBlock = t('div', {className: 'skills-block'}, [
      new dotStat('Athletics', 0),
      new dotStat('Acting', 3),
      new dotStat("Art", 1),
      new dotStat("Computers", 3),
      new dotStat("Directing", 1),
      new dotStat("Game Mastering", 4),
      new dotStat("Larceny", 0),
      new dotStat("Leadership", 2),
      new dotStat("Martial Arts", 1),
      new dotStat("Music", 0),
      new dotStat("Persuasion", 1),
      new dotStat("Spellcraft", 0),
      new dotStat("Taxidermy", 0),
      new dotStat("Worldbuilding", 3),
      new dotStat("Writing", 2)
   ])

var attrsBlock = t('div', {className: 'attrs-block'}, [
      new dotStat('Intelligence', 4),
      new dotStat('Wisdom', 2),
      new dotStat("Strength", 3),
      new dotStat("Agility", 1),
      new dotStat("Presence", 2),
      new dotStat("Charm", 3)
   ])

module.exports = CharacterSheet;