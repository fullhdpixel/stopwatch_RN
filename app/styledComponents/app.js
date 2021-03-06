import styled from 'styled-components'

import {Dimensions, Platform} from 'react-native'
import {Header, Title, Body} from 'native-base'
import {LinearGradient, Constants} from 'expo'

import Image from 'react-native-remote-svg'

const {width, height} = Dimensions.get('window')

//Attach color props to the LinearGradient
export const Gradient = styled(LinearGradient).attrs({
  colors: ['#392F83', '#33306A', '#252B45']
})`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: ${height}px;
  width: ${width}px;
`

export const AppHeader = styled(Header)`
  backgroundColor: transparent;
  borderBottomWidth: 0;
  top: ${Platform.OS === 'android'
  ? Constants.statusBarHeight
  : 0};
`

export const AppHeaderBody = styled(Body)`
  flex: 3;
  justifyContent: center;
  alignItems: center;
`

export const HeaderTitle = styled(Title)`
  fontFamily: gt-walsheim-bold;
  color: white;
  letterSpacing: 2;
  textAlign: center;
`;

export const PyramidView = styled
  .View
  .attrs({pointerEvents: 'none'})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  zIndex: -1;
`

const pyramidWidth = 603.13;
const pyramidHeight = 557.82;

export const Pyramid = styled(Image)`
  position: absolute;
  bottom: 0;
  width: ${width}px;
  height: ${width * pyramidHeight / pyramidWidth}px;
`