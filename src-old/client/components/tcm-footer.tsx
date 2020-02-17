import * as React from "react";

// var NavigationLink = NavigationInferno.NavigationLink
// var NavigationBackLink = NavigationInferno.NavigationBackLink

export class TcmFooter extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render()
   {
      return <footer>
            <a href="https://www.twitter.com/thomascmost" title="Twitter" id="twitter-footer-link" target="_blank"></a>
            <a href="https://www.instagram.com/thomascmost" title="Instagram" id="instagram-footer-link" target="_blank"></a>
            <a href="https://masochisticmisandrist.tumblr.com" title="Tumblr" id="tumblr-footer-link" target="_blank"></a>
            <a href="https://www.yollerhorn.com/thomas" title="Yollerhorn" id="yollerhorn-footer-link" target="_blank"></a>
          </footer>;
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