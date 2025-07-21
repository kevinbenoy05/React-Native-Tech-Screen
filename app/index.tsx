import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../types";
import TaskCard from "./components/TaskCard";


export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState<string>('');
  function addTask(){
    let trimmed = query.trim();
    if(trimmed == ''){
      return;
    }
    const newTask: Task = {
      id: Date.now().toString(),
      desc: trimmed,
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
      <Text className="text-center">Simple Task Manager</Text>
      <TextInput 
        className="h-10 border"
        placeholder='Enter new task...'
        placeholderTextColor='#6b7280'
        value={query} 
        onChangeText={setQuery}></TextInput>
      <TouchableOpacity
        className={`mt-2 py-2 px-4 rounded ${!query.trim() ? 'bg-gray-400' : 'bg-blue-500'}`}
        onPress={addTask}
        disabled={!query.trim()} 
      >
        <Text className="text-white font-bold text-center">Add task</Text>
      </TouchableOpacity>
      <View className="flex flex-row justify-between items-center p-4 border-b border-gray-300">
        <Text>Task Name</Text>
        <Text>Status</Text>
        <Text>Actions</Text>
      </View>
      <ScrollView>
        {tasks.map((taskElement) => (
        <TaskCard key = {taskElement.id} task = {taskElement} 
        complete = {markComplete} 
        handleDelete = {deleteTask}></TaskCard>
      ))}
      </ScrollView>
      
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