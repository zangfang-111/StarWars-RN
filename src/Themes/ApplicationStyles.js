// @Zheng
// @flow

import Fonts from "./Fonts";
import Colors from "./Colors";
import Metrics from "./Metrics";

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center", 
      backgroundColor: Colors.background,
    }
  }
};

export default ApplicationStyles;
