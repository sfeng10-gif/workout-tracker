function ExerciseForm({error,exercise,setExercise,setSets,setReps,setWeight,onClear,addExercise,sets,reps,weight}){
        return(
        <div>
            <h1>Workout Tracker</h1>
            <div className='form'>               
            <input
                value={exercise}
                className='exercise-name'
                placeholder='name of exercise'
                onChange={(event) => {setExercise(event.target.value)}}
            />
            <input
                type="number"
                placeholder='Sets'
                value={sets}
                onChange={(event)=>setSets(event.target.value)}
            />
            <input 
                type="number"
                placeholder='reps'
                value={reps}
                onChange={(event)=>setReps(event.target.value)}
            /> 
            <input
                type="number"
                placeholder='weight'
                value={weight}
                onChange={(event)=>setWeight(event.target.value)}            
            />          
            <button onClick={()=>onClear()} className='clear-button'>Clear All</button>           
            <button onClick={addExercise} className='add-button'>Add Exercise</button>
            </div>
            {error && <p className="error">{error}</p>}  
        </div>          
        )
}
export default ExerciseForm;