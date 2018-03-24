import Inferno from "inferno";
import Component from "inferno-component";
import t from "inferno-create-element";
// Chance
var chance = require('chance').Chance();

var now = new Date();

class InventoryBlock {

   constructor ()
   {
      return t('div', {className: 'inventory-block'}, 
         [
            t('label', {className: 'header'}, 'Inventory'),
            t('div', {className: 'inventory'}, [
               new InventoryItem('Dell Precision (for work)'),
               new InventoryItem('old Asus Notebook (NOMAD)'),
               new InventoryItem('Pilgrim Hat'), 
               new InventoryItem('Broken wrist-watches (×2)'), 
               new InventoryItem('Misc. board games (×7)'),
               new InventoryItem('Mr. Coffee coffeemaker'),
               new InventoryItem('Tattered Brooklynite outfits (×5)'),
               new InventoryItem('Apogee Microphone'),
               new InventoryItem('Stolen copy of \'Lithium for Medea\''),
               new InventoryItem('Half-empty bottle of Bulleit Rye'),
               new InventoryItem('Peace Lily'),
               new InventoryItem('Red-edged Dracanae (×2)'),
               new InventoryItem('Wok'),
               new InventoryItem('Wooden frogs (×3)'),
               new InventoryItem('Misc. books (×43)')

            ])
         ])
   }
}

class InventoryItem {
   constructor (item:string)
   {
      return t('div', {className: 'inventory-item'}, item)
   }
}

module.exports = InventoryBlock;