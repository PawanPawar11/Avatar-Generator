import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "remixicon/fonts/remixicon.css";

const data = [
  {
    label: "Illustration",
    value: "illustration",
    url: "https://api.dicebear.com/7.x/avataaars/svg?seed=",
  },

  {
    label: "Cartoon",
    value: "cartoon",
    url: "https://api.dicebear.com/7.x/adventurer/svg?seed=",
  },

  {
    label: "Sketchy",
    value: "sketchy",
    url: "https://api.dicebear.com/7.x/croodles/svg?seed=",
  },

  {
    label: "Robots",
    value: "robots",
    url: "https://api.dicebear.com/7.x/bottts/svg?seed=",
  },

  {
    label: "Art",
    value: "art",
    url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=",
  },

  {
    label: "Male",
    value: "male",
    url: "https://randomuser.me/api/portraits/men/",
  },

  {
    label: "Female",
    value: "female",
    url: "https://randomuser.me/api/portraits/women/",
  },
];

const App = () => {
  const [option, setOption] = useState("male");
  const [src, setSrc] = useState("");

  const onOptionChange = (e) => {
    setOption(e.target.value);
  };

  const generateAvatar = () => {
    let selected = data.find((item) => item.value === option);
    if (!selected) return;

    let randomNum = Date.now();
    let randomNumForPerson = Math.floor(Math.random() * 100);

    const newUrl =
      option === "male" || option === "female"
        ? `${selected.url}${randomNumForPerson}.jpg`
        : `${selected.url}${randomNum}`;

    setSrc(newUrl);
  };

  const downloadImage = () => {
    if (!src) return;

    const link = document.createElement("a");
    link.href = src;
    link.download = "avatar.png";
    link.click();
    link.remove();
  };

  const copyImageUrl = () => {
    if (!src) return;

    try {
      navigator.clipboard.writeText(src);
      toast.success("Image URL Copied!");
    } catch (error) {
      toast.error("Failed to Copy Image URL!");
      console.log("Error while Copying Image URL", error);
    }
  };

  useEffect(() => {
    generateAvatar();
  }, [option]);

  return (
    <div className="text-white min-h-screen bg-linear-to-br from-purple-700 via-indigo-700 to-pink-700 flex items-center justify-center">
      <div className="border border-purple-900/90 flex flex-col items-center gap-6 w-full lg:w-2xl h-96 bg-white-500/30 rounded-xl shadow-2xl backdrop-blur-xl p-4">
        <img
          src={src || "/avatar.png"}
          alt="avatar png"
          className="w-24 rounded-full"
        />

        <div className="text-center">
          <p className="text-4xl font-bold tracking-tighter">
            Avatar Generator
          </p>
          <p>Generate Male, Female, Cartoon, or Realistic avatars.</p>
        </div>

        <select
          className="bg-purple-700 p-1 py-1 px-2 rounded-md outline-none"
          value={option}
          onChange={onOptionChange}
        >
          {data.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>

        <div className="bg-purple-700 p-1 py-1 px-2 rounded-md">{src}</div>

        <div className="flex gap-6 w-full">
          <button
            className="flex-1 bg-yellow-700 rounded-md p-1"
            onClick={generateAvatar}
          >
            <i className="ri-arrow-right-up-line m-1"></i>
            Change
          </button>
          <button
            className="flex-1 bg-cyan-700 rounded-md p-1"
            onClick={downloadImage}
          >
            <i className="ri-arrow-down-line m-1"></i>
            Download
          </button>
          <button
            className="flex-1 bg-slate-700 rounded-md p-1"
            onClick={copyImageUrl}
          >
            <i className="ri-file-copy-line m-1"></i>
            Copy
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
