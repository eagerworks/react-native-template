import { StyleSheet, ViewStyle } from 'react-native';

import { SHADOW } from '@constants/colors';

interface LayoutStyles {
  flex: ViewStyle;
  justifyCenter: ViewStyle;
  justifyEnd: ViewStyle;
  justifyBeginning: ViewStyle;
  justifyAround: ViewStyle;
  justifyBetween: ViewStyle;
  alignCenter: ViewStyle;
  alignStart: ViewStyle;
  alignEnd: ViewStyle;
  rowDirection: ViewStyle;
  wrapContent: ViewStyle;
  hidden: ViewStyle;
  stretch: ViewStyle;
  boxShadow: ViewStyle;
  p1: ViewStyle;
  p2: ViewStyle;
  p3: ViewStyle;
  p4: ViewStyle;
  p5: ViewStyle;
  p10: ViewStyle;
  p20: ViewStyle;
  px1: ViewStyle;
  px2: ViewStyle;
  px3: ViewStyle;
  px4: ViewStyle;
  px5: ViewStyle;
  px10: ViewStyle;
  px20: ViewStyle;
  py1: ViewStyle;
  py2: ViewStyle;
  py3: ViewStyle;
  py4: ViewStyle;
  py5: ViewStyle;
  py10: ViewStyle;
  py20: ViewStyle;
  pb1: ViewStyle;
  pb2: ViewStyle;
  pb3: ViewStyle;
  pb4: ViewStyle;
  pb5: ViewStyle;
  pb10: ViewStyle;
  pb20: ViewStyle;
  pt1: ViewStyle;
  pt2: ViewStyle;
  pt3: ViewStyle;
  pt4: ViewStyle;
  pt5: ViewStyle;
  pt10: ViewStyle;
  pt20: ViewStyle;
  pl1: ViewStyle;
  pl2: ViewStyle;
  pl3: ViewStyle;
  pl4: ViewStyle;
  pl5: ViewStyle;
  pl10: ViewStyle;
  pl20: ViewStyle;
  pr1: ViewStyle;
  pr2: ViewStyle;
  pr3: ViewStyle;
  pr4: ViewStyle;
  pr5: ViewStyle;
  pr10: ViewStyle;
  pr20: ViewStyle;
  m1: ViewStyle;
  m2: ViewStyle;
  m3: ViewStyle;
  m4: ViewStyle;
  m5: ViewStyle;
  m10: ViewStyle;
  m20: ViewStyle;
  mx1: ViewStyle;
  mx2: ViewStyle;
  mx3: ViewStyle;
  mx4: ViewStyle;
  mx5: ViewStyle;
  mx10: ViewStyle;
  mx20: ViewStyle;
  my1: ViewStyle;
  my2: ViewStyle;
  my3: ViewStyle;
  my4: ViewStyle;
  my5: ViewStyle;
  my10: ViewStyle;
  my20: ViewStyle;
  mb1: ViewStyle;
  mb2: ViewStyle;
  mb3: ViewStyle;
  mb4: ViewStyle;
  mb5: ViewStyle;
  mb10: ViewStyle;
  mb20: ViewStyle;
  mt1: ViewStyle;
  mt2: ViewStyle;
  mt3: ViewStyle;
  mt4: ViewStyle;
  mt5: ViewStyle;
  mt10: ViewStyle;
  mt20: ViewStyle;
  ml1: ViewStyle;
  ml2: ViewStyle;
  ml3: ViewStyle;
  ml4: ViewStyle;
  ml5: ViewStyle;
  ml10: ViewStyle;
  ml20: ViewStyle;
  mr1: ViewStyle;
  mr2: ViewStyle;
  mr3: ViewStyle;
  mr4: ViewStyle;
  mr5: ViewStyle;
  mr10: ViewStyle;
  mr20: ViewStyle;
}

