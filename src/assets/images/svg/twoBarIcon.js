import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={7}
      viewBox="0 0 18 7"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill="#7D8DA6" fillRule="evenodd">
        <Path d="M0 0h18v2H0zM0 5h18v2H0z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
