import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet } from "react-native";
import { Cls } from "./Colors";

export const commonCSS = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: Cls.bgc
  },
  // box
  box: {
    marginTop: hp(1),
    borderWidth: hp(0.1),
    // borderColor: Colors.borderColorECECEC,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3.5),
    borderRadius: hp(1),
  },
})

export { wp, hp };
