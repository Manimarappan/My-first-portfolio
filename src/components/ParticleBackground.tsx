import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 150;
    const connectionDistance = 100;
    const colorParticle = 'rgba(0, 168, 255, 0.6)';
    const colorLine = 'rgba(0, 168, 255, 0.08)';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1 + 1, // 1px to 2px
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth easing of mouse coordinates for subtle lag/parallax effect
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const w = canvas.width;
      const h = canvas.height;

      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Normal drift speed
        p.baseX += p.vx;
        p.baseY += p.vy;

        // Bounce off edges
        if (p.baseX < 0 || p.baseX > w) p.vx *= -1;
        if (p.baseY < 0 || p.baseY > h) p.vy *= -1;

        // Keep inside bounds
        p.baseX = Math.max(0, Math.min(w, p.baseX));
        p.baseY = Math.max(0, Math.min(h, p.baseY));

        // Parallax offset relative to mouse position
        // Center-oriented offset calculation
        const dx = mouse.x - w / 2;
        const dy = mouse.y - h / 2;
        
        // Push particles subtly (parallax factor based on particle size for depth)
        const parallaxFactor = p.size * 0.015;
        p.x = p.baseX + dx * parallaxFactor;
        p.y = p.baseY + dy * parallaxFactor;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = colorParticle;
        ctx.fill();
      }

      // Draw Connection Lines (Double loop optimization)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = p1.x - p2.x;
          const distDy = p1.y - p2.y;
          const distSq = distDx * distDx + distDy * distDy;

          // within connectionDistance (100px squared is 10000)
          if (distSq < connectionDistance * connectionDistance) {
            const dist = Math.sqrt(distSq);
            // Fade line based on distance
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(0, 168, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
    />
  );
}
