import React from "react";

const UploadForm = () => {
  return (
    <>
      <form action="" className="w-full">
        {/* //!GENERAL DIV */}
        <div className="flex ">
          {/* //! IMG DIV */}
          <div className="flex flex-1 flex-col  ">
            <label htmlFor="gif" className="flex h-fit justify-center">
              <div className="h-52 w-52 rounded-full bg-gray-500"></div>
            </label>
            <h2 className="mt-5 text-center">Choose your GIF 👻</h2>
            <input type="file" name="gif" className="hidden" id="gif" />
          </div>
          {/* //!CONTENT DIV */}
          <div style={{ flex: 2 }} className="flex flex-col px-12">
            <label htmlFor="title" className="mt-5">
              Gif title:
            </label>
            <input
              type="text"
              className="mt-2  w-full rounded-md border border-black py-1 px-3 text-sm"
              name="title"
              id="description"
              placeholder="Sponge bob meme...."
            />
            <label htmlFor="description" className="mt-5">
              Gif description:
            </label>
            <input
              type="text"
              className="my-2  w-full rounded-md border border-black py-1 px-3 text-sm"
              name="description"
              id="description"
              placeholder="Sponge bob meme that's going viral...."
            />{" "}
            {/* //! CHECKBOX TYPE */}
            <div>
              <h2 className="mb-1">Choose the type:</h2>
              <div className="flex w-fit flex-col text-sm">
                <label htmlFor="general" className="flex">
                  <input
                    type="checkbox"
                    name="gifType"
                    value="general"
                    id="general"
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
      </form>
    </>
  );
};

export default UploadForm;
