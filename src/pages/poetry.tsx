import * as React from "react";
import Layout from "../components/layout";

const poemize = (templateLiteral: string) => {
  return templateLiteral.split('\n').map((line) => (
    <div>
      {line}
    </div>
  ))
}

const TheNightVisitor = poemize(`Home is not
Where the heart is but where the hearth is
Somewhere warm and bright
To keep the Night Visitor at bay
But the chimney has been shuttered fast
To keep out rain
Surrendering to
Past time and passed lives
And him and me
That black cloaked shade and I
Will rest our feet together
By the old coals
Of a long forgotten fire
We sit and stay
An hour, maybe longer
Hands folded in our laps
I dare not look too close
I know
His eyes are on my throat`);

const TheJTrain = poemize(`It's snowing on the J train
It started with just a few flakes, outside,
The way snow does
The way it makes you think, 
"Is it snowing?"
"Or are those just floating flecks of ash"
"Or trash"
"Or god knows"
Until it snows.
Until it goes flying through the Kosciusko stop in droves.
It followed us onto the train.
A man in a green jacket nearly fell down as he unshouldered his bag and the burden of being an American today.
The doors closed and the snow stayed. 
It paid no attention to the ceilings and walls
It falls.
And we all stay glued to our phones, praying that the end will not come during our commute. 
Saying to our loved ones, "It'll be okay."
"I'll see you soon."
"The movement grows."
And still it snows.`);

const DreamOfYou = poemize(`I dream of you in a whispering wild
Bathed in the sun and full in bloom
With all the colors of summer and love
Mixing thoughts and thoughtlessness
I want you strewn across the ground with me
Like leaves that cannot help but brush
To curl their fingers 'round each others' soft
And fragile frames, like summer winds
As if our bodies glowed with inner light
And burst with vivid winding vines
While sighing warmth: a dry desirous breath
A susurrus of rustling souls
Which catch my breath while I submit
I yield to you, I yield to this
This moment alone in the world with you
I ask your eyes to strip me bare
To touch my flesh, to turn my blood to wine
It flows for you, it aches with heat
And we ache doubly for each others' skin
Still young and yearning to be desired
And so we are; we dare to trembling touch
And nothing stops, but nothing ends
Not now I’ve found the tropics in your lips
Not now that I have dreamed with you
And so I dream of you.`);

export const Poetry = () => (
  <Layout>
    <h3>Poetry</h3>
    <div className="content-block">
      <div style={{ marginBottom: '20px' }}>
        <p>
          <em>The Night Visitor</em>
        </p>
        <div>
          {TheNightVisitor}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <p>
          <em>It's Snowing on the J Train</em>
        </p>
        <div>
          {TheJTrain}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <p>
          <em>Dream of You</em>
        </p>
        <div>
          {DreamOfYou}
        </div>
      </div>
  </div>
</Layout>
);

export default Poetry;
