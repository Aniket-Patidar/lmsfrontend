import React, { useEffect, useState } from "react";

const Modules = ({ formData, setFormData }) => {
  const [modules, setModules] = useState([
    {
      title: "title",
      description: "description",
      videos: [
        {
          title: "Video title",
          description: "video description",
          duration: 0,
          videoUrl: "/uploads/lesson4.mp4",
        },
      ],
    },
  ]);

  useEffect(() => {
    setModules([...formData.modules, ...modules]);
    console.log(formData.modules);
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedModules = [...modules];
    updatedModules[index][name] = value;
    setModules(updatedModules);
  };

  const handleChangeVideo = (e, moduleIndex, videoIndex) => {
    const { name, value } = e.target;
    const updatedModules = [...modules];
    updatedModules[moduleIndex].videos[videoIndex][name] = value;
    setModules(updatedModules);
  };

  const handleAddVideo = (moduleIndex) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].videos.push({
      title: "",
      description: "",
      duration: "",
      videoUrl: "",
    });
    setModules(updatedModules);
  };

  const handleAddModule = () => {
    setModules([
      ...modules,
      {
        title: "",
        description: "",
        videos: [
          {
            title: "",
            description: "",
            duration: "",
            videoUrl: "",
          },
        ],
      },
    ]);
  };

  const handleSubmit = () => {
    setFormData({ ...formData, modules });
    alert("submit");
    console.log(formData);
  };

  




  return (
    <div className="mt-3">
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex}>
          <div className="my-[15px]">
            <p className="capitalize font-sans text-md">
              Module {moduleIndex + 1}
            </p>
            <div className="my-[15px]">
              <p className="capitalize font-sans text-md">Title</p>
              <input
                className="w-[50%] outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
                type="text"
                name="title"
                value={module.title}
                onChange={(e) => handleChange(e, moduleIndex)}
                placeholder="Module Title"
              />
            </div>
            <div className="my-[15px]">
              <p className="capitalize font-sans text-md">Description</p>
              <input
                className="w-[50%] outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
                type="text"
                name="description"
                value={module.description}
                onChange={(e) => handleChange(e, moduleIndex)}
                placeholder="Module Description"
              />
            </div>

            {module.videos.map((video, videoIndex) => (
              <div key={videoIndex}>
                <p className="capitalize font-sans text-md">
                  Sub-module {videoIndex + 1}
                </p>
                <div className="my-[15px]">
                  <p className="capitalize font-sans text-md">
                    Sub-module Title
                  </p>
                  <input
                    className="w-[50%] outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
                    type="text"
                    name="title"
                    value={video.title}
                    onChange={(e) =>
                      handleChangeVideo(e, moduleIndex, videoIndex)
                    }
                    placeholder="Video Title"
                  />
                </div>

                <div className="my-[15px]">
                  <p className="capitalize font-sans text-md">
                    Sub-module Description
                  </p>
                  <input
                    className="w-[50%] outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
                    type="text"
                    name="description"
                    value={video.description}
                    onChange={(e) =>
                      handleChangeVideo(e, moduleIndex, videoIndex)
                    }
                    placeholder="Video Description"
                  />
                </div>

                <div className="my-[15px]">
                  <p className="capitalize font-sans text-md">
                    Sub-module videoUrl
                  </p>
                  <input
                    className="w-[50%] outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
                    type="text"
                    name="videoUrl"
                    value={video.videoUrl}
                    onChange={(e) =>
                      handleChangeVideo(e, moduleIndex, videoIndex)
                    }
                    placeholder="Video videoUrl"
                  />
                </div>
                <div className="my-[15px]">
                  <p className="capitalize font-sans text-md">
                    Sub-module duration
                  </p>
                  <input
                    className="w-[50%] outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
                    type="text"
                    name="duration"
                    value={video.duration}
                    onChange={(e) =>
                      handleChangeVideo(e, moduleIndex, videoIndex)
                    }
                    placeholder="Video duration"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="border px-2 py-1 rounded-md"
              onClick={() => handleAddVideo(moduleIndex)}
            >
              + Sub module
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="border px-2 py-1 rounded-md mr-2"
        onClick={handleAddModule}
      >
        Add Module
      </button>
      <button
        type="button"
        className="border px-2 py-1 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Modules;
