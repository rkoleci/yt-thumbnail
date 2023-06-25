import { useState, useRef } from "react";
import { useScreenshot } from "usescreenshot-react";
import { useEffect } from "react";

const appName = "SnapYT";

function App() {
  const inputRef = useRef();
  const [id, setId] = useState({ value: undefined });
  const [loading, setLoading] = useState(false);
  const { image, takeScreenshot } = useScreenshot();
  const ref = useRef(null);
  console.log(loading)

  useEffect(() => {
    if (image) window.location.href = image;
  }, [image]);

  const onKeyDown = (event) => {
    if (event.key !== "Enter") return;
    onSearch();
  };

  const onSearch = () => {
    setLoading(true);
    const value = inputRef.current.value;
    const [str, id] = value.split("v=");
    console.log(str);
    setId({
      value: id,
    });
  };

  const onImgLoad = () => {
    setLoading(false);
  };

  const { value } = id;
  const display = `${value ? "flex" : "hidden"}`;

  const downloadImage = () => {
    if (!ref.current) {
      return;
    }
    takeScreenshot(ref.current, {
      backgroundColor: null,
      logging: false,
    }).catch(console.log);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">{appName}</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">EN</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4">
        <section className="flex justify-center mb-6">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Copy URL from youtube video</li>
            <li className="step step-primary">Paste it in </li>
            <li className="step">Click Download</li>
          </ul>
        </section>
        <section className="w-full lg:w-[50%] lg:ml-[25%] mb-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Paste link.."
            className="input input-bordered input-warning w-full mb-4"
            onKeyDown={onKeyDown}
          />
          <button className="btn w-full mb-6" onClick={onSearch}>
            Get Thumbnail Images
            {/* <DownloadIcon /> */}
          </button>

          <div className={`flex-col justify-center items-center ${display}`}>
            <img
              src={
                id?.value &&
                `https://img.youtube.com/vi/${value}/maxresdefault.jpg`
              }
              width={1280}
              height={720}
              alt=""
              onLoad={onImgLoad}
            />
            <div onClick={() => downloadImage(value, "MQ")} className="badge badge-secondary mb-4 underline">download 1280x720</div>
            <img
              src={
                id?.value &&
                `https://img.youtube.com/vi/${value}/maxresdefault.jpg`
              }
              width={640}
              height={480}
              alt=""
            />
            <div onClick={() => downloadImage(value, "HQ")} className="badge badge-secondary mb-4 underline">download 640x480</div>
            <img
              src={
                id?.value &&
                `https://img.youtube.com/vi/${value}/maxresdefault.jpg`
              }
              width={320}
              height={180}
              alt=""
            />
            <div onClick={() => downloadImage(value, "MQ")} className="badge badge-secondary mb-4 underline">download 320x180</div>
            <img
              src={
                id?.value &&
                `https://img.youtube.com/vi/${value}/maxresdefault.jpg`
              }
              width={120}
              height={90}
              alt=""
            />
            <div onClick={() => downloadImage(value, "def")} className="badge badge-secondary mb-4 underline">download 120x90</div>
          </div>
        </section>
        <div className="collapse collapse-arrow bg-base-200 mb-1">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
          What is the use of this {appName} website?
          </div>
          <div className="collapse-content">
            <p>People use this YouTube thumbnail downloader website for getting thumbnail from any youtube videos. That can be used in presentation, animation work or many other activities.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How to use this YouTube thumbnail downloader website?
          </div>
          <div className="collapse-content">
            <p>I have shared some step by step guide at the top of this website in which i have guided you how you can use this YouTube downloader website. It's quite easy first step is you just copy any YouTube link whom thumbnail you want. Paste it in the box and hit Get Thumbnail button.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Is it legal to download YouTube thumbnails?
          </div>
          <div className="collapse-content">
            <p>Of course it's 100% legal you can download any YouTube videos thumbnails but as you know thumbnail and video are copyrighted product you should take author permissions 1st in order to reuse that.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
