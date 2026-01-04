interface Poem {
  title: string;
  year: string;
  lines: string[];
}

const poems: Poem[] = [
  {
    title: 'Clay',
    year: '2026',
    lines: [
      'The road to hell is paved with red brick',
      'And well-intentioned souls',
      'Once wet and pink upon the river-bed',
      'Now pounded flat and stepped upon, inert',
      'It seems to me we’re born soft',
      'Then choose how to toughen',
      'Whether to fold over and over',
      'Like a sword, sharp through and through',
      'Or to keep some jelly filling',
      'The worst fate is to be a jawless fish',
      'Soft all over with no more than primitive spine',
      'So when life hits me',
      'With all the force of a bus, or a truck,',
      'Or a potter at his wheel',
      'Throwing me into a new shape',
      'As the years spin past',
      'I go my own way',
      'I’d rather be a hard puck of bad clay',
      'Something not easily defined',
      'Than a vase in someone else’s cupboard',
      'The greatest wrong you could do me',
      'Is make me feel an undeserved emotion',
      'I’ve well-earned shame, worked hard for heartbreak',
      'Done things I don’t care to dwell upon too long',
      'Made mistakes',
      'But when you take me in my current form',
      'And treat me as you would a cracked and ill-performing bowl',
      'Remember what a golem is made from',
    ],
  },
  {
    title: 'The Night Visitor',
    year: '2019',
    lines: [
      'Home is not',
      'Where the heart is but where the hearth is',
      'Somewhere warm and bright',
      'To keep the Night Visitor at bay',
      'But the chimney has been shuttered fast',
      'To keep out rain',
      'Surrendering to',
      'Past time and passed lives',
      'And him and me',
      'That black cloaked shade and I',
      'Will rest our feet together',
      'By the old coals',
      'Of a long forgotten fire',
      'We sit and stay',
      'An hour, maybe longer',
      'Hands folded in our laps',
      'I dare not look too close',
      'I know',
      'His eyes are on my throat',
    ],
  },
  {
    title: "It's Snowing on the J Train",
    year: '2017',
    lines: [
      "It's snowing on the J train",
      'It started with just a few flakes, outside,',
      'The way snow does',
      'The way it makes you think,',
      '"Is it snowing?"',
      '"Or are those just floating flecks of ash"',
      '"Or trash"',
      '"Or god knows"',
      'Until it snows.',
      'Until it goes flying through the Kosciusko stop in droves.',
      'It followed us onto the train.',
      'A man in a green jacket nearly fell down as he unshouldered his bag and the burden of being an American today.',
      'The doors closed and the snow stayed.',
      'It paid no attention to the ceilings and walls',
      'It falls.',
      'And we all stay glued to our phones, praying that the end will not come during our commute.',
      "Saying to our loved ones, \"It'll be okay.\"",
      '"I\'ll see you soon."',
      '"The movement grows."',
      'And still it snows.',
    ],
  },
  {
    title: 'A Bad Manhattan',
    year: '2013',
    lines: [
      "What I wouldn't pay for a day to be near you",
      'Though you may be okay now',
      'Or crying your eyes out',
      'Or laughing that singular laugh that you have',
      "It's a salve to my method",
      "It's a fate worse than death",
      'To be left with this theft of your face',
      'And my heart',
      'Stop, start, and depart',
      'To my empty hearth',
      "Where I'll curl up on the coals",
      'That are so fucking old they burn cold',
      "And I'll spend too much (or too little)",
      'Time on this rhyme',
      'Biting the lime',
      'Turn on a dime',
      'Fighting the frost that is riming my mind',
      'To try and conjure a half-decent memory',
      'Instead of a demo-reel',
      'A lemon peel rotting in a bad Manhattan',
      'And about as satisfying',
      'But even as I think it',
      'I drink it',
      "It's what I have",
      "And it's better than nothing.",
    ],
  },
];

function Poetry() {
  return (
    <>
      <section className="section">
        <h1 className="hero-title">Poetry</h1>
        <p className="text-muted">
          Short sequences of words.
        </p>
      </section>

      {poems.map((poem) => (
        <article key={poem.title} className="poem">
          <h2 className="poem-title" style={{ marginBottom: '0.5rem' }}>{poem.title}</h2>
          <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>{poem.year}</p>
          <div className="poem-lines">
            {poem.lines.map((line, index) => (
              <span key={index} className="poem-line">
                {line}
              </span>
            ))}
          </div>
        </article>
      ))}
    </>
  );
}

export default Poetry;
