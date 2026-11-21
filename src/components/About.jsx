import "./About.css";

function About() {
    return (
        <section className="section about" id="about">

            <div className="container about-container">

                <div className="about-content reveal">
                    <div className="section-head">
                        <span className="section-tag">
                            GET TO KNOW ME
                        </span>

                        <h2>
                            About <span>Me</span>
                        </h2>
                    </div>

                    <p>
                        I'm a Computer Science undergraduate at
                        Jyothy Institute of Technology, passionate
                        about building backend applications and
                        AI-integrated web solutions.
                    </p>

                    <p>
                        My primary focus is Python backend
                        development, REST API design, and
                        full-stack development. I enjoy turning
                        ideas into practical applications while
                        continuously exploring machine learning
                        and generative AI.
                    </p>

                    <p>
                        I believe in continuous learning,
                        problem-solving, and building technology
                        that solves real-world problems.
                    </p>
                </div>

                <div className="about-details">

                    <div className="card detail-card reveal" style={{ "--d": "100ms" }}>
                        <h3>Education</h3>
                        <h4>B.E. Computer Science</h4>
                        <p>Jyothy Institute of Technology</p>
                        <span>VTU | Expected 2027</span>
                    </div>

                    <div className="card detail-card reveal" style={{ "--d": "200ms" }}>
                        <h3>Academic Performance</h3>
                        <h4 className="big-number">8.36 / 10</h4>
                        <p>Current CGPA</p>
                    </div>

                    <div className="card detail-card reveal" style={{ "--d": "300ms" }}>
                        <h3>Areas of Interest</h3>
                        <p>Python Backend Development</p>
                        <p>Artificial Intelligence & Machine Learning</p>
                        <p>Full-Stack Development</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
