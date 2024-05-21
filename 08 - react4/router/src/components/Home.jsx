import { useState } from "react";
function Home() {
    const [count, setCount] = useState(0)
    
    return ( <h1 onClick={()=>{setCount(count=>count+1)}}>Home {count}</h1> );
}

export default Home;