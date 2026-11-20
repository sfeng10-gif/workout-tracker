function ProgressBar({progress,totalAmount,completedAmount}){
    return(
        <div>
         <div className='progress-bar'>
             <div className="progress-fill" 
                  style={{width: `${progress}%` }}
             ></div>
        </div>
            <p className='progress'>{completedAmount}/{totalAmount}completed</p>
        </div>       
    );
}
export default ProgressBar;