"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import blogPosts from "@/data/blog-data";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string; 
  category: string;
  image: string;
  link: string;
}

export default function BlogSection() {


  return (
    <section className="py-20  -mt-12 bg-primary/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">
            The latest
          </h2>
        </div>

        {/* Carousel with External Navigation */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            {/* Left Arrow - Outside content area */}
            <CarouselPrevious className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 hover:bg-transparent hover:pr-2" />

            {/* Right Arrow - Outside content area */}
            <CarouselNext className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 hover:bg-transparent hover:pl-2" />

            <CarouselContent className="-ml-6 select-none">
              {blogPosts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-6 md:basis-1/3 "
                >
                  <div className="h-full flex flex-col md:justify-between gap-3 py-3">
                    {/* Category Label on Top */}
                    <div className="">
                      <p className="pb-3 text-2xl w-full text-center font-medium">
                        {post.category}
                      </p>

                      {/* Image Container */}
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full  object-cover aspect-video"
                        width={500}
                        height={500}
                      />

                      <h3 className="pt-3 text-center md:px-3 font-bold text-2xl  group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <div className="md:px-3 w-fit mx-auto">
                      <Link
                        href="#"
                        className="w-fit mx-auto hover:cursor-[icons/arrow.svg] inline-flex items-center gap-2 text-primary text-base hover:px-2 font-medium hover:bg-primary hover:text-background transition-all duration-300 group/link"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
