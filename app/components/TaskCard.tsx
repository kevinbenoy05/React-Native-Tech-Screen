import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Task } from '../../types';

interface taskProps{ 
  task: Task;
  complete: (id:string) => void; //unique ID for task -> used when finding a task by id for completion/deltion
  handleDelete: (id:string) => void;
}
const TaskCard = ({task, complete, handleDelete}: taskProps) => { 
  let status = task.complete? "Complete":"Incomplete" // String to toggle for status 
  return (
    <View className='flex flex-row justify-between items-center bg-white p-4 rounded-lg mb-3 shadow'>
      {/* Strikethrough text if marked complete*/}
      <Text className={`w-2/4 ${task.complete ? 'line-through text-gray-500' : 'text-gray-800'}`}> 
       {task.desc}
      </Text>
      {/* Status text - change color based on status */}
      <Text className={`w-1/4 text-center font-semibold ${task.complete ? 'text-green-600' : 'text-yellow-600'}`}> 
        {status}
      </Text>     
      <View className='w-1/4 flex-row justify-center space-x-4'>
      {/* Mark Complete Button  - Callback function using ID*/}
        <TouchableOpacity onPress={() => complete(task.id)} className="bg-green-500 p-2 rounded-full"> 
          <Icon name="check" size={20} color="white" />
        </TouchableOpacity>
        {/* Delete Button */}
        <TouchableOpacity onPress={() => handleDelete(task.id)} className="bg-red-500 p-2 rounded-full"> 
          <Icon name="trash-2" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TaskCard