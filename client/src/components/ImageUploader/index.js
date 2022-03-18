import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

import './ImageUploader.css'
import img from '../../assets/image.svg'


const ImageUploader = () => { 
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles[0]);
        fetch('/test',{method:'GET'})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

return(

<div className='ImageUploader'>
<h1>Upload your image</h1>
<p>File should be Jpeg, Png,...</p>
<div className="drop-zone" {...getRootProps()}>
    <img src={img} alt="" />
    <input {...getInputProps()} />
    {
        isDragActive ?
          <h2>Drop the image here ...</h2> :
          <h2>Drag & Drop your image here</h2>
      }
</div>
<h2>Or</h2>
      <button type = "button" className = "btn">Choose a file
        <input onChange={e => onDrop(e.target.files)} type="file" accept='images/*'/>
      </button>
    </div>

)
}

export default ImageUploader