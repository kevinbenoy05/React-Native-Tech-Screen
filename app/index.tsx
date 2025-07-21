import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../types";
import TaskCard from "./components/TaskCard";


export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState<string>('');
  const [msg, setMsg] = useState<string>('')
  useEffect(() => {
    if (msg){
      const timer = setTimeout(() => {setMsg('')}, 3000);
      return () => clearTimeout(timer);
    }
  }, [msg]);
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
    setMsg('Task added!')
  }
  const markComplete = useCallback((completeID:string) => {
  setTasks(
    tasks.map((task)=>
      task.id === completeID? {...task, complete: true}:{...task}
    )
  );
  setMsg("Task marked complete!")
}, [tasks]);

const deleteTask = useCallback((delID:string) => {
  let newTasks = tasks.filter(task => task.id !== delID)
  setTasks([...newTasks])
  setMsg("Task deleted!")
}, [tasks]);
  return (
    <View style ={{flex:1}}>
       {msg && (
        <View className="absolute bottom-4 right-4 p-3 rounded-lg shadow-lg bg-green-100 border border-green-200">
          <Text className="text-black text-center font-bold">{msg}</Text>
        </View>
      )}
      <Text className="text-3xl font-bold my-4 text-center">Task Manager</Text>
      <TextInput 
        className="h-12 bg-white rounded-lg px-4"
        placeholder='Enter new task...'
        placeholderTextColor='#6b7280'
        value={query} 
        onChangeText={setQuery}></TextInput>
      <TouchableOpacity
        className={`mt-2 py-2 px-4 rounded-lg shadow-md ${!query.trim() ? 'bg-gray-400' : 'bg-blue-500'}`}
        onPress={addTask}
        disabled={!query.trim()} 
      >
        <Text className="text-white font-bold text-center text-lg">Add task</Text>
      </TouchableOpacity>
       
      <Text className="text-2xl font-bold">Task list: </Text>
      <View className="flex flex-row justify-between items-center p-4 border-b border-gray-300">
        <Text className="w-2/4 font-bold">Task Name</Text>
        <Text className="w-1/4 text-center font-bold">Status</Text>
        <Text className="w-1/4 text-center font-bold">Actions</Text>
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