import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I am Vinay Patil, Crafting innovative software solutions with  ReactJS,Python and other tech stacks, as a passionate programmer.
            Presently developing in C and C++ for the 
            <Link
              href="https://www.nseindia.com"
              target="_blank"
              className="text-accent"
            >National Stock Exchange's</Link> trading environment, focused on equity and commodity markets.
          </p>
          <p>
            and I’ve had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://unitylabs.ai/"
              target="_blank"
              className="text-accent"
            >
             UnityLabs
            </Link>
            .
          </p>
          <p>
            My main focus these days is learning base of computer engineering and developing projects side by side.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
