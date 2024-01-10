import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },

  flexForm: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
    gap: 16,
  },

  emptyListText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
