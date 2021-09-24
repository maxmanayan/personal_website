import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import hackathonGrader from "../images/Hackathon_Grader.png";
import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import { CONTENT_BACKGROUND_GRAY, MAX_BLUE } from "../colors";
import coffeeNotes from "../images/cn_about_website.jpg";

const MyProjects = () => {
  return (
    <div id="portfolio">
      <Container>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 6 }}>
            <h1
              style={{
                color: `${MAX_BLUE}`,
                fontSize: "4vw",
                margin: "3vw 0",
                fontWeight: "bold",
              }}
            >
              PORTFOLIO
            </h1>
            <div>
              <Jumbotron
                style={{
                  border: "none",
                  background: `${CONTENT_BACKGROUND_GRAY}`,
                }}
              >
                <div>
                  <Image
                    src={coffeeNotes}
                    rounded
                    style={{
                      width: "100%",
                      height: "15em",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ margin: "1em", display: "flex" }}>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ecoecho.herokuapp.com/"
                  >
                    <h3 style={{ marginRight: "2em" }}>ecoECHO</h3>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/maxmanayan/ecoECHO"
                  >
                    <Image src={githubLogo} style={{ height: "2em" }} />
                  </a>
                </div>
                <div style={{ margin: "1em" }}>
                  <p>
                    ecoECHO is an online forum focused on discussing humanity's
                    impact on our environment 🌎 Includes personalized,
                    authenticated accounts in which users can post about
                    environmental issues, and upvote/comment on other issues.
                  </p>
                  <p>Stack - MongoDB, Node.js, Express.js, React.js</p>
                  <p>
                    Featuring - GraphQL and Apollo API design, authentication
                    with jsonwebtoken and bcrypt, responsive-design
                  </p>
                </div>
              </Jumbotron>
            </div>
            <div>
              <Jumbotron
                style={{
                  border: "none",
                  background: `${CONTENT_BACKGROUND_GRAY}`,
                }}
              >
                <div>
                  <Image
                    src={coffeeNotes}
                    rounded
                    style={{
                      width: "100%",
                      height: "15em",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ margin: "1em", display: "flex" }}>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://coffeeandnotes.herokuapp.com/"
                  >
                    <h3 style={{ marginRight: "2em" }}>Coffee Notes</h3>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/maxmanayan/coffee-notes"
                  >
                    <Image src={githubLogo} style={{ height: "2em" }} />
                  </a>
                </div>
                <div style={{ margin: "1em" }}>
                  <p>
                    Coffee Notes is an app designed to assist users with
                    organization of their tasks. Currently featuring a
                    personalized todo-list and kanban board, this app will
                    increase productivity and focus while in use. Create an
                    account!
                  </p>
                  <p>Stack - PostgreSQL, Ruby on Rails, React</p>
                  <p>
                    Featuring - React hooks, Drag-and-Drop, Todo-List,
                    Responsive Design, Smooth Scroll, React router, React
                    Bootstrap
                  </p>
                </div>
              </Jumbotron>
            </div>
            <div>
              <Jumbotron
                style={{
                  border: "none",
                  background: `${CONTENT_BACKGROUND_GRAY}`,
                }}
              >
                <div>
                  <Image
                    src={hackathonGrader}
                    rounded
                    style={{
                      width: "100%",
                      height: "10em",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ margin: "1em", display: "flex" }}>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dpl-hackathon-grader.herokuapp.com/"
                  >
                    <h3 style={{ marginRight: "2em" }}>Hackathon Grader</h3>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Matt8728/hackathon_grader"
                  >
                    <Image src={githubLogo} style={{ height: "2em" }} />
                  </a>
                </div>
                <div style={{ margin: "1em" }}>
                  <p>
                    Hackathon Grader is a streamlined grading system for
                    hackathons. This app is currently being used by DevPoint
                    Labs in Salt Lake City, UT.
                  </p>
                  <p>Stack - PostgreSQL, Ruby on Rails, React</p>
                  <p>
                    Featuring - SQL, React hooks, styled components,
                    has-many-through, React router
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/watch?v=p0_mTK9Juyk "
                    >
                      <h5>Watch the Commercial!</h5>
                    </a>
                  </div>
                </div>
              </Jumbotron>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProjects;
