import React, { useEffect, useState, useRef, useCallback } from 'react';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const animationRef = useRef(null);
    const outlinePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Check if device supports touch
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();

        if (isTouchDevice) return;

        // Use requestAnimationFrame for smooth cursor outline animation
        const animateOutline = () => {
            const targetX = mousePosition.x;
            const targetY = mousePosition.y;

            // Smooth interpolation (lerp)
            outlinePosition.current.x += (targetX - outlinePosition.current.x) * 0.15;
            outlinePosition.current.y += (targetY - outlinePosition.current.y) * 0.15;

            if (outlineRef.current) {
                const size = isHovering ? 36 : 24;
                outlineRef.current.style.transform = `translate(${outlinePosition.current.x - size / 2}px, ${outlinePosition.current.y - size / 2}px)`;
            }

            animationRef.current = requestAnimationFrame(animateOutline);
        };

        animationRef.current = requestAnimationFrame(animateOutline);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isTouchDevice, mousePosition, isHovering]);

    useEffect(() => {
        if (isTouchDevice) return;

        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            // Update dot position directly (no animation delay needed)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
            }
        };

        const mouseLeave = () => setIsVisible(false);
        const mouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", mouseMove, { passive: true });
        document.addEventListener("mouseleave", mouseLeave);
        document.addEventListener("mouseenter", mouseEnter);

        // Add hover listeners for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .glass-card, [role="button"]');

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter, { passive: true });
            el.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseleave", mouseLeave);
            document.removeEventListener("mouseenter", mouseEnter);
            interactiveElements.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [isTouchDevice]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

    const baseStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease'
    };

    return (
        <>
            {/* Smooth outline circle - using CSS transforms */}
            <div
                ref={outlineRef}
                style={{
                    ...baseStyles,
                    width: isHovering ? '36px' : '24px',
                    height: isHovering ? '36px' : '24px',
                    borderRadius: '50%',
                    border: '2px solid var(--primary-color)',
                    boxShadow: isHovering ? '0 0 15px rgba(0, 243, 255, 0.3)' : '0 0 8px rgba(0, 243, 255, 0.15)',
                    transition: 'width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease',
                    willChange: 'transform'
                }}
            />

            {/* Small dot that follows instantly */}
            <div
                ref={dotRef}
                style={{
                    ...baseStyles,
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '50%',
                    boxShadow: '0 0 6px var(--primary-color)',
                    opacity: isVisible ? (isHovering ? 0.5 : 1) : 0,
                    willChange: 'transform'
                }}
            />
        </>
    );
};

export default Cursor;
