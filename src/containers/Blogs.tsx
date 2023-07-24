import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button , Wrapper } from '../components';
import { PROJECTS_INITIALLY } from '../utils/config';
import BlogCard from '../components/BlogCard';
import { sortBlogsByYear } from '../utils/helper';
import { blogsSection } from '../utils/portfolio';
import { getSectionAnimation, projectVariants } from '../animations';

const Blogs = () => {
  const { blogs, title } = blogsSection;
  const [showMore, setShowMore] = useState(false);
  const topProjects = blogs.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? blogs : topProjects;

  return (
    <Wrapper id="projects" animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>
      <div className="grid grid-cols-auto-250 xs:grid-cols-auto-300 gap-6 place-items-center">
        {sortBlogsByYear(visibleProjects).map((blog, i) => {
          if (i < PROJECTS_INITIALLY) {
            return (
              <BlogCard
                {...blog}
                key={blog.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
              />
            );
          }

          return (
            <BlogCard
              {...blog}
              key={blog.id}
              variants={projectVariants}
              initial="hidden"
              animate="show"
              custom={i - PROJECTS_INITIALLY}
            />
          );
        })}
      </div>
      {blogs.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Blogs;
