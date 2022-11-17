import { useDispatch, useSelector } from "react-redux";
import { toggleCompleted } from "redux/tasksSlice";
import { getTasks } from "redux/selectors";


const App = () => {
  const value = useSelector(getTasks);
  const dispatch = useDispatch();
    
  
  return (
    <div>
      <ol>
        {value.map(item=>{
           return ( 
             <li key={item.id}> 
               <button type="button" onClick={()=>dispatch(toggleCompleted(item.id))}>{item.text}</button> 
               {item.completed && <span>   done</span>} 
             </li> 
           ) 
         })} 
      </ol>
    </div>
  );
};

export default App;
