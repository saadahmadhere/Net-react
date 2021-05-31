import {useState} from 'react'

const Home = () =>{

    const [item,setItem] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]
    )

    return(
        <div className="home">
           {item.map((blog) =>(
               <div className="blog-preview">
                   <h2>{blog.title}</h2>
                   <p> Written by: {blog.author}</p>
                   <hr />
               </div>
               
           ))}
        </div>
    );
}

export default Home;