import {Link} from 'react-router-dom'

const Error = () =>{
    return(
        <div className="error">
            <h1>Page not found</h1>
            <Link to = '/'>Click here to go back to homepage</Link>
        </div>
    )
}

export default Error;