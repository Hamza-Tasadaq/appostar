import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Toggle scroll-to-top button visibility on scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300); // Show button after 300px scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            {showScrollTop && (
                <Button
                    color="primary"
                    onClick={scrollToTop}
                    className='btn-icon scroll-to-top'
                >
                    <i className="ri-arrow-up-line"></i>
                </Button>
            )
            }
        </>
    )
}

export default ScrollToTop