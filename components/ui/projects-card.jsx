import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./button";

export default function ProjectsCard({ text, tech, images, demoLink, githubLink }) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="py-8">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-screen-xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images?.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-2">
                    <img 
                      src={image.src} 
                      alt={image.alt || "Project screenshot"} 
                      className="object-cover rounded-lg" 
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="text-gray-500 grid grid-cols-1 gap-3 p-2">
        <p className="text-gray-500 dark:text-gray-400">{text}</p>
        <small className="text-gray-500 dark:text-gray-400">{tech}</small>
        <div className="space-x-4">
          {demoLink && (
            <Button onClick={() => window.open(demoLink, "_blank")}>Live Demo</Button>
          )}
          {githubLink && (
            <Button variant="link" onClick={() => window.open(githubLink, "_blank")}>GitHub Code</Button>
          )}
        </div>
      </div>
    </div>
  );
}
