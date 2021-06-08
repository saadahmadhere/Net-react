import {useState, useEffect} from 'react'
import Blogs from './Blogs'

const Home = () =>{

    const [blogs,setBlogs] = useState(null)
    const[isPending, setIsPending] = useState(true);

    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:8000/blogs/")
        .then(respose =>{
            return respose.json();
        }).then((data) =>{
            // console.log(data)
            setBlogs(data)
            setIsPending(false)
        }).catch((err)=>{
            console.log(err)
        })
      },1000)   //the timeout is set only for understanding concept. Don't forget to reemove it.
    },[])

    return(
        <div className="home">
        {(isPending) && <h1>Loading...</h1> }
        {blogs &&  <Blogs blogs ={blogs} title = "All blogs" />}
        </div>
    );
}

export default Home;