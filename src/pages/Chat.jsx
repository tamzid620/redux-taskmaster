import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css' ;
import src from '../../public/images/Unknown.png' ;


const Chat = () => {

  const [crop, setCrop] = useState();
 
  return (
    <div>
    <h1 className="flex justify-center text-4xl uppercase mt-[10px] underline">Crop Photo</h1>
    <div className='bg-gray-400'>
    <ReactCrop crop={crop} onChange={c => setCrop(c)}>
      <img src={src} />
    </ReactCrop>
  </div>
  </div>
  );
};

export default Chat;
