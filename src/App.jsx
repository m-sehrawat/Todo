import './App.css';
import { Todo } from './components/Todo';
import { Navbar } from './components/navbar';
import { Signup } from './components/signup';

function App() {
    return (
        <>
            <Navbar />

            {/* <Signup /> */}

            <div className='mainBox'>
                <Todo />
            </div>
        </>
    );
}

export default App;
