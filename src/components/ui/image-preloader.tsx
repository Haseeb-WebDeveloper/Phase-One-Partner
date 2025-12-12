"use client";

import { useEffect } from "react";

interface ImagePreloaderProps {
  images: string[];
}

export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    images.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.fetchPriority = "high";
      document.head.appendChild(link);
    });

    return () => {
      images.forEach((src) => {
        const link = document.querySelector(`link[href="${src}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, [images]);

  return null;
}

