import { ProfilePic } from "./ProfilePic.jsx"
import { Username } from "./Username.jsx"
import { Likes } from "./Likes.jsx"

export function ProfileCard({user}){ //Destruct props object
    const {username, imgUrl, likes} = user; //Destruct user object

    return(
    <div>
        <ProfilePic imgUrl={imgUrl}/>
        <Username username={username}/>
        <Likes likes={likes}/>
    </div>)
}