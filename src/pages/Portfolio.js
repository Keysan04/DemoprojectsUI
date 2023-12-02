import React from "react";
import kisan from "../assets/kisan.png";
import himal from "../assets/Himal.jpg";
const Portfolio = () => {
  return (
    <div>
      <body>
        <input type="checkbox" id="darkMode" />
        <div class="wrapper">
          <label for="darkMode" class="dark-mode-toggle">
            <i class="fa-solid fa-circle-half-stroke"></i>
          </label>

          <header>
            <div class="container flex header">
              <div class="flex logo">
                <div>Kishan</div>
                <div class="line">Soft. Engineer</div>
              </div>

              <div class="menu">
                <ul class="flex navigatioin">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <section class="container hero-section" id="home">
            <div class="grid hero">
              <div class="left flex">
                <div>
                  Hi i'm <span class="name"> Kishan Thapa </span>
                </div>

                <div class="tag">Soft. Engineer</div>
                <p>I love coding and teach others what i know</p>

                <div>
                  <a href="./assets/portfolio-website.pdf" download="">
                    <button>
                      Download CV <i class="fa-solid fa-download"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div class="right flex">
                {/* <img src={kisan} alt="my pic" /> */}
              </div>
            </div>
          </section>

          <section class="flex banner container">
            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <div>
                <span>IT</span>
                <p>Graduate</p>
              </div>
            </div>

            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <div>
                <span>5+ Projects</span>
                <p>Completed</p>
              </div>
            </div>

            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <div>
                <span>1 year</span>
                <p>Experience</p>
              </div>
            </div>
          </section>

          <section class="skills container flex" id="skills">
            <div>
              <i class="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>
            <div>
              <i class="fa-brands fa-css3-alt"></i>
              <span>CSS</span>
            </div>
            <div>
              <i class="fa-brands fa-github"></i>
              <span>Github</span>
            </div>
            <div>
              <i class="fa-brands fa-figma"></i>
              <span>Figma</span>
            </div>
          </section>

          <section class="projects container" id="projects">
            <h2 class="title">
              <span>My Recent Work</span>
            </h2>
            <div class="grid project-container">
              <div class="project-card">
                <div class="top">
                  <img src={kisan} alt="portfolio" />
                </div>
                <div class="bottom container">
                  <h3>Personal portfolio web site</h3>
                  <p>April 2023</p>
                  <a href="http...to your repo" target="_blank">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="http.... to the live site" target="_blank">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>

              <div class="project-card">
                <div class="top">
                  <img src={himal} alt="portfolio" />
                </div>
                <div class="bottom container">
                  <h3>Personal portfolio web site</h3>
                  <p>April 2023</p>
                  <a href="http...to your repo" target="_blank">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="http.... to the live site" target="_blank">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>

              <div class="project-card">
                <div class="top">
                  <img src={himal} alt="portfolio" />
                </div>
                <div class="bottom container">
                  <h3>Personal portfolio web site</h3>
                  <p>April 2023</p>
                  <a href="http...to your repo" target="_blank">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="http.... to the live site" target="_blank">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>

              <div class="project-card">
                <div class="top">
                  <img src={kisan} alt="portfolio" />
                </div>
                <div class="bottom container">
                  <h3>Personal portfolio web site</h3>
                  <p>April 2023</p>
                  <a href="http...to your repo" target="_blank">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="http.... to the live site" target="_blank">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section class="about" id="about">
            <h2 class="title">
              <span>About Me</span>
            </h2>
            <div class="container flex about-content">
              <div class="myImg flex">
                <img src="./assets/Kishan.png" alt="my another pic" />
              </div>
              <div class="my-bio">
                <h2>Kishan Thapa</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem dolore ratione deleniti, ipsa asperiores quisquam
                  perferendis vero adipisci impedit debitis accusamus sint qui
                  eos fuga quidem mollitia inventore velit iure.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  repellat praesentium libero? Sint exercitationem corrupti nemo
                  qui, veniam doloribus ad quisquam architecto illum omnis
                  consectetur sit, iusto aut! Qui, illum.
                </p>

                <p>Sydney, Australia</p>

                <div>
                  <div class="tag">Interest</div>
                  <div class="flex">
                    <span>Coding</span>
                    <span>Footbal</span>
                    <span>Movie</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="container contact" id="contact">
            <h2 class="title">
              <span> Get Intouch </span>
            </h2>

            <div class="social flex">
              <a
                href="https://www.linkedin.com/in/Kishan-Thapa/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>

              <a href="">
                <i class="fa-brands fa-square-github"></i>
              </a>

              <a href="">
                <i class="fa-brands fa-square-youtube"></i>
              </a>
              <a href="tel:0413705873">
                <i class="fa-solid fa-mobile"></i>
              </a>
            </div>
            <h3>OR</h3>

            <a href="mailto:myemail@gmail.com">
              <div class="email-section flex">
                <div class="email flex">
                  <span>Myemail@email.com</span>
                  <div class="send flex">
                    <i class="fa-solid fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </a>
          </section>

          <footer class="footer">
            <div class="container">
              <div class="top flex">
                <div class="links">
                  <h3>Links</h3>

                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Skills</a>
                    </li>
                    <li>
                      <a href="">Projects</a>
                    </li>
                    <li>
                      <a href="">Contacts</a>
                    </li>
                  </ul>
                </div>
                <div class="socials">
                  <h3>Social Links</h3>

                  <ul>
                    <li>
                      <a href="">LinkedIn</a>
                    </li>
                    <li>
                      <a href="">Facebook</a>
                    </li>
                    <li>
                      <a href="">Github</a>
                    </li>
                    <li>
                      <a href="">Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              &copy; all right reserved. Made buy me with 👹
            </div>
          </footer>

          <a href="#home">
            <div class="go-up flex">
              <i class="fa-solid fa-angle-up"></i>
            </div>
          </a>
        </div>
      </body>
    </div>
  );
};

export default Portfolio;
