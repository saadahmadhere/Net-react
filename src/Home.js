import {useState} from 'react'
import Blogs from './Blogs'

const Home = () =>{

    const [item,setItem] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]
    )

    return(
        <div className="home">
          <Blogs item = {item}/>
        </div>
    );
}

export default Home;