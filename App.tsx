import { useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [showInput, setShowInput] = useState(false);
  const [todoList, setTodoList] = useState<{ id: number; text: string }[]>([]);

  const handleInput = (todo: string) => {
    setTodoList((list) => [...list, { id: Math.random(), text: todo }]);
    setShowInput(false);
  };

  const handleDelete = (id: string) => {
    setTodoList((list) => list.filter((item) => item.id.toString() !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
        <View
          style={{
            paddingBottom: 16,
            marginBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Button
            color="#FE6244"
            title="Add To-Do"
            onPress={() => setShowInput(true)}
          />
        </View>
        <Modal visible={showInput} animationType="slide" statusBarTranslucent>
          <TodoInput onClose={() => setShowInput(false)} onAdd={handleInput} />
        </Modal>
        <TodoList todoList={todoList} onDelete={handleDelete} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7149C6",
  },
});
