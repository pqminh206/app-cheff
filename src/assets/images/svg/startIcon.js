import * as React from 'react';
import Svg, {SvgProps, Defs, Path, G, Mask, Use} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg width={17} height={16} viewBox="0 0 17 16" {...props}>
      <Defs>
        <Path id="prefix__a" d="M0 0h16.98V15.95H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          d="M12.811 10.65l.702 4.014a.513.513 0 01-.213.516.54.54 0 01-.566.04l-3.678-1.896a1.245 1.245 0 00-1.133 0L4.247 15.22a.54.54 0 01-.567-.04.513.513 0 01-.214-.516l.702-4.014a1.18 1.18 0 00-.35-1.057L.843 6.751a.51.51 0 01-.136-.54.524.524 0 01.434-.36l4.11-.585c.398-.057.74-.3.918-.653L8.007.96A.528.528 0 018.49.667c.209 0 .39.11.482.293l1.838 3.653c.178.352.52.596.917.653l4.111.585a.525.525 0 01.298.9L13.16 9.593c-.286.274-.417.67-.35 1.057zm3.8-3.422a1.17 1.17 0 00.308-1.224 1.203 1.203 0 00-.983-.812l-4.111-.586a.537.537 0 01-.405-.289L9.582.665A1.212 1.212 0 008.49 0c-.467 0-.885.255-1.092.665L5.56 4.317a.537.537 0 01-.405.29l-4.112.585a1.202 1.202 0 00-.982.812c-.145.436-.027.904.307 1.224l2.975 2.843a.52.52 0 01.155.466l-.702 4.014c-.079.452.106.898.484 1.168.378.27.869.304 1.283.091l3.676-1.895a.548.548 0 01.5 0l3.678 1.895a1.234 1.234 0 001.282-.09c.379-.27.564-.717.485-1.169l-.702-4.014a.52.52 0 01.155-.466l2.974-2.843z"
          fill="#2C364C"
          mask="url(#prefix__b)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
