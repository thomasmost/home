import * as React from "react";
import Gallery from 'react-photo-gallery';
 
const PHOTO_SET = [
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/ag1.jpg',
     width: 4,
     height: 3
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/tm2.jpg',
     width: 4,
     height: 3
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/ag2.jpg',
     width: 4,
     height: 3
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/ag6.jpg',
     width: 3,
     height: 4
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/ag3.jpg',
     width: 4,
     height: 3
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/ag4.jpg',
     width: 3,
     height: 4
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/ag5.jpg',
     width: 4,
     height: 3
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/kings-of-israel1.jpg',
     width: 4,
     height: 3
   },
   {
     src: 'https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/vi1.jpg',
     width: 4,
     height: 3
   }
 ];
export class ModelingPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
       return  <div
                  className="page">
                  <Gallery photos={PHOTO_SET} />
               </div>;
   }
}