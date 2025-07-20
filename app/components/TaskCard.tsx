import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../../types';

interface taskProps{ //Props object to pass in component
  task: Task;
  complete: (id:string) => void;
  handleDelete: (id:string) => void;
}
const TaskCard = ({task, complete, handleDelete}: taskProps) => { //Task card
  let status = task.complete? "complete":"incomplete"
  return (
    <View>
      <Text>ID: {task.id}</Text>
      <Text>DESC: {task.desc}</Text>
    
      <Text>Status: {status}</Text>
      <TouchableOpacity onPress={() =>complete(task.id)}>
        <Text>Complete Task</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() =>handleDelete(task.id)}>
        <Text>Delete Task</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskCard