import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const backgroundColor = props.backgroundColor || "#000000";
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center: [number, number] = [0, 0];
  
  const TAU: number = 2 * Math.PI;
  const rand = (n: number): number => n * Math.random();
  const fadeInOut = (t: number, m: number): number => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    resize(canvas, ctx);
    initParticles();
    draw(canvas, ctx);
  };

  const initParticles = () => {
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = rand(canvas.width);
    y = center[1] + rand(rangeY) - rangeY / 2;
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseSpeed + rand(rangeSpeed) * 300;
    speed = baseSpeed + rand(rangeSpeed);
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);

    requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = particleProps[i];
    y = particleProps[i + 1];
    vx = particleProps[i + 2];
    vy = particleProps[i + 3];
    life = particleProps[i + 4];
    ttl = particleProps[i + 5];
    speed = particleProps[i + 6];
    radius = particleProps[i + 7];
    hue = particleProps[i + 8];

    let n = noise3D(x * 0.00125, y * 0.00125, tick * 0.0005) * TAU * 2;
    vx = lerp(vx, Math.cos(n), 0.5);
    vy = lerp(vy, Math.sin(n), 0.5);
    x += vx * speed;
    y += vy * speed;
    life++;

    if (life > ttl || x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
      initParticle(i);
    }

    particleProps[i] = x;
    particleProps[i + 1] = y;
    particleProps[i + 2] = vx;
    particleProps[i + 3] = vy;
    particleProps[i + 4] = life;

    drawParticle(x, y, x + vx, y + vy, life, ttl, radius, hue, ctx);
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    let f = fadeInOut(life, ttl);
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${f})`;
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  };

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const resize = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  let tick = 0;

  useEffect(() => {
    setup();
    window.addEventListener("resize", () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas, ctx);
      }
    });
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
