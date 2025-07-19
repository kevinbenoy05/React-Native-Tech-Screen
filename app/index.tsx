import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "./types";


export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState<string>('');
  function addTask(){
    const newTask: Task = {
      id: Date.now().toString(),
      desc: query,
      complete: false
    }
    setTasks([...tasks, newTask])
    setQuery("")
  }
  return (
    <View>
      <TextInput 
        placeholder='Enter new task...'
        value={query} 
        onChangeText={setQuery}></TextInput>
      <TouchableOpacity 
        onPress={addTask}
      >
        <Text>Add task</Text>
      </TouchableOpacity>
    </View>
    
  );
}


/*
Overall Structure for MVP
  Title: Simple Task Manager
  A header Tasks:
  {Dynamic list of tasks
    EACH TASK CONTAINS:
      Name
      Descriptoin
      Status: Incomplete or Complete
      Delete button
  }
  Button to add task at the bottom

*/