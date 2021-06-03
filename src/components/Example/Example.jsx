import React,{useState,useEffect} from 'react'

export default function Example() {

const [name, setName] = useState('')

useEffect(() => {

    console.log("component Mount");

    return ()=>{
        console.log('component unMount');
        setName('')
    }

}, [])

useEffect(() => {

    console.log('component upDate');

}, [name])


    return (
        <div>
            <input
             type="text"
             value={name}
             onChange={(event)=>setName(event.target.value)} />
            
        </div>
    )
}
