import { Pressable, Text, View } from "react-native";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onDelete: (id: string) => void;
}> = ({ text, id, onDelete }) => {
  return (
    <View
      style={{
        backgroundColor: "#FC2947",
        borderRadius: 6,
        marginBottom: 6,
        justifyContent: "center",
      }}
    >
      <Pressable
        onPress={() => onDelete(id)}
        android_ripple={{ color: "#691512", borderless: true }}
      >
        <Text
          style={{
            padding: 16,
            color: "white",
            fontWeight: "600",
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;
