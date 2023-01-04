import './App.css';
import { useReducer } from 'react';
import CourseReducer from './CourseReducer';

function App() {
  const initialState = {
    REACT: false,
    NODEJS: false,
    MONGODB: false
  }
  const [state, dispatch] = useReducer(CourseReducer, initialState)
  const handelReact = () => {
    dispatch("react")
  }
  const handelNodeJS = () => {
    dispatch("nodeJS")
  }
  const handelMongoDB = () => {
    dispatch("mongoDB")
  }
  return (
    <div className="App">
      <p>
        learning {
          state.REACT ? "React" :
            state.NODEJS ? "Node.JS" :
              state.MONGODB ? "MongoDB" :
                "not started"
        }
      </p>
      <div>
        <button onClick={handelReact}>
          React
        </button>
        <button onClick={handelNodeJS}>
          NodeJs
        </button>
        <button onClick={handelMongoDB}>
          MongoDB
        </button>
      </div>
    </div>
  );
}

export default App;
