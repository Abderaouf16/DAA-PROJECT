import React from "react";
import imageModal from "../CSS/ImageModal.css";

export default function ImageModal({ imageUrl, toggleModal }) {
  return (
    <div className="image-modal flex">
      <div className="image-modal-content">
        <img src={imageUrl} alt="" />
        <button onClick={toggleModal} className='bg-white text-black  my-1 rounded-lg px-3'>Close</button>
      </div>
    </div>
  );
}
