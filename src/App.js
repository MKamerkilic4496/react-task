import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import React from 'react';

function App() {
  const[tasks,setTasks]=useState([])
  const createTask=(title,taskDesc)=>{
   const createdTasks=[
    ...tasks,{
      id:Math.round(Math.random()*999999),
      title:title,
      taskDesc:taskDesc
    }
   ];
   setTasks(createdTasks);
}
const deleteTaskById=(id)=>{
 const afterDeletingTask=tasks.filter((task)=>{
      return task.id!==id;
    })
    setTasks(afterDeletingTask);
}
const editTaskByIdsx=(id,updatedTitle,updatedTaskDesc)=>{
 const updatedTasks=tasks.map((task)=>{
     if(task.id===id){
      return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
     }
     return task;
    })
    setTasks(updatedTasks);
}

  return (
    <div className="App">
     <TaskCreate onCreate={createTask}/>
     <h1> Missions</h1>
     <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdated={editTaskByIdsx}/>
    </div>
  );
}

export default App;
// onCreate bir propsdur.TaskCreate fonksiyonunda {} şeklinde fonksiyon başına yazarız.
// title ve taskDesc ile başlık ve açıklamayı gönderdik.Bunları array'e atamak için ilk başta bir değişkene ihtiyacımız var ve bu değişkeni update edecek olan bir fonksiyona ihtiyacımız var.
// bu yüzden useState hookunu kullanmamız gerekiyor.Başlangıçta useState hooksunun parantezine boş bir array atarız.
// spread ... operatörü var olan eski taskları alıyor ve buraya kopyalıyor.title ve taskDesc'e ek olarak id elemanını verdik.Dolayısıyla bu yeni bir array oldu.Eski array ile ilgisi kalmadı.
// Eğer push metodunu kullanmış olsaydık yeni array oluşturmayıp sadece eskinin üstüne ekleme yapacaktı.
