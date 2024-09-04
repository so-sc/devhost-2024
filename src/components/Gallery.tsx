"use client";
import Image from "next/image";
import React from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
const photos = [
  { src: "/gallery/1.jpg", width: 1800, height: 900 },
  { src: "/gallery/2.jpg", width: 1600, height: 900 },
  // { src: "/gallery/3.jpg", width: 900, height: 900 },
  { src: "/gallery/4.jpg", width: 1200, height: 900 },
  { src: "/gallery/5.jpg", width: 1400, height: 900 },
  { src: "/gallery/6.jpg", width: 1200, height: 900 },
  { src: "/gallery/7.jpg", width: 1100, height: 900 },
  { src: "/gallery/8.jpg", width: 1600, height: 900 },
  { src: "/gallery/9.jpg", width: 1000, height: 900 },
  { src: "/gallery/10.jpg", width: 1200, height: 900 },
  { src: "/gallery/11.jpg", width: 1800, height: 900 },
  { src: "/gallery/12.jpg", width: 1600, height: 900 },
];

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="object-cover rounded-lg"
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="flex justify-start items-center w-full flex-col">
      <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-16 pb-10">
        Gallery
      </h1>
      <div className="max-w-6xl mb-20 w-full h-full border-white/10 border rounded-xl p-8 event_card bg-background">
        <RowsPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
        />
      </div>
    </div>
  );
}
