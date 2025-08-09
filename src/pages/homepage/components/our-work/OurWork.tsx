import "./our-work.css";
import { useState } from "react";

const imageUrls = [
  "/assets/work-done/DSCN2029-800h.jpg",
  "/assets/work-done/pic+04-600h.jpg",
  "/assets/work-done/IMG_1027-800h.jpg",
  "/assets/work-done/thumbnail-800h.jpg",
  "/assets/work-done/IMG_1048-600h.jpg",
  "/assets/work-done/Outfall+Replacement+Project+2-5-09+007-800h.jpg",
  "/assets/work-done/thumbnail+(2)-800h.jpg",
  "/assets/work-done/thumbnail+(3)-600h.jpg",
  "/assets/work-done/thumbnail+(4)-800h.jpg",
  "/assets/work-done/P1010142+(Medium)-800h.jpg",
  "/assets/work-done/P1010143+(Medium)-600h.jpg",
];

export default function OurWork() {
  const [url, setUrl] = useState("");

  return (
    <div className="ourwork-container">
      <h1>Our Work</h1>
      <hr className="divider"></hr>
      <div className="gallery">
        {imageUrls.map((url, i) => {
          return (
            <img
              src={url}
              alt={`work done img ${i + 1}`}
              key={i}
              onClick={() => setUrl(url)}
            />
          );
        })}
      </div>

      {url && (
        <div className="image-overlay" onClick={() => setUrl("")}>
          <img
            className="zoomed-img"
            src={url}
            alt="Zoomed work"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
