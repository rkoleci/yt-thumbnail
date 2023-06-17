import './App.css';
import { useState, useEffect } from 'react'

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

function App() {
  const [img, setImg] = useState('')

  useEffect(() => {
    const getProfilePictureAPI = async (id) => {
    const res = await fetch(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)
    const bf = await res.arrayBuffer()
    setImg(`data:image/jpeg;base64,` + arrayBufferToBase64(bf))
        // const url = `${baseUrl}/yt`
        // const data = await fetch(url, {
        //     method: 'post',
        //     body: JSON.stringify({
        //         id: username
        //     })
        // }).then(res => res.json())
    } 
  getProfilePictureAPI('rqUaaEsFW_M')
  }, [])
  return (
    <div className="App">
        <img src={img} alt="logo" width={100} height={100} />
    </div>
  );
}

export default App;
