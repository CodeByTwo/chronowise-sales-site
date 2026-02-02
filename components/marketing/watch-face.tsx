"use client";

import { useEffect, useRef, useState } from "react";

export function WatchFace() {
  const [date, setDate] = useState<number | null>(null);
  const secondHandRef = useRef<SVGGElement>(null);
  const minuteHandRef = useRef<SVGGElement>(null);
  const hourHandRef = useRef<SVGGElement>(null);

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
        fractionalSecondDigits: 3,
      });

      // Parse London time
      const [hours, minutes, secondsWithMs] = londonString.split(":");
      const [seconds, ms] = secondsWithMs.split(".");

      return {
        hours: parseInt(hours) % 12,
        minutes: parseInt(minutes),
        seconds: parseInt(seconds),
        milliseconds: parseInt(ms || "0"),
        date: new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" })).getDate(),
      };
    };

    // Set initial date
    const initialTime = getLondonTime();
    setDate(initialTime.date);

    // Animation loop using requestAnimationFrame for smooth 60fps
    let animationId: number;

    const animate = () => {
      const now = new Date();

      // Get precise time components for London
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      // London is UTC+0 in winter, UTC+1 in summer (BST)
      const londonOffset = new Date().toLocaleString("en-GB", { timeZone: "Europe/London", hour: "numeric", hour12: false });
      const utcHour = now.getUTCHours();
      const londonHour = parseInt(londonOffset);
      const isDST = londonHour !== utcHour;
      const londonTime = new Date(utc + (isDST ? 3600000 : 0));

      const hours = londonTime.getUTCHours() % 12;
      const minutes = londonTime.getUTCMinutes();
      const seconds = londonTime.getUTCSeconds();
      const milliseconds = londonTime.getUTCMilliseconds();

      // Calculate smooth rotation angles
      const secondAngle = (seconds + milliseconds / 1000) * 6;
      const minuteAngle = (minutes + (seconds + milliseconds / 1000) / 60) * 6;
      const hourAngle = (hours + (minutes + seconds / 60) / 60) * 30;

      // Update hand rotations directly via refs
      if (secondHandRef.current) {
        secondHandRef.current.style.transform = `rotate(${secondAngle}deg)`;
      }
      if (minuteHandRef.current) {
        minuteHandRef.current.style.transform = `rotate(${minuteAngle}deg)`;
      }
      if (hourHandRef.current) {
        hourHandRef.current.style.transform = `rotate(${hourAngle}deg)`;
      }

      // Update date once per minute
      const currentDate = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" })).getDate();
      if (currentDate !== date) {
        setDate(currentDate);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [date]);

  if (date === null) return null;

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
        <circle
          cx="200"
          cy="200"
          r="195"
          strokeWidth="1"
          className="text-white"
        />
        <circle
          cx="200"
          cy="200"
          r="185"
          strokeWidth="0.5"
          className="text-white"
        />

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
          {date}
        </text>

        {/* Center circle */}
        <circle
          cx="200"
          cy="200"
          r="8"
          strokeWidth="1.5"
          className="text-white"
        />
        <circle
          cx="200"
          cy="200"
          r="3"
          className="fill-white"
          stroke="none"
        />

        {/* Hour hand */}
        <g
          ref={hourHandRef}
          style={{ transformOrigin: "200px 200px" }}
        >
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="110"
            strokeWidth="4"
            className="text-white"
          />
          <polygon
            points="200,110 195,130 205,130"
            className="fill-white"
            stroke="none"
          />
        </g>

        {/* Minute hand */}
        <g
          ref={minuteHandRef}
          style={{ transformOrigin: "200px 200px" }}
        >
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="60"
            strokeWidth="2.5"
            className="text-white"
          />
          <polygon
            points="200,60 196,80 204,80"
            className="fill-white"
            stroke="none"
          />
        </g>

        {/* Second hand - smooth sweep */}
        <g
          ref={secondHandRef}
          style={{ transformOrigin: "200px 200px" }}
        >
          <line
            x1="200"
            y1="230"
            x2="200"
            y2="50"
            strokeWidth="1"
            className="text-gold"
          />
          <circle
            cx="200"
            cy="220"
            r="4"
            className="fill-gold"
            stroke="none"
          />
        </g>
      </svg>
    </div>
  );
}
