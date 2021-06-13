import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import CreateBlog from './Create';
import BlogDetails from './BlogDetails'
import Error from './Error'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path = '/'> <Home /> </Route>
              <Route path = '/create'> <CreateBlog /> </Route>
              <Route path = '/blogs/:id'> <BlogDetails /></Route>
              <Route path = '*'> <Error /> </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
