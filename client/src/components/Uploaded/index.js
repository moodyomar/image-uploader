import React from 'react';
import { FcOk } from "react-icons/fc";
import './Uploaded.css'


const Uploaded = ({img,link}) => { 

link = `${window.location.hostname}/${link}`

return(

<div className='Uploaded'>

<div className="header-content">
<FcOk size={45} />
<h1>Uploaded Successfully</h1>
</div>
<img src={`./uploads/${img}`} alt={img} />
<div className="input">
<input type="text" defaultValue={link} /><button onClick={() => navigator.clipboard.writeText(link)}>Copy link</button>
</div>

</div>

)
}

export default Uploaded