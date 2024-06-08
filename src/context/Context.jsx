import { createContext } from "react";
import run from "../config/gemini";
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) =>{

    const [input,setinput] = useState('');
    const [recent,setrecent] = useState('');
    const [previousprompt,setpreviousprompt] = useState([]);
    const [showresult,setshowresult] = useState(false);
    const [loading,setloading] = useState(false);
    const[resultdata,setresultdata] = useState('');


    const onSent = async (prompt)=>{
        setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecent(input)
     const response =  await run(input)
     setresultdata(response)
     setloading(false)
     setinput('');
    }


    const contextValue = {
 previousprompt,
 setpreviousprompt,
 onSent,
 setrecent,
 recent,
 showresult,
 loading,
 resultdata,
 input,
 setinput

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
