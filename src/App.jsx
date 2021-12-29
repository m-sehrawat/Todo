import './App.css';
import { Todo } from './components/Todo';
import { Navbar } from './components/navbar';
import { Signup } from './components/signup';

function App() {
    return (
        <>
            <Navbar />

            <div className='mainBox'>
                <Todo />
            </div>
        </>
    );
}

export default App;
