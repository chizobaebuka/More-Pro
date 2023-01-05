// the useState is used to make any value reactive and has two parameters
import { useState } from "react";

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);


    const handleClick = () => {
        // You make use of the useState() hook to be able to make any value reactive.
        setName('luigi'); 
        setAge(30);    
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} is {age} years old </p>
            <button onClick={handleClick}>Click Here</button>
            
            {/* onclick you make use of the event to show what event is being carried out on clicking */}
            {/* A case where by you are trying to pass in an argument and also display it you have to create another function within the onclick so it can be shown */}
            {/* <button onClick={(e) => {
                handleClickAgain('mario', e)
            }}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;