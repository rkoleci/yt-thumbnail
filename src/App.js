import { useState, useRef } from 'react';
import './App.css';

const appName = 'SnapYT'

function App() {
  const inputRef = useRef()
  const [id, setId] = useState('')

  const onSearch = () => {
    const value = inputRef.current.value
    const[str, id] = value.split('v=')
    console.log(str)
    setId(id)
  }

  const display = `${id ? 'flex': 'hidden'}`

  async function downloadImage(
    id,
    quality
  ) {
    fetch(`https://ifsc-code.in/downloadThumbnail?id=${id}=${quality}`);
  }
  

  return (    
    <div className="app">
      <div className='p-4 flex justify-between items-center w-full border-b'>
        <p className='font-bold color-tahiti-500'>{appName}</p>
        <p>English</p>
      </div>
      <div className='flex justify-between items-center m-[10%]'>
        <p className=''>Download youtube and vimeo thumbnail images of all quality for free. This application let you download thumbnails of all quality. Just paste the URL of the thumbnail video in the below input and click Get Thumbnail Image</p>
      </div>
      <input ref={inputRef} className='m-4 w-full h-[40px] border-1' placeholder='Paste link..' />
      <button type="button" className='text-center' onClick={onSearch}>Get Thumbnail Images</button>
      <div className={`flex-col justify-center items-center ${display}`}>
        <button onClick={() => downloadImage(id, 'SD')}>
          download
        </button>
        <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} width={1280} height={720} alt="" className='mb-4'/>
        <button onClick={() => downloadImage(id, 'HQ')}>
          download
        </button>
        <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} width={640} height={480} alt="" className='mb-4'/>
        <button onClick={() => downloadImage(id, 'MQ')}>
          download
        </button>
        <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} width={320} height={180} alt="" className='mb-4'/>
        <button onClick={() => downloadImage(id, 'def')}>
          download
        </button>
        <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} width={120} height={90} alt="" className='mb-4'/>
      </div>
    </div>
  );
}

export default App;
