import * as React from "react";
import Layout from "../components/layout";

const poemize = (templateLiteral: string) => {
  return templateLiteral.split("\n").map((line) => <div>{line}</div>);
};

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

const BadManhattan = poemize(`What I wouldn't pay for a day to be near you
Though you may be okay now
Or crying your eyes out
Or laughing that singular laugh that you have
It's a salve to my method
It's a fate worse than death
To be left with this theft of your face
And my heart
Stop, start, and depart
To my empty hearth
Where I'll curl up on the coals
That are so fucking old they burn cold
And I'll spend too much (or too little)
Time on this rhyme
Turning on a dime
Biting into a lime
Fighting the frost that is riming my mind
To try and conjure a half-decent memory
Instead of a demo-reel
A lemon peel rotting in a bad Manhattan
And about as satisfying
But even as I think it
I drink it
It's what I have
And it's better than nothing.`);

export const Poetry = () => (
  <Layout title="Poetry">
    <div className="content-block">
      <div style={{ marginBottom: "20px" }}>
        <p>
          <em>The Night Visitor</em>
        </p>
        <div>{TheNightVisitor}</div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <p>
          <em>It's Snowing on the J Train</em>
        </p>
        <div>{TheJTrain}</div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <p>
          <em>A Bad Manhattan</em>
        </p>
        <div>{BadManhattan}</div>
      </div>
    </div>
  </Layout>
);

export default Poetry;
