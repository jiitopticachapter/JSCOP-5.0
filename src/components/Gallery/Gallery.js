// import React from "react";

// const Gallery = () => {
//   return (
//     <>
//      <div className="main">
//      <div className="slider">
//         <div className="gallery-slider__item">
//           <img src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280" />
//         </div>
//         <div className="gallery-slider__item">
//           <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280" />
//         </div>
//         <div className="gallery-slider__item">
//           <img src="https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1280" />
//         </div>
//       </div>

//       <div
//         className="bg"
//         style="background-image:url(https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280)"
//       />
//      </div>
//     </>
//   );
// };

// export default Gallery;
import React, { useEffect } from "react";
import "./Gallery.scss"
import { gsap } from "gsap";
const Gallery = () => {
  useEffect(() => {
    let index = 1;
    const speed = 2;
    const $slides = document.querySelectorAll(".gallery-slider__item");

    const animate = () => {
      index += 1;
      $slides.forEach((s, i) => {
        s.dataset.id = (index + i) % $slides.length;
      });

      gsap.defaults({
        duration: speed,
        ease: "power3.inOut",
      });

      gsap.to('[data-id="1"]', {
        clipPath: `-5% 0%, 15% 0%, 5% 100%, 0% 100%`,
      });

      gsap.to('[data-id="2"]', {
        clipPath: `polygon(15% 0%, 100% 0%, 100% 100%, 5% 100%)`,
        onComplete: () => {
          gsap.set('[data-id="0"]', {
            clipPath: `polygon(0% 0%, 15% 0%, 5% 100%, 0% 100%)`,
            zIndex: 0,
          });
          gsap.set('[data-id="1"]', { zIndex: 2 });
          gsap.set('[data-id="2"]', { zIndex: 1 });
          animate();
        },
      });
    };
    animate();
  });
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-slider">
          <div className="gallery-slider__item">
            <img src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280" />
          </div>
          <div className="gallery-slider__item">
            <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280" />
          </div>
          <div className="gallery-slider__item">
            <img src="https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1280" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
