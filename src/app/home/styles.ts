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
    width: "100%",
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: colors.White,
    paddingBottom: 24
  },
  content: {
    padding: 20
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    color: colors.Gray[800],
    fontSize: 14,
    fontFamily: fontFamily.regular
  },
  label: {
    color: colors.Gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontFamily.regular,
  },
  name: {
    color: colors.Black,
    fontSize: 24,
    fontFamily: fontFamily.medium,
  },
  details: {
    marginTop: 52
  },
  inline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer:{
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 22
  },
  footerContent:{
    flex: 1,
    gap: 24
  },
})