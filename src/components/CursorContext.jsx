"use client";
import React, { useState, useEffect, createContext } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

// Crear contexto:
export const CursorContext = createContext();

// Provider:
const CursorProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const [cursor, setCursor] = useState({ size: 30, background: "#473936" });
    const [isHovering, setIsHovering] = useState(false);
    const smallViewportIsActive = useMediaQuery({
        query: "(max-width: 1200px)",
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 290, mass: 0.45 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if (!smallViewportIsActive) {
            mouseX.set(e.clientX - cursor.size / 2);
            mouseY.set(e.clientY - cursor.size / 2);
        } else {
            setCursor({ size: 0, background: "none" });
        }
    }

    useEffect(() => {
        setMounted(true);
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cursor]);

    const mouseEnterHandler = () => {
        if (!smallViewportIsActive) {
            setCursor({ size: 90, background: "#00423A" });
            setIsHovering(true);
        }
    }

    const mouseLeaveHandler = () => {
        if (!smallViewportIsActive) {
            setCursor({ size: 30, background: "#473936" });
            setIsHovering(false);
        }
    }

    return (
        <CursorContext.Provider value={{ mouseEnterHandler, mouseLeaveHandler }}>
            {mounted && !smallViewportIsActive && (
                <motion.div className='fixed z-[99] rounded-full pointer-events-none transition-all duration-300' style={{
                    left: springX,
                    top: springY,
                    width: cursor.size,
                    height: cursor.size,
                    backgroundColor: cursor.background,
                    mixBlendMode: isHovering ? "difference" : "normal",
                    transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
                }}/>
            )}
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider;
