import React from "react";

const Introduction = ({handleSubmit, handleChange, formData}) => {
  return (
    <div>
      <div className="">
        <div>
          <p>Introduction of your course </p>
          <div>
            <p className="capitalize font-sans text-md">Title</p>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Description</p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Instructor</p>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              placeholder="Instructor"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Price</p>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Duration</p>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Category</p>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Level</p>
            <input
              type="text"
              name="level"
              value={formData.level}
              onChange={handleChange}
              placeholder="Level"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Tags</p>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Tags"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Thumbnail Poster</p>
            <input
              type="text"
              name="thumbnailPoster"
              value={formData.thumbnailPoster}
              onChange={handleChange}
              placeholder="Thumbnail Poster"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
          <div>
            <p className="capitalize font-sans text-md">Demo Video URL</p>
            <input
              type="text"
              name="demoVideoUrl"
              value={formData.demoVideoUrl}
              onChange={handleChange}
              placeholder="Demo Video URL"
              className="w-[50%]  outline-none px-3 py-2 border-[1px] bg-transparent  rounded-md"
            />
          </div>
       
        </div>
       
      </div>
    </div>
  );
};

export default Introduction;
