"use client";
import { useState, useEffect, useRef } from 'react';

const ServiceImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  
  // Only show navigation if there's more than one image
  const showNavigation = images.length > 1;
  
  // Auto-advance the carousel if there are multiple images
  useEffect(() => {
    if (!showNavigation || isHovering || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length, showNavigation, isHovering, isDragging]);
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    // Threshold for slide change - 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Dragged left - go to next slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        // Dragged right - go to previous slide
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      }
      setIsDragging(false);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };
  
  return (
    <div 
      ref={carouselRef}
      className="relative w-full overflow-hidden rounded-xl border-4 border-gray-200 shadow-2xl bg-gray-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Image container */}
      <div className="relative h-64 md:h-96 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src || image}
              alt={image.alt || `Slide ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
              draggable="false"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServiceImageCarousel;