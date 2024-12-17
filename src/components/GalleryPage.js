import React, { useState } from "react";
import "../styles/GalleryPage.css";

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "https://via.placeholder.com/800x500",
    name: "Team Innovators",
  },
  {
    id: 2,
    type: "image",
    src: "https://via.placeholder.com/800x500",
    name: "Team Pioneers",
  },
  {
    id: 3,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    name: "Hackathon Highlights",
  },
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleZoom = (item) => {
    setSelectedItem(item);
  };

  const closeZoom = () => {
    setSelectedItem(null);
  };

  return (
    <div className="gallery-page">
        <h1>Our Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div className="gallery-item" key={item.id}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.name}
                onClick={() => handleZoom(item)}
                className="gallery-thumbnail"
              />
            ) : (
              <video
                controls
                onClick={() => handleZoom(item)}
                className="gallery-thumbnail"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <a href={item.src} download className="download-btn">
              Download
            </a>
          </div>
        ))}
      </div>

      {/* Zoomed View */}
      {selectedItem && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <div className="zoom-content">
            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} alt={selectedItem.name} />
            ) : (
              <video controls>
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
