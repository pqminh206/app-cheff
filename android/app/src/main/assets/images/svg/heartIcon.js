import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function HeartIcon(props) {
  return (
    <Svg width={17} height={16} viewBox="0 0 17 16" {...props}>
      <Defs>
        <Path id="prefix__a" d="M0 0h16.999v15.786H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          d="M16.97 4.707C16.724 1.98 14.79 0 12.37 0 10.76 0 9.283.867 8.453 2.255 7.63.85 6.214 0 4.629 0 2.209 0 .276 1.98.029 4.707c-.02.12-.1.755.144 1.789.352 1.491 1.166 2.848 2.353 3.922l5.923 5.368 6.023-5.367c1.188-1.075 2.002-2.431 2.354-3.923.245-1.034.164-1.668.145-1.789"
          fill="#7D8DA6"
          mask="url(#prefix__b)"
        />
      </G>
    </Svg>
  );
}

export default React.memo(HeartIcon);
