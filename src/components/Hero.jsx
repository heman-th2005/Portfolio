import "./Hero.css";
import { GithubIcon, LinkedinIcon, ArrowIcon, PinIcon } from "./Icons";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-glow hero-glow-1" aria-hidden="true" />
            <div className="hero-glow hero-glow-2" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />

            <div className="hero-content">

                <span className="hero-tag">
                    <i className="pulse" aria-hidden="true" />
                    AVAILABLE FOR OPPORTUNITIES
                </span>

                <h1>Hi, I'm <span>Hemanth R.</span></h1>

                <h2>
                    Python Backend & Full-Stack Developer
                </h2>

                <p>
                    I build scalable backend applications and
                    AI-powered solutions. Passionate about Python,
                    full-stack development and machine learning.
                </p>

                <div className="hero-buttons">

                    <a href="#projects" className="btn btn-primary">
                        View My Work
                        <ArrowIcon />
                    </a>

                    <a
                        href="https://github.com/heman-th2005"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost"
                    >
                        <GithubIcon />
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/hemanth-r-88233a305"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost"
                    >
                        <LinkedinIcon />
                        LinkedIn
                    </a>

                </div>

                <div className="hero-location">
                    <PinIcon />
                    Bangalore, India | Computer Science Undergraduate
                </div>

            </div>

        </section>
    );
}

export default Hero;
