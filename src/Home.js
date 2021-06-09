import Blogs from './Blogs'
import useFetch from './useFetch'

const Home = () =>{

    const {item: blogs,isPending,error} = useFetch("http://localhost:8000/blogs/")

    return(
        <div className="home">
        {error && <h1>error message</h1>}
        {(isPending) && <h1>Loading...</h1> }
        {blogs &&  <Blogs blogs ={blogs} title = "All blogs" />}
        </div>
    );
}

export default Home;