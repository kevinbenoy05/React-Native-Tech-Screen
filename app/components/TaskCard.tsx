import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../../types';

interface taskProps{ //Props object to pass in component
  task: Task;
  complete: (id:string) => void;
  handleDelete: (id:string) => void;
}
const TaskCard = ({task, complete, handleDelete}: taskProps) => { //Task card
  let status = task.complete? "Complete":"Incomplete"
  return (
    <View className='flex flex-row justify-between items-center bg-white p-4 rounded-lg mb-2'>
      <Text className={task.complete?'line-through': ''}>{task.desc}</Text>
      <Text>{status}</Text>
      <View className='flex-col space-y-2'>
        <TouchableOpacity onPress={() => complete(task.id)} className="bg-green-500 py-1 px-2 rounded">
          <Text className="text-white text-sm text-center">Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(task.id)} className="bg-red-500 py-1 px-2 rounded">
          <Text className="text-white text-sm text-center">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TaskCard