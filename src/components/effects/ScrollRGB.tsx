import { useEffect } from "react";
import { useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

export function ScrollRGB() {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Transform velocity to a smaller range for the effect
    // e.g., velocity of 1000 -> 2px offset (Subtle)
    const velocity = useTransform(smoothVelocity, [0, 1000], [0, 2], {
        clamp: false
    });

    useEffect(() => {
        const unsubscribe = velocity.on("change", (latest) => {
            // Update CSS variable on body
            document.body.style.setProperty("--scroll-velocity", `${latest}px`);
        });
        return () => unsubscribe();
    }, [velocity]);

    return null;
}
