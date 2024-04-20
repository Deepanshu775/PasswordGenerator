import { useState ,useCallback} from 'react'
import './App.css'

function App() {
  
  const  [length,setlength]=useState(8);
  const [number,setnumber]=useState(false);
  const[character,setcharacter]=useState(true);
  const[password,setpassword]=useState("")
  const passwordgenerator=useCallback(()=>{
    
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz"
    if(number) str+="0123456789"
    if(character) str+="!~@#$%^&*{}"
    for(int i=1;i<=Array.length();i++) {
      let char  =Math.floor(Math.random()*str.length+1)
      pass=str.charat(char)
    }
  },[length,number,character,setpassword])
  return (
    <>
    <div className='HEADING'>Password Generator</div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Number</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="mb-2 navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
             
             
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">copy</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
} 

export default App;
