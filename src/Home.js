import {useState, useEffect} from 'react'
import Blogs from './Blogs'

const Home = () =>{

    const [blogs,setBlogs] = useState(null)
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:8000/blogs/")
        .then(respose =>{
            // console.log(respose)
            if(!respose.ok){
                throw Error; 
            }
            return respose.json();
        }).then((data) =>{
            // console.log(data)
            setBlogs(data)
            setIsPending(false)
            setError(null)
        }).catch((err)=>{
            console.log(err.message)
            setError(true)
            setIsPending(false)
        })
      },1000)   //the timeout is set only for understanding concept. Don't forget to reemove it.
    },[])

    return(
        <div className="home">
        {error && <h1>error message</h1>}
        {(isPending) && <h1>Loading...</h1> }
        {blogs &&  <Blogs blogs ={blogs} title = "All blogs" />}
        </div>
    );
}

export default Home;