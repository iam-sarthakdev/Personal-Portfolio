import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        // Add hover listeners for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .glass-card, .project-card, .timeline-item');

        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", () => setCursorVariant("text"));
            el.addEventListener("mouseleave", () => setCursorVariant("default"));
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener("mouseenter", () => setCursorVariant("text"));
                el.removeEventListener("mouseleave", () => setCursorVariant("default"));
            });
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            border: '2px solid var(--primary-color)',
            backgroundColor: 'transparent',
            mixBlendMode: 'difference'
        },
        text: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid var(--secondary-color)',
            mixBlendMode: 'difference'
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1
        },
        text: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0
        }
    };

    return (
        <>
            <motion.div
                className="cursor-outline"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999
                }}
            />
            <motion.div
                className="cursor-dot"
                variants={dotVariants}
                animate={cursorVariant}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999
                }}
            />
        </>
    );
};

export default Cursor;
