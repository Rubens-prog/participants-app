import { Text, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/commom/Input";
import { Button } from "../../components/commom/Button";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  function handleAddParticipant(text: string) {
    if (!text) {
      return Alert.alert("Erro", "insira um valor");
    }

    const checkParticipantExists = participants.includes(text);

    if (checkParticipantExists) {
      return Alert.alert(
        "Participante existente!",
        "Não é possível cadastrar dados iguais"
      );
    }

    setParticipants((prev) => [...prev, text]);

    setName("");
  }

  function handleRemoveParticipant(participant: string) {
    const filteredArray = participants.filter((data) => data !== participant);

    return Alert.alert(
      "Remover",
      `Você deseja remover o participante ${participant}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setParticipants(filteredArray), Alert.alert("Deletado!");
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lista de participantes</Text>
      <Text style={styles.eventDate}>{participants.length} participantes</Text>

      <View style={styles.flexForm}>
        <Input
          placeholder="Digite o nome do participante"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <Button
          text="+"
          onPress={() => {
            handleAddParticipant(name);
          }}
        />
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => {
              handleRemoveParticipant(item);
            }}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhum participante cadastrado!
          </Text>
        )}
      />
    </View>
  );
}
