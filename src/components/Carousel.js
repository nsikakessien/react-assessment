import React, { useState, useEffect } from 'react'


const Carousel = () => {
        const delay = 15000;
        const colors = ["#003277", "#EE6F44", "#227EFF"];
        const text = [{
          info: "Having any issues with your order?",
          button: "Contact Us"
        }, {
          info: "Having any issues with your order?",
          button: "Shop with us"
        }, {
          info: "Having any issues with your order?",
          button: "Contact Us"
        }];

        const [index, setIndex] = useState(0)
        const [idx, setIdx] = useState(0)
      



        useEffect(() => {
          
          setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === colors.length - 1 ? 0 : prevIndex + 1,
              ),
            delay
          );
          return () => {
            
          };
        }, [colors.length, index]);

        useEffect(() => {
          setTimeout(
            () =>
              setIdx((prevIdx) =>
                prevIdx === text.length - 1 ? 0 : prevIdx + 1,
              ),
            delay
          );
          return () => {
            
          };
        }, [idx, text.length]);

        
       

    

    return (
      <div className="slideshow">
          <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            { colors.map((backgroundColor, index) => (
               <div className="slide" key={index} style={{backgroundColor}}>
                  {text.map((data, idx) => {
                    return ([
                      <div key={idx}
                      className={`${index === idx ? "info" : "none"}`} >
                      <p key={idx}>{data.info}</p>
                      <a href="#" key={idx}>{data.button}</a>
                    </div>
                    ])
                    
                  })}
                
               </div>
             ))}
          </div>
          
         

      </div>
  
    )
}

export default Carousel
