import React from "react";

interface HamburgerIconProps {
  className?: string;
}

export function HamburgerIcon({ className = "h-6 w-6" }: HamburgerIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="hamburger-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Stylized winding S-shaped path - single continuous serpentine form */}
      <path
        d="M3 6 L21 6 Q23 6 23 8 Q23 10 21 10 L3 10 Q1 10 1 12 Q1 14 3 14 L21 14 Q23 14 23 16 Q23 18 21 18 L3 18"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#hamburger-shadow)"
      />
    </svg>
  );
}

