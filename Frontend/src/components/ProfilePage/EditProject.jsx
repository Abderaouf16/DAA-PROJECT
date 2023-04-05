import React from "react";

import React from "react";
import home1 from "../CSS/Projects1.css";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ProjectDetails(props) {
  const {
    togglePopup,
    projectName,
    setProjectName,
    description,
    setDescription,
    selectedProjectId,
  } = props;
  console.log(selectedProjectId);
  const [projectDetails, setProjectDetails] = useState(null);

  return (
    <div className="popup  ">
      <div className="popup-iner flex  flex-col  ">
        <div className=" flex justify-end">
          <FontAwesomeIcon
            className="  text-xl   "
            icon={faTimes}
            onClick={togglePopup}
          />
        </div>

        <main className=" abdou123    w-full  ">
          <form action="" className="   ">
            <h2 className="text text-lg p-3"> Project name</h2>
            <div className="">
              <input
                required
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                type="text"
                className="bg-white my-2 p-2 text-black w-10/12 ml-4  rounded-md "
              />
            </div>
            <h2 className="text text-lg p-3">description</h2>
            <div className="">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="bg-white  my-2 text-black  w-10/12 p-2 ml-4   rounded-md"
              />
            </div>
            <h2 className="text text-lg p-3">Upload Photos</h2>
            <div className="">
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                type="file"
                name="fileToUpload"
                id="fileToUpload"
                className=" p-2 rounded-md  ml-4 text-sm w-10/12 "
                required
              />
            </div>
            <div className=" flex  justify-evenly mt-6">
              <div className="   border-[1px] ">
                <button onClick={togglePopup}> cancel</button>
              </div>
              <div className="    border-white   border-[1px] ">
                <button type="submit">Add project </button>
                {/* {error && (
        <p className="text-red-500 font-bold p-3 text-sm">{error.msg}</p>
      )} */}
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
