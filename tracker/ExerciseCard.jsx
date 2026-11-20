function ExerciseCard({ item,onToggle,onDelete }) {
  return (
    <div className="exercise-card">
    <input type="checkbox" checked={item.completed} onChange={()=>onToggle(item.id)} />
      <div className="exercise-info">
        <h3 className={item.completed ? "completed" : "incompleted"}>{item.name}</h3>
        <p>{item.sets} sets x {item.reps} reps · {item.weight} kg</p>
        
      </div>
        <button onClick={() =>onDelete(item.id)} className='delete-button' > 
                    Delete
        </button>
    </div>
  );
}


export default ExerciseCard;