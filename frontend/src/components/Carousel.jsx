import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

// ... (images remain same, skipping imports for brevity in tool call if not strictly required to be replaced, but here I am replacing the top block so I must include them or use a smaller range. I will use smaller range to be safe)

/* 
   I will split this into two edits: 
   1. Add import and const navigate 
   2. Add onClick to div
*/

// Importing Images
import slider1 from '../assets/avanti-slider1.png';
import slider2 from '../assets/avanti-slider2.png';
import slider3 from '../assets/avanti-slider3.png';
import slider4 from '../assets/avanti-slider4.png';
import slider5 from '../assets/avanti-slider5.png';
import slider6 from '../assets/avanti-slider6.png';
import slider7 from '../assets/avanti-slider7.png';
import slider8 from '../assets/avanti-slider8.png';

const slides = [
    {
        id: 1,
        image: slider1,
        title: 'Ultimate Data Security',
        subtitle: 'Protect your sensitive information with our high-performance shredders.'
    },
    {
        id: 2,
        image: slider2,
        title: 'Heavy-Duty Efficiency',
        subtitle: 'Engineered for continuous operation and maximum durability.'
    },
    {
        id: 3,
        image: slider3,
        title: 'Smart Office Automation',
        subtitle: 'Streamline your workflow with our advanced document solutions.'
    },
    {
        id: 4,
        image: slider4,
        title: 'Precision Laminating',
        subtitle: 'Preserve your important documents with professional-grade lamination.'
    },
    {
        id: 5,
        image: slider5,
        title: 'Secure & Sustainable',
        subtitle: 'Eco-friendly shredding technology for the modern responsible office.'
    },
    {
        id: 6,
        image: slider6,
        title: 'Innovative Technology',
        subtitle: 'Cutting-edge designs that deliver reliability and quiet performance.'
    },
    {
        id: 7,
        image: slider7,
        title: 'Complete Office Solutions',
        subtitle: 'From shredders to binders, we have everything your workspace needs.'
    },
    {
        id: 8,
        image: slider8,
        title: 'Trusted by Professionals',
        subtitle: 'The preferred choice for corporate and industrial document destruction.'
    }
];

const Carousel = () => {
    const { settings } = useData();
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    // Use settings images if available, otherwise fallback to local defaults (just 3 for demo if no settings)
    const displaySlides = (settings?.carouselImages && settings.carouselImages.length > 0)
        ? settings.carouselImages.map((url, index) => ({
            id: index,
            image: url,
            title: '', // Title could be added to settings later if needed
            subtitle: ''
        }))
        : slides; // Fallback to hardcoded slides

    const nextSlide = () => {
        setCurrent(current === displaySlides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? displaySlides.length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current, displaySlides.length]);

    return (
        <div className="carousel">
            {displaySlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={index === current ? 'slide active' : 'slide'}
                    onClick={() => navigate('/products')}
                    style={{ cursor: 'pointer' }}
                >
                    {index === current && (
                        <>
                            <img src={slide.image} alt={slide.title || 'Slide'} className="slide-image" />
                            <div className="slide-content">
                                <div className="container">
                                    {slide.title && <h2>{slide.title}</h2>}
                                    {slide.subtitle && <p>{slide.subtitle}</p>}
                                    {/* <button className="btn carousel-btn">Explore Range</button> */}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}

            <button className="arrow left" onClick={prevSlide}>
                <ChevronLeft size={32} />
            </button>
            <button className="arrow right" onClick={nextSlide}>
                <ChevronRight size={32} />
            </button>

            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={index === current ? 'dot active' : 'dot'}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
