import { React, useState, useEffect, Children, cloneElement} from 'react';
import './Slider.css';
import './Carusel.css';

const PAGE_WIDTH = 900;

export const Carousel = ({children}) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          }
        })
      })
    )
  }, [pages]);

  return (
    <div className="main-container">
      <div className="window">
        <div className="all-items-containers">
          {children}
        </div>
      </div>
    </div>
  )
}



