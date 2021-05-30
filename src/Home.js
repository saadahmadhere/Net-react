import {useState} from 'react'

const Home = () =>{

    var [greeting,setGreeting] = useState('sir')

    const clickHandler = (e) =>{
        setGreeting('mam')
    }

    return(
        <div className="home">
            <h2>Homepage</h2>
            <p>Hello {greeting}</p>
            <button onClick = {clickHandler}>Click me</button>
        </div>
    );
}

export default Home;