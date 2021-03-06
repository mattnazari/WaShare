import React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

export const HamMenu = props => (
  <Svg viewBox="0 0 20.1 14" {...props}>
    <Path d="M19 8H1c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-6H1c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 12H1c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z" />
  </Svg>
);

export const Notifications = props => (
  <Svg viewBox="0 0 20 22.1" {...props}>
    <Path d="M19 17H1c-.4 0-.8-.3-1-.7-.1-.4 0-.9.4-1.1C.4 15.2 3 13.3 3 7c0-3.9 3.1-7 7-7s7 3.1 7 7c0 6.3 2.5 8.2 2.6 8.2.4.3.5.7.4 1.1s-.6.7-1 .7zM3.1 15h13.7C16 13.5 15 11 15 7c0-2.8-2.2-5-5-5S5 4.2 5 7c0 4-1 6.5-1.9 8zm6.9 7c-.5 0-1.1-.2-1.6-.5-.4-.2-.9-.6-1.1-1.2-.2-.5.1-1.1.6-1.3.5-.2 1.1.1 1.3.6 0 0 .2.1.3.2.3.2.5.2.7.2.3-.1.5-.2.7-.5.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4-.4.7-1.1 1.2-1.9 1.4H10z" />
  </Svg>
);

export const Back = props => (
  <Svg viewBox="0 0 9 16" {...props}>
    <Path d="M8 16c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0s.4 1 0 1.4L2.4 8l6.3 6.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
  </Svg>
);

export const Help = props => (
  <Svg viewBox="0 0 23 23" {...props}>
    <Path d="M11.5 0C5.2 0 0 5.2 0 11.5S5.2 23 11.5 23 23 17.9 23 11.5 17.9 0 11.5 0zm-.8 19.2c-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.3-1.3.7 0 1.3.5 1.4 1.2 0 .8-.6 1.3-1.3 1.3zm2-6.5c-.8.3-1.4.6-1.3 1.5v1.1l-1.8.1-.1-1.1c-.1-1.9 1-2.8 2.5-3.3.8-.2 1.6-1.2 1.5-2.1-.1-1.3-1.2-2.1-2.4-2-1.1 0-2.1 1-2 2.5l-1.8.1C7.2 6.9 8.9 5.2 11 5.1c2.2-.1 4.2 1.3 4.3 3.7.2 1.9-1.1 3.3-2.6 3.9z" />
  </Svg>
);

/* Results in: Ellipse is not defined
export const Mastercard = props => (
  <Svg viewBox="0 0 100 60" {...props}>
    <Path d="M40 30c0-8.9 3.9-16.9 10-22.4C44.7 2.9 37.7 0 30 0 13.4 0 0 13.4 0 30s13.4 30 30 30c7.7 0 14.7-2.9 20-7.6-6.1-5.5-10-13.5-10-22.4zM70 0c-7.7 0-14.7 2.9-20 7.6 6.1 5.5 10 13.5 10 22.4s-3.9 16.9-10 22.4c5.3 4.8 12.3 7.6 20 7.6 16.6 0 30-13.4 30-30S86.6 0 70 0z" />
    <Ellipse cx={50} cy={30} rx={10} ry={22.4} />
  </Svg>
)
*/

export const Check = props => (
  <Svg width={21} height={21} {...props}>
    <G fill="none">
      <Circle cx={10.5} cy={10.5} r={10.5} fill="#506BFB" />
      <Path stroke="#FFF" d="M17 6l-8.25 9L5 10.91" />
    </G>
  </Svg>
);
