import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ImageInfo = {
  src: string;
  alt: string;
};

export const PhotoGrid = () => {
  const [photos, setPhotos] = useState<ImageInfo[]>([]);

  // Load image list from the public folder (static, no API needed)
  useEffect(() => {
    // Manually list files or generate a JSON list during build.
    // For demo we hard‑code a few names.
    const list = [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
    ].map((file) => ({
      src: `/images/portfolio/${file}`,
      alt: `Model shot ${file}`,
    }));
    setPhotos(list);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
    hover: { scale: 1.05, rotate: 0.5 },
  };

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      initial="hidden"
      animate="visible"
    >
      {photos.map((photo, i) => (
        <motion.div
          key={photo.src}
          className="glass overflow-hidden"
          custom={i}
          variants={itemVariants}
          whileHover="hover"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={500}
            height={750}
            layout="responsive"
            objectFit="cover"
            className="transition-transform duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
