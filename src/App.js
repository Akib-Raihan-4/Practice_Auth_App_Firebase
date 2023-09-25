import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import {db} from './config/firebase'
import {getDocs} from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    const getMovieList = async() =>{
      const data = await getDocs()
       
    }
  })
  
  return (
    <div className="flex items-center h-screen justify-center">
      <Auth/>
    </div>
  );
}

export default App;
