import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import Result from "./Result.jsx";
import User from "./User.jsx";
import Timer from "./Timer.jsx";
import { users } from "../utils/users.js";
import Dog from "./Dog.jsx";

export function App(){
    const status = 'result';

    return ( 
        <>
            <Dog/>
            <Timer/>
            <main>
                {status === 'loading' && <Loading/>}
                {status === 'error' && <Error/>}
                {status === 'result' && <Result/>}
            </main>
            {users.map( ({name, id}) => <User name={name} key={id}/> )}
        </>
    )
}