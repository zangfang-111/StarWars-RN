// @Zheng
// re-usable metrics styles
// @flow

import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  baseMargin: 10,
  screenPadding: 15,
  marginVertical: 10,
  doubleBaseMargin: 20,
  baseLeftRightMargin: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  // in future useful
  marginHorizontal: 10,
  section: 25,  
  smallMargin: 5,
  horizontalLineHeight: 1,
  loadingBarHeight: 20,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300
  }
};

export default metrics;
