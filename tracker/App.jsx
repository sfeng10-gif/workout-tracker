import { useEffect, useState } from 'react'
import './App.css'
import ExerciseCard from './ExerciseCard';
import ProgressBar from './ProgressBar';
import ExerciseForm from './ExerciseForm';
function App(){
    const [exercise,setExercise]=useState("")
    const [exercises,setExercises]=useState(JSON.parse(localStorage.getItem("exercises")) || [])
    const [sets,setSets]=useState("")
    const [reps,setReps]=useState("")
    const [weight,setWeight]=useState("")
    const [error,setError]=useState("")
    const totalAmount=exercises.length
    const completedAmount=exercises.filter((item) =>item.completed==true).length
    const progress=totalAmount==0? 0:(completedAmount/totalAmount)*100
    useEffect(() => {
        localStorage.setItem("exercises", JSON.stringify(exercises))
    }, [exercises])
    function addExercise(){
    if (exercise.trim()=="" || Number(sets)<=0 || Number(reps)<=0 || Number(weight)<=0){
         setError("Please enter valid exercise information.")
        
    }
    else{      
        setError("")
        setExercises([...exercises,
            { 
            name:exercise.trim(),
            sets:sets.trim(),
            reps:reps.trim(),
            weight:weight.trim(),
            id:crypto.randomUUID(),
            completed:false
        }])
        setExercise('')
        setSets("")
        setReps("")
        setWeight("")
    }
}
    function deleteExercise(id){
        setExercises(
            exercises.filter((item) =>item.id!==id)
        )
    }
    function  toggleExercise(id) {
        setExercises(
            exercises.map((item) => {
              return  item.id==id ? ({...item,completed:!item.completed}) : (item)
            }
        ) 
    ) 
}
    function clear(){
        setExercises([])
       
    }
    return(
        <div>
            <ExerciseForm
            exercise={exercise}
            setExercise={setExercise}
            setSets={setSets}
            setReps={setReps}
            setWeight={setWeight}
            onClear={clear}
            addExercise={addExercise}
            sets={sets}
            reps={reps}
            weight={weight}
            error={error}
            />
            {exercises.length==0 ? (
                <p>No tasks are added yet</p>
            ) : ( 
                exercises.map((item) =>(
                <ExerciseCard 
                    key={item.id} 
                    item={item}  
                    onToggle={toggleExercise}
                    onDelete={deleteExercise}
                    />
                )) )
        }
        <ProgressBar
            progress={progress}
            totalAmount={totalAmount}
            completedAmount={completedAmount}
        />
        </div>
    )
}

export default App