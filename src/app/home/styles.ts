import { theme } from "@/theme";
import { StyleSheet } from "react-native";
const { colors } = theme;

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
  }
})