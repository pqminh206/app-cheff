import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function CheffIcon(props) {
  return (
    <Svg width={16} height={17} viewBox="0 0 16 17" {...props}>
      <Defs>
        <Path id="prefix__a" d="M.001.023H11.62V2.92H0z" />
        <Path id="prefix__c" d="M0 .023h15.977v12.32H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(2.179 13.056)">
          <Mask id="prefix__b" fill="#fff">
            <Use xlinkHref="#prefix__a" />
          </Mask>
          <Path
            d="M11.257.023H.366c-.2 0-.363.162-.363.362L0 1.44c0 .396.154.767.434 1.047.28.28.652.433 1.048.433h8.655c.817 0 1.482-.663 1.482-1.478V.385c0-.2-.163-.362-.363-.362"
            fill="#3756FF"
            mask="url(#prefix__b)"
          />
        </G>
        <G transform="translate(0 .011)">
          <Mask id="prefix__d" fill="#fff">
            <Use xlinkHref="#prefix__c" />
          </Mask>
          <Path
            d="M11.174 10.036a.364.364 0 01-.561-.46c.39-.474 1.007-1.421 1.007-1.944a.363.363 0 01.726 0c0 .952-1.052 2.258-1.172 2.404zm-2.822-.23a.363.363 0 01-.726 0V7.632a.363.363 0 01.726 0v2.174zm-3.038.28a.363.363 0 01-.511-.05C4.683 9.89 3.63 8.584 3.63 7.632a.363.363 0 01.726 0c0 .524.618 1.47 1.008 1.944a.363.363 0 01-.05.51zm6.669-8.614c-.222 0-.45.022-.693.067a4.358 4.358 0 00-7.66 2.832.363.363 0 01-.725 0c0-.785.18-1.544.538-2.256a.362.362 0 00-.413-.514A3.976 3.976 0 000 5.458C0 6.964.851 8.333 2.187 9.01l-.004 2.97a.364.364 0 00.363.363h10.89c.2 0 .363-.163.363-.363V9.005a3.984 3.984 0 002.178-3.547 3.995 3.995 0 00-3.994-3.986z"
            fill="#3756FF"
            mask="url(#prefix__d)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default React.memo(CheffIcon);
