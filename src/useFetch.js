import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const[item,setItem] = useState(null)
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
   
    useEffect(()=>{
        const abortCont = new AbortController();
        
        setTimeout(()=>{
          fetch(url, {signal: abortCont.signal})
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
              if(err.name === 'AbortError'){
                  console.log('abort error')
              }else{
              setError(true)
              setIsPending(false)
            }
          })
        },1000)   //the timeout is set only for understanding concept. Don't forget to remove it.
        
        return () => abortCont.abort();
    },[url])
    
      return {item,isPending,error}
}

export default useFetch;