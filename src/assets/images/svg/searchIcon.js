import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.087 6.21c0-2.8 2.202-5.086 4.921-5.086 2.71 0 4.92 2.276 4.92 5.086 0 2.81-2.201 5.086-4.92 5.086S1.088 9.01 1.088 6.21zm9.325 4.215a6.314 6.314 0 001.604-4.215C12.016 2.79 9.325 0 6.008 0S0 2.791 0 6.21s2.691 6.21 6.008 6.21c1.35 0 2.592-.46 3.598-1.237l4.467 4.618a.514.514 0 00.761 0 .585.585 0 000-.796l-4.422-4.58z"
        fill="#7D8DA6"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
