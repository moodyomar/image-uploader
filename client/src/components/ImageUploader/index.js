import React, {useEffect, useState} from 'react';
import Uploading from '../Uploading'
import Uploaded from '../Uploaded'
import axios from "axios";
import './ImageUploader.css'
import img from '../../assets/image.svg'


const ImageUploader = () => { 
  
  const [file,setFile] = useState('');
  const [isDragActive,setIsDragActive] = useState(false);
  const [uploading,setUploading] = useState(false);
  const [uploaded,setUploaded] = useState(false);
  const [imgName,setImgName] = useState('');

  useEffect(() => {
    if(!file) return
    setUploading(true);
    const data = new FormData();
    data.append("image", file);
    const postImage = async () => {
      try {
        const res = await axios.post("/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setImgName(res.data.filename);
      } catch (err) {
        console.log(err);
        console.log(err.response.data.msg);
      } finally {
        setTimeout(() => {
          setUploading(false);
          setUploaded(true);
        }, 1000);
      }
    };

    postImage();

  },[file] )

const imageUploader = (
  <div className='ImageUploader'>
<h1>Upload your image</h1>
<p>File should be Jpeg, Png,...</p>
<div className="drop-zone" onDragLeave={() => setIsDragActive(false)} onDragEnter={() => setIsDragActive(true)} >
    <img src={img} alt="" />
    {
        isDragActive ?
          <h2>Drop the image here ...</h2> :
          <h2>Drag & Drop your image here</h2>
      }
      <input type="file" name="image" accept='image/jpeg, image/png'
       onDrop={e => setFile(e.dataTransfer.files[0])} />
</div>
<h2>Or</h2>
      <button type = "button" className = "btn">Choose a file
        <input type="file" name='image' accept='images/*' onChange={e => setFile(e.target.files[0])} />
      </button>
    </div>

)

return(

<>

{uploading ? <Uploading/> : 
<>
{uploaded ? <Uploaded img={imgName} link={imgName}/> : imageUploader}
</>
}

</>

)
}

export default ImageUploader