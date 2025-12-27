import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Check if device supports touch
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();

        // Don't render cursor on touch devices
        if (isTouchDevice) return;

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        // Add hover listeners for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .glass-card, [role="button"]');

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [isTouchDevice]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

    return (
        <>
            {/* Smooth outline circle */}
            <motion.div
                animate={{
                    x: mousePosition.x - (isHovering ? 18 : 12),
                    y: mousePosition.y - (isHovering ? 18 : 12),
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid var(--primary-color)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    boxShadow: isHovering ? '0 0 20px rgba(0, 243, 255, 0.4)' : '0 0 10px rgba(0, 243, 255, 0.2)'
                }}
            />

            {/* Small dot that follows instantly */}
            <motion.div
                animate={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3,
                    opacity: isHovering ? 0.5 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 35
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    boxShadow: '0 0 8px var(--primary-color)'
                }}
            />
        </>
    );
};

export default Cursor;
