"use client";

import { useEffect, useRef, useState } from "react";

interface LazyBackgroundImageProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
}

export function LazyBackgroundImage({
  src,
  className = "",
  style = {},
  loading = "lazy",
}: LazyBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(loading === "eager");
  const [imageSrc, setImageSrc] = useState<string | null>(
    loading === "eager" ? src : null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === "eager" || isLoaded) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Preload the image
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before the image enters viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, loading, isLoaded]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        backgroundImage: imageSrc ? `url('${imageSrc}')` : undefined,
        backgroundColor: imageSrc ? undefined : "#f0f0f0", // Placeholder color
        transition: "background-image 0.3s ease-in-out",
      }}
    />
  );
}

