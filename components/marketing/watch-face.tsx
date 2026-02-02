"use client";

import { useEffect, useState } from "react";

export function WatchFace() {
  const [time, setTime] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    date: number;
  } | null>(null);

  useEffect(() => {
    // Get London time
    const getLondonTime = () => {
      const now = new Date();
      const londonString = now.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const [hours, minutes, seconds] = londonString.split(":").map(Number);

      return {
        hours: hours % 12,
        minutes,
        seconds,
        date: new Date(
          now.toLocaleString("en-US", { timeZone: "Europe/London" })
        ).getDate(),
      };
    };

    // Set initial time
    setTime(getLondonTime());

    // Update every second (not 60fps - much lighter on mobile)
    const interval = setInterval(() => {
      setTime(getLondonTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  // Calculate rotation angles
  const secondAngle = time.seconds * 6;
  const minuteAngle = (time.minutes + time.seconds / 60) * 6;
  const hourAngle = (time.hours + time.minutes / 60) * 30;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        className="w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-[0.07]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      >
        {/* Outer case */}
        <circle cx="200" cy="200" r="195" strokeWidth="1" className="text-white" />
        <circle cx="200" cy="200" r="185" strokeWidth="0.5" className="text-white" />

        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const isMainMarker = i % 3 === 0;
          const innerRadius = isMainMarker ? 155 : 165;
          const outerRadius = 175;
          const x1 = 200 + innerRadius * Math.cos(angle);
          const y1 = 200 + innerRadius * Math.sin(angle);
          const x2 = 200 + outerRadius * Math.cos(angle);
          const y2 = 200 + outerRadius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth={isMainMarker ? 2 : 1}
              className="text-white"
            />
          );
        })}

        {/* Minute markers */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 === 0) return null;
          const angle = (i * 6 - 90) * (Math.PI / 180);
          const innerRadius = 172;
          const outerRadius = 175;
          const x1 = 200 + innerRadius * Math.cos(angle);
          const y1 = 200 + innerRadius * Math.sin(angle);
          const x2 = 200 + outerRadius * Math.cos(angle);
          const y2 = 200 + outerRadius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth={0.5}
              className="text-white"
            />
          );
        })}

        {/* Date window */}
        <rect
          x="270"
          y="188"
          width="28"
          height="24"
          strokeWidth="1"
          className="text-white"
          rx="2"
        />
        <text
          x="284"
          y="205"
          textAnchor="middle"
          fontSize="14"
          fontFamily="sans-serif"
          className="fill-white"
          stroke="none"
        >
          {time.date}
        </text>

        {/* Center circle */}
        <circle cx="200" cy="200" r="8" strokeWidth="1.5" className="text-white" />
        <circle cx="200" cy="200" r="3" className="fill-white" stroke="none" />

        {/* Hour hand */}
        <g
          style={{
            transform: `rotate(${hourAngle}deg)`,
            transformOrigin: "200px 200px",
            transition: "transform 0.5s cubic-bezier(0.4, 2.3, 0.3, 1)",
          }}
        >
          <line x1="200" y1="200" x2="200" y2="110" strokeWidth="4" className="text-white" />
          <polygon points="200,110 195,130 205,130" className="fill-white" stroke="none" />
        </g>

        {/* Minute hand */}
        <g
          style={{
            transform: `rotate(${minuteAngle}deg)`,
            transformOrigin: "200px 200px",
            transition: "transform 0.5s cubic-bezier(0.4, 2.3, 0.3, 1)",
          }}
        >
          <line x1="200" y1="200" x2="200" y2="60" strokeWidth="2.5" className="text-white" />
          <polygon points="200,60 196,80 204,80" className="fill-white" stroke="none" />
        </g>

        {/* Second hand - CSS transition for smooth sweep effect */}
        <g
          style={{
            transform: `rotate(${secondAngle}deg)`,
            transformOrigin: "200px 200px",
            transition: "transform 1s linear",
          }}
        >
          <line x1="200" y1="230" x2="200" y2="50" strokeWidth="1" className="text-gold" />
          <circle cx="200" cy="220" r="4" className="fill-gold" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
