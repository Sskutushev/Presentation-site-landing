import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed -left-1/2 -top-1/2 z-50 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
      style={{
        background: 'radial-gradient(circle, #00E0BE, transparent 60%)',
      }}
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.5,
      }}
    />
  );
};