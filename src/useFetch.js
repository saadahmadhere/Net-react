import {useState, useEffect} from 'react'

const useFetch = (url) => {
    
    const[item,setItem] = useState(null)
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
   
    useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
          .then(respose =>{
              if(!respose.ok){
                  throw Error; 
              }
              return respose.json();
          }).then((data) =>{
              setItem(data)
              setIsPending(false)
              setError(null)
          }).catch((err)=>{
              console.log(err.message)
              setError(true)
              setIsPending(false)
          })
        },1000)   //the timeout is set only for understanding concept. Don't forget to remove it.
      },[url])
    
      return {item,isPending,error}
}

export default useFetch;