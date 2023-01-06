// the useState is used to make any value reactive and has two parameters
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs] = useState([
        {title: 'My New Website', body: 'lorem ipsum...', author: 'yoshi', id: 1},
        {title: 'Welcome Party!', body: 'lorem ipsum...', author: 'mario', id: 2},
        {title: 'Web Dev top tips', body: 'lorem ipsum...', author: 'marco', id: 3},
    ]);
    // const handleClick = () => {
    //     // You make use of the useState() hook to be able to make any value reactive.
    //     setName('luigi'); 
    //     setAge(30);    
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }


    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
     );
}
 
export default Home;