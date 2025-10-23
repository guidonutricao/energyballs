import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "hsl(var(--primary))",
  gradientBackgroundEnd = "hsl(var(--accent))",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = React.useRef<HTMLDivElement>(null);

  const [curX, setCurX] = React.useState(0);
  const [curY, setCurY] = React.useState(0);
  const [tgX, setTgX] = React.useState(0);
  const [tgY, setTgY] = React.useState(0);

  React.useEffect(() => {
    const move = () => {
      if (!interactiveRef.current) return;
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    };
    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current && interactive) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("absolute inset-0", className)}>
        <div
          className="gradients-container h-full w-full blur-lg"
          style={{
            filter: "url(#blurMe) blur(40px)",
          }}
        >
          <div
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `[transform-origin:center_center]`,
              `animate-first`,
              `opacity-100`
            )}
            style={{
              // @ts-ignore
              "--first-color": firstColor,
              "--size": size,
              "--blending-value": blendingValue,
            }}
          ></div>
          <div
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `[transform-origin:calc(50%-400px)]`,
              `animate-second`,
              `opacity-100`
            )}
            style={{
              // @ts-ignore
              "--second-color": secondColor,
              "--size": size,
              "--blending-value": blendingValue,
            }}
          ></div>
          <div
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `[transform-origin:calc(50%+400px)]`,
              `animate-third`,
              `opacity-100`
            )}
            style={{
              // @ts-ignore
              "--third-color": thirdColor,
              "--size": size,
              "--blending-value": blendingValue,
            }}
          ></div>
          <div
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `[transform-origin:calc(50%-200px)]`,
              `animate-fourth`,
              `opacity-70`
            )}
            style={{
              // @ts-ignore
              "--fourth-color": fourthColor,
              "--size": size,
              "--blending-value": blendingValue,
            }}
          ></div>
          <div
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
              `animate-fifth`,
              `opacity-100`
            )}
            style={{
              // @ts-ignore
              "--fifth-color": fifthColor,
              "--size": size,
              "--blending-value": blendingValue,
            }}
          ></div>

          {interactive && (
            <div
              ref={interactiveRef}
              className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
                `opacity-70`
              )}
              style={{
                // @ts-ignore
                "--pointer-color": pointerColor,
                "--blending-value": blendingValue,
              }}
            ></div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
