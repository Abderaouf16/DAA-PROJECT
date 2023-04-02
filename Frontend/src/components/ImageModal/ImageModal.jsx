import React from "react";
import imageModal from "../CSS/ImageModal.css";

export default function ImageModal({ imageUrl, toggleModal }) {
  return (
    <div className="image-modal">
      <div className="image-modal-content">
        <img src={imageUrl} alt="" />
        <button onClick={toggleModal} className='bg-white text-black  my-3 rounded-lg px-6'>Close</button>
      </div>
    </div>
  );
}
