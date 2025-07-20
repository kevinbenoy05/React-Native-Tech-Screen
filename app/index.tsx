import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../types";
import TaskCard from "./components/TaskCard";


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
  function markComplete(completeID:string) {
  setTasks(
    tasks.map((task)=>
      task.id === completeID? {...task, complete: true}:{...task}
    )
  );
};
function deleteTask(delID:string){
  let newTasks = tasks.filter(task => task.id !== delID)
  setTasks([...newTasks])
}
  return (
    <View style ={{paddingTop:50}} className="flex-1">
      <TextInput 
        className="h-10 border"
        placeholder='Enter new task...'
        placeholderTextColor='#6b7280'
        value={query} 
        onChangeText={setQuery}></TextInput>
      <TouchableOpacity
        className="mt-2"
        onPress={addTask}
      >
        <Text>Add task</Text>
      </TouchableOpacity>
      {tasks.map((taskElement) => (
        <TaskCard key = {taskElement.id} task = {taskElement} 
        complete = {markComplete} 
        handleDelete = {deleteTask}></TaskCard>
      ))}
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