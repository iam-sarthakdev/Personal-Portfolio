import React, { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile device for performance optimization
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    // Disable particles on mobile for better performance
    if (isMobile) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false, zIndex: -1 },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 30, // Reduced from 120 for much better performance
                interactivity: {
                    events: {
                        onClick: {
                            enable: false, // Disabled for performance
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        grab: {
                            distance: 150, // Reduced distance
                            duration: 0.3
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#00f3ff",
                    },
                    links: {
                        color: "#bc13fe",
                        distance: 120, // Reduced from 150
                        enable: true,
                        opacity: 0.2, // Reduced opacity
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5, // Reduced from 1
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200, // Increased area = fewer particles
                        },
                        value: 12, // Reduced from 20
                    },
                    opacity: {
                        value: 0.25,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: false,
            }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                willChange: 'auto' // Prevent GPU memory issues
            }}
        />
    );
};

export default ParticleBackground;
