import { theme } from "@/theme";
import { StyleSheet } from "react-native";
const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Black,
    alignItems: 'center',
  },
  header: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.White,
    fontSize: 24,
    fontFamily: fontFamily.extraBold
  },
  subtitle: {
    color: colors.Gray[300],
    fontSize: 14,
    fontFamily: fontFamily.medium
  },
  ticket: {
    flex: 1,
    width: "100%",
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: colors.White,
    paddingBottom: 24
  },
  content: {},
  flight: {}
})