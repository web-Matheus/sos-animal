import React, {useState} from 'react';

import './App.css';

import Home from './components/home/home'
import About from './components/form/about';
import ExtraInfor from './components/form/extraInfor';
function App() {

  const [page,setPage] = useState(0)

  const pagesComp = [<Home/>,<About/>, <ExtraInfor/>]
  return (
    <div className="home">
        <header>
            <i></i>
            <h1 className='title'>Sos animal</h1>
        </header>
        <section className='body'>
          {pagesComp[page]}
        </section>
   
    <footer>
      <button
      disabled={page === 0}
      onClick={() => {
        setPage((currPage) => currPage - 1)
      }}
      >Anterior
      </button>
      <button
      disabled={page === pagesComp.length -1}
      onClick={() => {
        setPage((currPage) => currPage + 1)
      }}
      >Próximo
      </button>
    </footer>
    </div>
  );
}

export default App;
