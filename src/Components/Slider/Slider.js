import React from "react";
import "./Slider.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import reklams from "./Images";


const Slider = () => {

    const [width, setWidth]=useState(0);
    const carousel = useRef();

    useEffect(() =>{
        // console.log(carousel.current.scrollWidth , carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

    }, []);

  return (
    <div className="slider">
      <motion.div ref={carousel} className="carousel">
        <motion.div drag="x" dragConstraints={{right:0 , left: - width}} className="inner-carousel">
          {reklams.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;



// import React, { useState, useRef, useEffect } from "react";
// import "./Slider.css";
// import { motion } from "framer-motion";
// import reklams from "./Images";

// const Slider = () => {
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();
//   const [currentPosition, setCurrentPosition] = useState(0);

//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

//     // Otomatik oynatmayı başlatmak için
//     const intervalId = setInterval(() => {
//       const newPosition = currentPosition - 100; // 100px sola kaydır
//       setCurrentPosition(newPosition <= -width ? 0 : newPosition);
//     }, 2000);

//     // Komponent unmount olduğunda interval'i temizle
//     return () => clearInterval(intervalId);
//   }, [currentPosition, width]);

//   return (
//     <div className="slider">
//       <motion.div ref={carousel} className="carousel">
//         <motion.div
//           drag="x"
//           dragConstraints={{ right: 0, left: -width }}
//           className="inner-carousel"
//           style={{
//             transform: `translateX(${currentPosition}px)`,
//           }}
//         >
//           {reklams.map((image) => {
//             return (
//               <motion.div className="item" key={image}>
//                 <img src={image} alt="" />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Slider;
