import type { NextPage } from 'next';
import { SEO } from '../components';
import {
  About,
  Experience,
  Hero,
  Skills,
  Contact,
  Projects,
  
  Layout,
} from '../containers';
import Blogs from '../containers/Blogs';
import { seoData } from '../utils/portfolio';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <SEO {...seoData} />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs/>
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
