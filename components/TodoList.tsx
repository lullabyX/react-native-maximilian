import { FlatList, View } from "react-native";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{ todoList: { id: number; text: string }[], onDelete: (id: string) => void }> = ({
  todoList, onDelete
}) => {
  return (
    <View>
      <FlatList
        data={todoList}
        renderItem={(data) => <TodoItem text={data.item.text} id={data.item.id.toString()} onDelete={onDelete} />}
        keyExtractor={(data) => data.id.toString()}
      />
    </View>
  );
};

export default TodoList;
