
import "./Contact.css";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-container">
        <div className="section-head center reveal">
          <h2>
            Get In <span>Touch</span>
          </h2>

          <p className="section-sub">
            I'm always open to discussing new opportunities,
            collaborations, and interesting projects.
          </p>
        </div>

        <div className="card contact-card reveal">
          <h3>Let's Connect!</h3>

          <p>
            Feel free to reach out to me through email or connect
            with me on my professional profiles.
          </p>

          <div className="contact-details">
            <p>
              <span><MailIcon />Email:</span>{" "}
              <a href="mailto:hr156141@gmail.com">
                hr156141@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/heman-th2005"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
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
        </div>

      </div>

      <footer className="contact-footer">
        <p>© 2026 Hemanth R. Built with React.</p>
      </footer>
    </section>
  );
}

export default Contact;
