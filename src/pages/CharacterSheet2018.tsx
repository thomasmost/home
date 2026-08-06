import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Easter egg at /character-sheet-2018.
 *
 * A port of the original 2018 homepage, which rendered the whole site as a
 * tabletop-RPG character sheet. The original was Inferno.js + Sass and was
 * deleted in 2020; everything below is the same content, rebuilt in React.
 * Not linked from anywhere — you get here by knowing the URL.
 */

const BIRTH_DATE = new Date('September 19, 1991');

const RATINGS = [
  'Awesome',
  'Awesome',
  'Awesome',
  '7.5/10',
  'A for Adult',
  'Hot!',
  'x2 Hot!',
  '11/10',
  'weakling!',
  'deadly',
  '4/10',
  'rocks socks!',
  'Negative Awesome!',
];

const CAMPAIGNS = [
  'Life on Earth',
  'Foulest Enemies',
  'The Toll of Death',
  'Empire and Archibel',
  "Just gettin' through the day",
  "Just gettin' through the day",
];

const DESCRIPTORS = [
  ['Height', '6\'2"'],
  ['Weight', '170lb'],
  ['Hair', 'Brown'],
  ['Skin', 'Fair/Olive'],
  ['Eyes', 'Blue'],
  ['Tattoos', 'Hell yeah'],
];

const ATTRIBUTES: [string, number][] = [
  ['Intelligence', 4],
  ['Wisdom', 2],
  ['Strength', 3],
  ['Agility', 1],
  ['Presence', 2],
  ['Charm', 3],
];

const SKILLS: [string, number][] = [
  ['Athletics', 0],
  ['Acting', 3],
  ['Art', 1],
  ['Computers', 3],
  ['Directing', 1],
  ['Game Mastering', 4],
  ['Larceny', 0],
  ['Leadership', 2],
  ['Martial Arts', 1],
  ['Music', 0],
  ['Persuasion', 1],
  ['Spellcraft', 0],
  ['Taxidermy', 0],
  ['Worldbuilding', 3],
  ['Writing', 2],
];

const ATTACKS: [string, number, string][] = [
  ['Internet Sarcasm', 2, '75% backfire'],
  ['Unarmed', 4, 'ow'],
];

const TRAITS = [
  'Pescatarian (+1 vs water-types)',
  'Radical Agnostic (-1 def vs divine)',
  'Absurdist-Existentialist (Laugh-off Dread 1/day)',
];

const MERITS = ['Persistence, major', 'Courage, minor', 'Fast Learner, minor'];

const FLAWS = ['Thoughtlessness, major', 'Anxiety, minor', 'Vanity, minor'];

const INVENTORY = [
  'Dell Precision (for work)',
  'old Asus Notebook (NOMAD)',
  'Pilgrim Hat',
  'Broken wrist-watches (×2)',
  'Misc. board games (×7)',
  'Mr. Coffee coffeemaker',
  'Tattered Brooklynite outfits (×5)',
  'Apogee Microphone',
  "Stolen copy of 'Lithium for Medea'",
  'Half-empty bottle of Bulleit Rye',
  'Peace Lily',
  'Red-edged Dracanae (×2)',
  'Wok',
  'Wooden frogs (×3)',
  'Misc. books (×43)',
];

/** Stands in for the original's `chance.natural({min, max})` — inclusive on both ends. */
function natural(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickOne(list: string[]) {
  return list[natural(0, list.length - 1)];
}

/**
 * Days alive. The original defined this and then never wired it up to
 * anything — this port finally gives it a home in the stat block.
 */
function getExperiencePoints() {
  return Math.round((Date.now() - BIRTH_DATE.getTime()) / (1000 * 60 * 60 * 24));
}

interface BasicStatProps {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

function BasicStat({ label, value, href, external }: BasicStatProps) {
  return (
    <div className="cs-basic-stat">
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
      <label>{label}</label>
    </div>
  );
}

function DotStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="cs-dot-stat">
      <label>{label}</label>
      <div className="cs-dots">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={`cs-dot ${i < value ? 'filled' : 'empty'}`} />
        ))}
      </div>
    </div>
  );
}

