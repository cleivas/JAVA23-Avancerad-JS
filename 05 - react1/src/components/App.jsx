import { ProfileCard } from "./ProfileCard.jsx"
import { PropComponent } from "./PropComponent.jsx"
export function App(){

    const user1 = {
        username: 'Clara',
        imgUrl: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FPGDGYJXM56KI5CTHHDX3DN2WQ.jpg&w=916",
        likes: ['Dogs', 'MMA', 'Churros', 'duck']
    }
    const user2 = {
        username: 'Aleksam',
        imgUrl: "ldflkjds.jpg",
        likes: ['Fotboll', 'Selma Lagerlöf', 'Churros']
    }

    return ( 
        <>
            <ProfileCard user={user1}/>
            <ProfileCard user={user2}/>
            <PropComponent prop1='ett' entill='ännu en' age={74}/>
        </>
    )
}