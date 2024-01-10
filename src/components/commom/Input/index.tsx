import { TextInput } from "react-native";
import { styles } from "./styles";
import * as T from "./types";

export function Input(props: T.InputProps) {
  const { placeholder, onChangeText, value } = props;

  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={styles.container}
        placeholderTextColor={"#6B6B6B"}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
}
