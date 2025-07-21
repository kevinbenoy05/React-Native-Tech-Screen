import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../types";
import TaskCard from "./components/TaskCard";


export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState<string>('');
  const [msg, setMsg] = useState<string>('')
  // Setup the timer for the action completed popup - hide after 3 seconds
  useEffect(() => { 
    if (msg){
      const timer = setTimeout(() => {setMsg('')}, 3000);
      return () => clearTimeout(timer);
    }
  }, [msg]);
  //Add task to task list and update state variable with unique ID(timestamp) -> add card on screen
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
  //Mark a task(match by ID) as complete - change status once found, but keep original state variable
  const markComplete = useCallback((completeID:string) => { 
  setTasks(
    tasks.map((task)=>
      task.id === completeID? {...task, complete: true}:{...task}
    )
  );
  setMsg("Task marked complete!")
}, [tasks]);
// Delete a task(match by ID) and update state variable -> remove from task list
const deleteTask = useCallback((delID:string) => { 
  let newTasks = tasks.filter(task => task.id !== delID)
  setTasks([...newTasks])
  setMsg("Task deleted!")
}, [tasks]);

  return (
    <View style ={{flex:1}}>
      {/* Pop up when action function complete(Msg state variable is not empty) -> pop up on bottom right of screen */}
       {msg && ( 
        <View className="absolute bottom-4 right-4 p-3 rounded-lg shadow-lg bg-green-100 border border-green-200">
          <Text className="text-black text-center font-bold">{msg}</Text>
        </View>
      )}
      <Text className="text-3xl font-bold my-4 text-center">Task Manager</Text>
      {/* Text box to input task */}
      <TextInput 
        className="h-12 bg-white rounded-lg px-4"
        placeholder='Enter new task...'
        placeholderTextColor='#6b7280'
        value={query} 
        onChangeText={setQuery}></TextInput>
        {/* Submit button to add task */}
      <TouchableOpacity 
        className={`mt-2 py-2 px-4 rounded-lg shadow-md ${!query.trim() ? 'bg-gray-400' : 'bg-blue-500'}`}
        onPress={addTask}
        disabled={!query.trim()} 
      >
        <Text className="text-white font-bold text-center text-lg">Add task</Text>
      </TouchableOpacity>
      <Text className="text-2xl font-bold">Task list: </Text>
      {/* Task list table header */}
      <View className="flex flex-row justify-between items-center p-4 border-b border-gray-300"> 
        <Text className="w-2/4 font-bold">Task Name</Text>
        <Text className="w-1/4 text-center font-bold">Status</Text>
        <Text className="w-1/4 text-center font-bold">Actions</Text>
      </View>
      {/* Map the list of tasks on to a scroll view - render each task to a taskcard component */}
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