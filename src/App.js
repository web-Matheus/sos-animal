import React from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './components/home/home'
import Form from './components/form/form';
import Feed from './components/feed/feed';
function App() {

  return (
    <div className="container">
       <Router>
        <nav>
         --
        </nav>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/feed' element={<Feed/>}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
