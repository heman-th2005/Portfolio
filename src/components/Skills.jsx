
import "./Skills.css";

function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                "Python",
                "JavaScript",
                "SQL",
                "HTML5",
                "CSS3"
            ]
        },
        {
            title: "Backend & Frontend",
            skills: [
                "FastAPI",
                "REST APIs",
                "Node.js",
                "Express.js",
                "React"
            ]
        },
        {
            title: "AI / ML & Data",
            skills: [
                "PyTorch",
                "U-Net",
                "RAG",
                "Google Earth Engine",
                "Groq API"
            ]
        },
        {
            title: "Databases & Tools",
            skills: [
                "MongoDB",
                "Relational DBMS",
                "Git",
                "Render",
                "Vercel",
                "VS Code",
                "Arduino IDE"
            ]
        },
        {
            title: "Core Concepts",
            skills: [
                "OOP",
                "Data Structures & Algorithms",
                "Operating Systems",
                "Agile Development",
                "Unit Testing"
            ]
        }
    ];

    return (
        <section className="section skills" id="skills">

            <div className="container">

                <div className="section-head center skills-heading reveal">
                    <span className="section-tag">
                        WHAT I WORK WITH
                    </span>

                    <h2>
                        Technical <span>Skills</span>
                    </h2>

                    <p className="section-sub">
                        Technologies, frameworks and concepts
                        I use to build applications and
                        solve real-world problems.
                    </p>
                </div>

                <div className="skills-grid">

                    {skillCategories.map((category, index) => (
                        <div
                            className="card skill-card reveal"
                            key={index}
                            style={{ "--d": `${(index % 2) * 100}ms` }}
                        >

                            <h3>{category.title}</h3>

                            <div className="skill-list">

                                {category.skills.map((skill) => (
                                    <span
                                        className="skill-item"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;
