import {useState} from 'react'
import Blogs from './Blogs'

const Home = () =>{

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]
    )

    const deleteHandler =(id) =>{
        const newBlogs = blogs.filter((blog)=>(id !== blog.id))
        return(
            setBlogs(newBlogs)
        );
    }

    return(
        <div className="home">
          <Blogs blogs ={blogs} title = "All blogs" deleteHandler = {deleteHandler}/>
        </div>
    );
}

export default Home;