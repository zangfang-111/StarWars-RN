// @Zheng
// @flow

import { StyleSheet } from 'react-native';

import Fonts from "../Themes/Fonts";
import Colors from "../Themes/Colors";
import Metrics from "../Themes/Metrics";

export default StyleSheet.create({
  title: {
    marginTop: 30,
    color: Colors.mainColor, 
    fontSize: Fonts.size.h3,
    fontWeight: Fonts.weight.weight9,
    marginVertical: Metrics.marginVertical
  },
  mainContainer: {
    flex: 1,
    marginBottom: 0,
    width: Metrics.screenWidth,
    padding: Metrics.screenPadding,
  },
  crawlView: {
    position: 'relative',
    alignItems: "center",
    justifyContent: "center", 
    marginTop: Metrics.baseMargin
  },
  introText: {
    color: Colors.mainColor, 
    marginBottom: Metrics.baseMargin
  },
  crawlImage: {
    width: '100%',
    height: Metrics.images.logo
  },
  crawlScrollView: {
    marginTop: 30,
    backgroundColor: Colors.background
  },
  crawlText: {
    color: Colors.mainColor
  },
  movieIntroView: {
    position: 'relative',
    alignItems: "center",
    justifyContent: "center", 
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.doubleBaseMargin,
    height: Metrics.screenHeight * 0.25
  },
  movieIntroScroll: {
    marginLeft: Metrics.baseLeftRightMargin, 
    marginRight: Metrics.baseLeftRightMargin
  },
  movieIntro: {
    color: Colors.mainColor, 
    marginBottom: Metrics.baseMargin
  },
  tableContainer: {
    flex: 1, 
    height: Metrics.screenHeight * 0.3
  },
  headerRow: {
    height: 50, 
    backgroundColor: Colors.tableHeaderBasicColor
  },
  headerText: {
    textAlign: 'center',
    color: Colors.mainColor,
    fontWeight: Fonts.weight.weight1
  },
  tableRow: {
    height: 35, 
    backgroundColor: Colors.background
  },
  tableText: {
    textAlign: 'center',
    color: Colors.mainColor,
    fontWeight: Fonts.weight.weight1,
  },
  rowsStyle: {
    height: 35, 
    backgroundColor: Colors.background
  }
});
  