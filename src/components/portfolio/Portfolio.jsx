import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project Title 1",
    github: "https://github.com",
    demo: "https://dribble.com/Alien-pixels",
  },
  {
    id: 2,
    image: IMG1,
    title: "Project Title 2",
    github: "https://github.com",
    demo: "https://dribble.com/Alien-pixels",
  },
  {
    id: 3,
    image: IMG1,
    title: "Project Title 3",
    github: "https://github.com",
    demo: "https://dribble.com/Alien-pixels",
  },
  {
    id: 4,
    image: IMG1,
    title: "Project Title 4",
    github: "https://github.com",
    demo: "https://dribble.com/Alien-pixels",
  },
  {
    id: 5,
    image: IMG1,
    title: "Project Title 5",
    github: "https://github.com",
    demo: "https://dribble.com/Alien-pixels",
  },
  {
    id: 6,
    image: IMG1,
    title: "Project Title 6",
    github: "https://github.com",
    demo: "https://dribble.com/Alien-pixels",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="image" />
              </div>

              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