function ListDetails({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="cs-list-details">
      <label>{title}</label>
      <div className="cs-rows">
        {details.map((detail) => (
          <div key={detail} className="cs-detail">
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
}

function AttacksBlock() {
  return (
    <div className="cs-attacks-block">
      <label className="cs-header">Attacks</label>
      {ATTACKS.map(([name, dicepool, special]) => (
        <div key={name} className="cs-attack-row">
          <div className="cs-written-row">
            <div className="cs-attack-name">{name}</div>
            <div className="cs-attack-dice">{dicepool}d10</div>
            <div className="cs-attack-special">{special}</div>
          </div>
          <div className="cs-label-row">
            <label className="cs-attack-name">Attack</label>
            <label className="cs-attack-dice">Dicepool</label>
            <label className="cs-attack-special">Special</label>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusBar({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total: number;
}) {
  const percentage = Math.round((value / total) * 100);

  return (
    <div className="cs-status">
      <label>{label}</label>
      <div className="cs-bar-container">
        <div className={`cs-status-bar ${label.toLowerCase()}`}>
          <div
            className={`cs-value-bar ${percentage < 98 ? 'flat' : ''}`}
            style={{ height: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="cs-value">
        {value}/{total}
      </div>
    </div>
  );
}

function StatusBlock() {
  // Health is fixed; the other two re-roll on every visit, same as the original.
  const [mana] = useState(() => natural(0, 50));
  const [wellbeing] = useState(() => natural(10, 50));

  return (
    <div className="cs-status-block">
      <label className="cs-header">Status</label>
      <div className="cs-bars">
        <StatusBar label="Health" value={75} total={75} />
        <StatusBar label="Mana" value={mana} total={50} />
        <StatusBar label="Wellbeing" value={wellbeing} total={50} />
      </div>
    </div>
  );
}

function InventoryBlock() {
  return (
    <div className="cs-inventory-block">
      <label className="cs-header">Inventory</label>
      <div className="cs-inventory">
        {INVENTORY.map((item) => (
          <div key={item} className="cs-inventory-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function CharacterSheet() {
  const [campaign] = useState(() => pickOne(CAMPAIGNS));
  const [rating] = useState(() => pickOne(RATINGS));
  const [experience] = useState(getExperiencePoints);

  // Load the original's handwriting face only for this page, so the easter egg
  // adds nothing to the rest of the site's payload.
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap';
    document.head.appendChild(link);

    const previousTitle = document.title;
    document.title = 'Character Sheet — Thomas Constantine Moore';

    return () => {
      document.head.removeChild(link);
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="character-sheet">
      <div className="cs-sheet">
        <h1 className="cs-title">Character Sheet</h1>

        <div className="cs-header-block">
          <div className="cs-stat-block">
            <BasicStat label="Name" value="Thomas Constantine Moore" />
            <BasicStat label="Player" value="Thomas Constantine Moore" />
            <BasicStat label="Campaign" value={campaign} />
            <BasicStat label="Level" value="25" />
            <BasicStat label="Experience" value={experience.toLocaleString()} />
            <BasicStat label="Rating" value={rating} />
            <BasicStat
              label="Titles"
              value="Senior Engineer"
              href="https://www.linkedin.com/in/thomasmost"
              external
            />
          </div>

          <div className="cs-desc-block">
            {DESCRIPTORS.map(([label, value]) => (
              <BasicStat key={label} label={label} value={value} />
            ))}
          </div>
        </div>

        <div className="cs-content-block">
          <div className="cs-content-block-header">Attributes</div>
          <div className="cs-attrs-block">
            {ATTRIBUTES.map(([label, value]) => (
              <DotStat key={label} label={label} value={value} />
            ))}
          </div>
        </div>

        <div className="cs-content-block">
          <div className="cs-content-block-header">Skills</div>
          <div className="cs-skills-block">
            {SKILLS.map(([label, value]) => (
              <DotStat key={label} label={label} value={value} />
            ))}
          </div>
        </div>

        <div className="cs-content-block cs-combat-block">
          <AttacksBlock />
          <StatusBlock />
        </div>

        <div className="cs-content-block cs-details-block">
          <ListDetails title="Traits" details={TRAITS} />
          <ListDetails title="Merits" details={MERITS} />
          <ListDetails title="Flaws" details={FLAWS} />
        </div>

        <div className="cs-content-block">
          <InventoryBlock />
        </div>

        <hr />

        <div className="cs-footer">
          <Link to="/">← back to the present</Link>
        </div>
      </div>
    </div>
  );
}

export default CharacterSheet;
