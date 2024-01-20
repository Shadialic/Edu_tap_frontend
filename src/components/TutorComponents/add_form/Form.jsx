import React, { useState } from "react";
// import { UserCircleIcon, PhotographIcon } from "@heroicons/react/solid";
import form_img from "../../../../public/images/tutor/Add files-bro.png";
function Form() {
  const [payment, setPayment] = useState("free");
  const [level, setLevel] = useState("Biginner");
  const [Category, setCategory] = useState("Editing");

  return (
    <div className="flex">
      <div className="w-2/5 justify-end ">
        <img src={form_img} alt="" />
      </div>
      <div className="p-6 w-3/5">
        <form className="p-5">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-prompt font-semibold leading-7 text-violet-700">
                Course Deatails
              </h2>
              <p className="mt-1 text-base leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium leading-6 text-black">
                    Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-lightBlue-950 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter Course Title"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-black">
                    Payment
                  </label>
                  <div className="mt-2">
                    <select
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-lightBlue-950 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="free">Free</option>
                      <option value="price">Price</option>
                    </select>
                  </div>
                </div>

                {payment === "price" && (
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-black"
                    >
                      Price
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-lightBlue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                )}
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-black">
                    Level
                  </label>
                  <div className="mt-2">
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-lightBlue-950 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-black">
                    Level
                  </label>
                  <div className="mt-2">
                    <select
                      value={Category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-lightBlue-950 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="Editing">Editing</option>
                      <option value="VedieoGraphy">Vedieo Graphy</option>
                      <option value="PhotoGraphy">Photo Graphy</option>
                      <option value="ProductPhotoGraphy">
                        Product Photo Graphy
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-black"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-lightBlue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset "
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a about a course.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-black"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      {/* <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    /> */}
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white bg-red-700 py-2 px-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-violet-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