const styles = StyleSheet.create<LayoutStyles>({
  flex: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyBeginning: { justifyContent: 'flex-start' },
  justifyAround: { justifyContent: 'space-around' },
  justifyBetween: { justifyContent: 'space-between' },
  alignCenter: { alignItems: 'center' },
  alignStart: { alignItems: 'flex-start' },
  alignEnd: { alignItems: 'flex-end' },
  rowDirection: {
    flexDirection: 'row',
  },
  wrapContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hidden: { display: 'none' },
  stretch: { alignSelf: 'stretch' },
  boxShadow: {
    shadowColor: SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.57,
    shadowRadius: 3.8,
    elevation: 24,
  },
  p1: { padding: 1 },
  p2: { padding: 2 },
  p3: { padding: 3 },
  p4: { padding: 4 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p20: { padding: 20 },
  px1: { paddingHorizontal: 1 },
  px2: { paddingHorizontal: 2 },
  px3: { paddingHorizontal: 3 },
  px4: { paddingHorizontal: 4 },
  px5: { paddingHorizontal: 5 },
  px10: { paddingHorizontal: 10 },
  px20: { paddingHorizontal: 20 },
  py1: { paddingVertical: 1 },
  py2: { paddingVertical: 2 },
  py3: { paddingVertical: 3 },
  py4: { paddingVertical: 4 },
  py5: { paddingVertical: 5 },
  py10: { paddingVertical: 10 },
  py20: { paddingVertical: 20 },
  pb1: { paddingBottom: 1 },
  pb2: { paddingBottom: 2 },
  pb3: { paddingBottom: 3 },
  pb4: { paddingBottom: 4 },
  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb20: { paddingBottom: 20 },
  pt1: { paddingTop: 1 },
  pt2: { paddingTop: 2 },
  pt3: { paddingTop: 3 },
  pt4: { paddingTop: 4 },
  pt5: { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pt20: { paddingTop: 20 },
  pl1: { paddingLeft: 1 },
  pl2: { paddingLeft: 2 },
  pl3: { paddingLeft: 3 },
  pl4: { paddingLeft: 4 },
  pl5: { paddingLeft: 5 },
  pl10: { paddingLeft: 10 },
  pl20: { paddingLeft: 20 },
  pr1: { paddingRight: 1 },
  pr2: { paddingRight: 2 },
  pr3: { paddingRight: 3 },
  pr4: { paddingRight: 4 },
  pr5: { paddingRight: 5 },
  pr10: { paddingRight: 10 },
  pr20: { paddingRight: 20 },
  m1: { margin: 1 },
  m2: { margin: 2 },
  m3: { margin: 3 },
  m4: { margin: 4 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m20: { margin: 20 },
  mx1: { marginHorizontal: 1 },
  mx2: { marginHorizontal: 2 },
  mx3: { marginHorizontal: 3 },
  mx4: { marginHorizontal: 4 },
  mx5: { marginHorizontal: 5 },
  mx10: { marginHorizontal: 10 },
  mx20: { marginHorizontal: 20 },
  my1: { marginVertical: 1 },
  my2: { marginVertical: 2 },
  my3: { marginVertical: 3 },
  my4: { marginVertical: 4 },
  my5: { marginVertical: 5 },
  my10: { marginVertical: 10 },
  my20: { marginVertical: 20 },
  mb1: { marginBottom: 1 },
  mb2: { marginBottom: 2 },
  mb3: { marginBottom: 3 },
  mb4: { marginBottom: 4 },
  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb20: { marginBottom: 20 },
  mt1: { marginTop: 1 },
  mt2: { marginTop: 2 },
  mt3: { marginTop: 3 },
  mt4: { marginTop: 4 },
  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  ml1: { marginLeft: 1 },
  ml2: { marginLeft: 2 },
  ml3: { marginLeft: 3 },
  ml4: { marginLeft: 4 },
  ml5: { marginLeft: 5 },
  ml10: { marginLeft: 10 },
  ml20: { marginLeft: 20 },
  mr1: { marginRight: 1 },
  mr2: { marginRight: 2 },
  mr3: { marginRight: 3 },
  mr4: { marginRight: 4 },
  mr5: { marginRight: 5 },
  mr10: { marginRight: 10 },
  mr20: { marginRight: 20 },
});

export default styles;
