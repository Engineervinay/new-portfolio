import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BlogType } from '../types';
import { blurImageURL } from '../utils/config';

const BlogCard = ({
  name,
  url1,
  url2,
  year,
  description,
  img,
  tags,
  ...rest
}: BlogType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url2);
        }}
        className="group bg-bg-secondary block w-full shadow-xl dark:shadow-2xl rounded-md overflow-hidden transition-all duration-200"
      >
        <div className="overflow-hidden h-[120px]">
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 py-3 space-y-1">
          <div className="flex justify-between items-center">
            <p className="text-xs capitalize font-mono">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              <a
                href={url2}
                className="block hover:text-accent duration-200"
                target="_blank"
              >
                <Icon icon="simple-icons:devto" width={30} height={30} />
              </a>
              <a
                href={url1}
                className="block hover:text-accent duration-200"
                target="_blank"
              >
                <Icon icon="simple-icons:hashnode" width={25} height={25} />
              </a>
            </div>
          </div>
          <h4 className="flex justify-between group-hover:text-accent capitalize font-medium duration-200">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
          <p className="text-xs  font-mono"> {description}</p>          
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default BlogCard;
