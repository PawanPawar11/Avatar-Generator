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
    <div className="text-slate-100 min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
      <div className="border border-slate-700 flex flex-col items-center gap-6 w-full lg:w-2xl min-h-96 bg-slate-900/70 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-xl p-6">
        <img
          src={src || "/avatar.png"}
          alt="avatar"
          className="w-24 rounded-full ring-2 ring-slate-700"
        />

        <div className="text-center">
          <p className="text-4xl font-bold tracking-tight text-slate-100">
            Avatar Generator
          </p>
          <p className="text-slate-400">
            Generate Male, Female, Cartoon, or Artistic avatars.
          </p>
        </div>

        <select
          className="bg-slate-800 text-slate-200 p-2 rounded-md outline-none border border-slate-700 focus:ring-2 focus:ring-indigo-500"
          value={option}
          onChange={onOptionChange}
        >
          {data.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>

        <div className="bg-slate-800 text-slate-400 text-center p-2 rounded-md border border-slate-700 text-xs w-full">
          {src}
        </div>

        <div className="flex gap-4 w-full">
          <button
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 transition rounded-md p-2"
            onClick={generateAvatar}
          >
            <i className="ri-refresh-line mr-1"></i>
            Change
          </button>

          <button
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 transition rounded-md p-2"
            onClick={downloadImage}
          >
            <i className="ri-download-line mr-1"></i>
            Download
          </button>

          <button
            className="flex-1 bg-violet-600 hover:bg-violet-500 transition rounded-md p-2"
            onClick={copyImageUrl}
          >
            <i className="ri-file-copy-line mr-1"></i>
            Copy
          </button>
        </div>
      </div>

      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
