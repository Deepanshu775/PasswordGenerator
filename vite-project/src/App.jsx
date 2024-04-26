import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(true);
  const [password, setPassword] = useState('');
  
  const passwordref=useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!~@#$%^&*{}";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, number, character]);

  const CopyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);
  

  useEffect(() => {
    generatePassword();
  }, [length, number, character, generatePassword]);
 

  
  return (
    <>
      <div className='HEADING'>Password Generator</div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <input
            type='checkbox'
            defaultChecked={number}
            id='numberinput'
            onChange={() => { setNumber((prev) => !prev); }}
          />
          <label htmlFor='numberinput'>Numbers</label>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="mb-2 navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <label htmlFor="customRange1" className="form-label">Length:{length}</label>
                <input type="range" className="form-range" id="customRange1" min={6} max={50} value={length} onChange={(e) => { setLength(parseInt(e.target.value)); }} />
              </li>

              <li className="nav-item">
                <input
                  type='checkbox'
                  defaultChecked={character}
                  id='characterinput'
                  onChange={() => { setCharacter((prev) => !prev); }}
                />
                <label htmlFor='characterinput'>Character</label>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="input"
                placeholder="Password"
                aria-label="Search"
                value={password}
                readOnly
                ref={passwordref}
              />
              <button onClick={CopyPasswordToClipboard} className="btn btn-outline-success" type="submit">Copy</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
