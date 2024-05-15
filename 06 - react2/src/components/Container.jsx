import { useState } from "react";
import ColorBtn from "./ColorBtn.jsx";

function Container() {
    const [cssClass, setCssClass] = useState('');
    return ( 
        <div className={cssClass}>
            <h1>Click to change color</h1>
            <ColorBtn setCssClass={setCssClass} color='skyblue'/>
            <ColorBtn setCssClass={setCssClass} color='violet'/>
            <ColorBtn setCssClass={setCssClass} color='lightgreen'/>
        </div>
     );
}

export default Container;