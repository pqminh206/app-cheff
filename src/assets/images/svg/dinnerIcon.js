import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16" {...props}>
      <Defs>
        <Path id="prefix__a" d="M.235.567H13.79v14.407H.235z" />
        <Path id="prefix__c" d="M0 .21h10.667v6.559H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(3.724 .048)">
          <Mask id="prefix__b" fill="#fff">
            <Use xlinkHref="#prefix__a" />
          </Mask>
          <Path
            d="M7.498 7.77A7.143 7.143 0 017.501.566a7.268 7.268 0 00-3.638.96A7.187 7.187 0 00.25 8.231c.586.019 1.141.225 1.588.596.423-.233.89-.353 1.378-.353 1.3 0 2.423.867 2.774 2.08a2.193 2.193 0 011.562 2.1c0 1.029-.718 1.89-1.682 2.134a7.294 7.294 0 005.263-.775 7.197 7.197 0 002.658-2.645c-2.51-.004-4.948-1.29-6.293-3.599"
            fill="#FFF"
            mask="url(#prefix__b)"
          />
        </G>
        <G transform="translate(0 8.663)">
          <Mask id="prefix__d" fill="#fff">
            <Use xlinkHref="#prefix__c" />
          </Mask>
          <Path
            d="M10.667 4.038c0-.835-.646-1.513-1.467-1.59A2.275 2.275 0 005.483.993a2.033 2.033 0 00-3.586.8C.838 1.865 0 2.73 0 3.798a2.03 2.03 0 002.038 2.02c.238 0 .466-.049.678-.124a2.038 2.038 0 002.767.502c.368.353.867.573 1.42.573.814 0 1.51-.476 1.837-1.16a1.611 1.611 0 001.927-1.57"
            fill="#FFF"
            mask="url(#prefix__d)"
          />
        </G>
        <Path
          fill="#FFF"
          d="M15.11 8.711l.29-.633.69-.122-.517-.47.096-.69-.61.344-.631-.304.14.682-.485.501.696.079zM1.16 7.008l.496-.253.492.262-.09-.546.403-.383-.551-.085-.243-.498L1.416 6l-.553.073.397.39zM12.438 5.775l.227.42.199-.435.473-.082-.355-.323.067-.473-.42.236-.432-.21.096.47-.333.342zM14.72 4.526l.14.258.12-.266.293-.052-.219-.198.04-.29-.257.146-.264-.129.058.287-.205.21zM4.244 2.787l.14.259.122-.268.29-.051-.217-.198.04-.29-.257.145-.265-.128.06.286-.206.211z"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
