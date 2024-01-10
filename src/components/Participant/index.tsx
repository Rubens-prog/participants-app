import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Button } from "../commom/Button";

interface ParticipantProps {
  name: string;
  onRemove?: () => void;
}

export function Participant(props: ParticipantProps) {
  const { name, onRemove } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Button text="-" onPress={onRemove} variant="danger" />
      {/* <TouchableOpacity onPress={onRemove} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity> */}
    </View>
  );
}
