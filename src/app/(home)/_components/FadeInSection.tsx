// components/FadeInSection.tsx
'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function FadeInSection({
    children,
    delay = 0.2,
    duration = 0.7,
    yOffset = 50,
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
}) {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ duration, delay }}
            variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {children}
        </motion.section>
    );
}
