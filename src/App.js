import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'


function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

function App() {
  useEffect(() => {
    const getProfilePictureAPI = async (id) => {
    const res = await fetch(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)
    const bf = await res.arrayBuffer()
    console.log(111, arrayBufferToBase64(bf))
    return `data:image/jpeg;base64,` + arrayBufferToBase64(bf)
    // const url = `${baseUrl}/yt`
    // const data = await fetch(url, {
    //     method: 'post',
    //     body: JSON.stringify({
    //         id: username
    //     })
    // }).then(res => res.json())
} 
getProfilePictureAPI('')
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
