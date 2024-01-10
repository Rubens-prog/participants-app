import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import * as T from "./types";

export function Button(props: T.ButtonProps) {
  const { text, onPress, variant = "success" } = props;
  return (
    <>
      <TouchableOpacity
        style={[styles.container, variant && styles[variant]]}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}
