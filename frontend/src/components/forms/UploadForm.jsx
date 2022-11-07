import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadGif } from "src/api/gif";
import toast from "react-hot-toast";
const UploadForm = ({ setShowModal }) => {
  const queryClient = useQueryClient();
  const [imagePreview, setImagePreview] = useState(null);
  const handlePreview = (e) => {
    const imageFileURL = URL.createObjectURL(e.target.files[0]);
    setImagePreview(imageFileURL);
  };
  const uploadGifMutation = useMutation(uploadGif, {
    onSuccess: (resp) => {
      toast.success("Gif uploaded successfully!!👌");
      setShowModal(false);
      queryClient.invalidateQueries(["gifs"]);
      console.log(resp);
    },
    onError: (err) => {
      toast.error("Something went wrong!!");
      console.log(err);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    uploadGifMutation.mutate(data);
  };
  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        {/* //!GENERAL DIV */}
        <div className="flex flex-col md:flex-row">
          {/* //! IMG DIV */}
          <div className="mt-12 flex flex-1 flex-col md:mt-0 ">
            <label htmlFor="gifImage" className="flex h-fit justify-center">
              {imagePreview ? (
                <img src={imagePreview} className="h-52 w-52 rounded-full" />
              ) : (
                <div className="h-52 w-52 rounded-full bg-gray-500"></div>
              )}
            </label>
            <h2 className="mt-5 text-center">Choose your GIF 👻</h2>
            <input
              type="file"
              name="gifImage"
              className="hidden"
              id="gifImage"
              onChange={handlePreview}
              required
            />
          </div>
          {/* //!CONTENT DIV */}
          <div style={{ flex: 2 }} className="flex flex-col px-12">
            <label htmlFor="title" className="mt-5">
              Gif title:
            </label>
            <input
              type="text"
              className="mt-2  w-full rounded-md border border-black py-1 px-3 text-xl md:text-sm"
              name="title"
              id="description"
              placeholder="Sponge bob meme...."
              required
            />
            <label htmlFor="description" className="mt-5">
              Gif description:
            </label>
            <input
              type="text"
              className="my-2  w-full rounded-md border border-black py-1 px-3 text-xl md:text-sm"
              name="description"
              id="description"
              placeholder="Sponge bob meme that's going viral...."
              required
            />{" "}
            {/* //! CHECKBOX TYPE */}
            <div>
              <h2 className="mb-1">Choose the type:</h2>
              <div className="flex w-fit flex-col text-2xl md:text-sm">
                <label htmlFor="general" className="flex">
                  <input
                    type="checkbox"
                    name="gifType"
                    value="general"
                    id="general"
                    checked
                  />
                  <p>General</p>
                </label>
                <label htmlFor="Cartoons" className="flex">
                  <input
                    type="checkbox"
                    name="gifType"
                    value="cartoons"
                    id="cartoons"
                  />
                  <p>Cartoons</p>
                </label>
                <label htmlFor="entertainment" className="flex">
                  <input
                    type="checkbox"
                    name="gifType"
                    value="entertainment"
                    id="entertainment"
                  />
                  <p>Entertainment</p>
                </label>
                <label htmlFor="reactions" className="flex">
                  <input
                    type="checkbox"
                    name="gifType"
                    value="reactions"
                    id="reactions"
                  />
                  <p>Reactions</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-5 right-5 flex items-center rounded-md bg-green-300 px-3 py-2 text-white"
          type="submit"
        >
          <span className="mr-2">📤</span>
          <span>Upload</span>
        </button>
      </form>
    </>
  );
};

export default UploadForm;
