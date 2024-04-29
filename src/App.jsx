import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  let [password, setpassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGJHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numallowed) str += "0123456789";
    if (charallowed) str += '!@#$%^&*()~<>?:"|}{';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numallowed, charallowed]);
 
    useEffect(()=>{
      passwordGenerator();
    },[length,numallowed,charallowed])
    
  

  return (
    <>
      <div>
        <h1>Password Generator</h1>

        <input 
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        />
        <button
        >copy</button>
      </div>

      <div>
        <input type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <strong>length:{length}</strong>
        
        <input type="checkbox"
        defaultChecked={numallowed}
        onChange={()=>{
          setnumallowed((prev)=>!prev);
        }}
        />
        <strong>Number</strong>
        <input type="checkbox"
        defaultChecked={charallowed}
        onChange={()=>{
          setcharallowed((prev)=>!prev)
        }}
        />
        <strong>Character</strong>
      </div>
    </>
  );
}

export default App;
