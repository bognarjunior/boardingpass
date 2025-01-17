import { theme } from "@/theme";
import { StyleSheet } from "react-native";
const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  label: {
    color: colors.Gray[400],
    fontSize: 12,
    fontFamily: fontFamily.regular,
    textTransform: "uppercase",
  },
  value: {
    color: colors.Black,
    fontSize: 42,
    fontFamily: fontFamily.bold,
    marginTop: -10
  }
});