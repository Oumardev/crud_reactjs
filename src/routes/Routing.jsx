import {Routes, Route} from 'react-router-dom';
import Post from '../Pages/Post/Post';
import Profile from "../Pages/Profile/Profile";
import Comments from "../Pages/Comments/Comments";

const Routing = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Post />}/>
            <Route exact path="/post" element={<Post />}/>
            <Route exact path="/profile" element={<Profile />}/>
            <Route exact path="/comments" element={<Comments />}/>
        </Routes>
    )
}

export default Routing;