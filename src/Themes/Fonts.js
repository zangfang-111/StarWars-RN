// @Zheng 
// @flow

const type = {
  base: "HelveticaNeue",
  fontFamily: "ProximaNova-Bold",
  emphasis: "HelveticaNeue-Italic"
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
};

const weight = {
  weight1: "100",
  weight2: "200",
  weight3: "300",
  weight4: "400",
  weight5: "500",
  weight6: "600",
  weight7: "700",
  weight8: "800",
  weight9: "900",
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontFamily: "ProximaNova-Bold",
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
};

export default {
  type,
  size,
  style,
  weight
};
