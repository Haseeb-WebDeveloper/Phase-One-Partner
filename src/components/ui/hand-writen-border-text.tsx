"use client";

interface HandWrittenTitleProps {
  title?: string;
  className?: string;
}

export default function HandWrittenTitle({ title, className }: HandWrittenTitleProps) {
  return (
    <span className={`relative inline-block mx-2 ${className}`}>
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)'
        }}
      >
        <path
          d="M 15 25 Q 60 15, 105 25 Q 110 30, 105 35 Q 60 45, 15 35 Q 10 30, 15 25 Z"
          fill="none"
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
          style={{
            strokeDasharray: '300',
            strokeDashoffset: '300',
            animation: 'drawPath 2s ease-in-out 0.5s forwards'
          }}
        />
      </svg>
      <span className="relative z-10 px-2">
        {title}
      </span>
    </span>
  );
}

