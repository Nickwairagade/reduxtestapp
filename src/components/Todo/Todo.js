import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {createTodo,fetchTodo,deleteTodo} from '../../reducers/todoReducer'
import {logout} from '../../reducers/authReducer'
import './Todo.css';

export default function Todo() {
    const [mytodo,setTodo] = useState("")
    const dispatch = useDispatch()
    const todos =  useSelector(state=> state.todos)
    const addTodo = ()=>{
     dispatch(createTodo({todo:mytodo}))
    }
    useEffect(()=>{
     dispatch(fetchTodo())
    },[])
    return (
        <div className='container welcome-page'>
             <div className='title'>
                <h1>WELCOME PAGE</h1>
             </div>
             
             <button className="btn btn-danger" onClick={()=>dispatch(logout()) }>Logout</button>       
        </div>
    )
}
