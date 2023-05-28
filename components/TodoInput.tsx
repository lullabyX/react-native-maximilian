import { useState } from "react";
import { Button, TextInput, View } from "react-native";

const TodoInput: React.FC<{
  onClose: () => void;
  onAdd: (text: string) => void;
}> = ({ onClose, onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        padding: 16,
        backgroundColor: "#FFDEB9",
      }}
    >
      <TextInput
        style={{
          borderColor: "#ccc",
          borderRadius: 6,
          borderWidth: 1,
          width: "100%",
          padding: 12,
        }}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <View style={{ flexDirection: "row", gap: 24 }}>
        <View
          style={{
            justifyContent: "center",
            width: 120,
            backgroundColor: "#FFDEB9",
            borderRadius: 6,
          }}
        >
          <Button
            title="Add"
            color="#FE6244"
            onPress={() => {
              onAdd(inputValue);
              setInputValue("");
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            width: 120,
            backgroundColor: "#FFDEB9",
            borderRadius: 6,
          }}
        >
          <Button title="Cancel" color="#FC2947" onPress={onClose} />
        </View>
      </View>
    </View>
  );
};

export default TodoInput;
