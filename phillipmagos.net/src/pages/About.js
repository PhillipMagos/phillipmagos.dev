import 'bootstrap/dist/css/bootstrap.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./features.css"
export default function About() {
  return (
    <div class="justify-content-center bg-light">
      <div class="px-4 py-5 my-5 text-center">
        <div class="col-lg-8 mx-auto">
          <div class=" px-4 py-5" id="featured-3">
            <h1 class="text-center">Welcome to the About page</h1>
            <article>

            <p>I've worked in the IT industry for over 8 years. Started from working as onsite support for my college's IT department to providing level 1 and 2 support at Dell Technologies As an experienced IT support technician, I can offer a wide range of IT services to resolve business and consumer related issues. These services include hardware, software and network support across commonly used devices ranging from Windows PC, Macbooks, android and iphones devices.</p>
            {/* <p>1. Introduce yourself: Start by introducing yourself and providing some background information. This could include your name, your profession, your education, and your relevant work experience.
                      Introduction: */}
  <p>Hello there, I'm Phillip and I'm a software developer living in Austin TX. I started out working in IT Support at Dell Technologies and now work as an Intake Coordinator for an E-marketing SAAS company. Since I've graduated from Austin Community College's software developement bootcamp, I'm now moving onto the next challenging and exciting role in my tech career.</p>
<p>
2. Share your skills and expertise: Highlight your skills and areas of expertise. This could include programming languages, software tools, design skills, or any other relevant skills that are relevant to your portfolio.
<ul>
  <h4>Programming & Coding languages</h4>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>SQL</li>
                <li>Mongo</li>
              </ul>
  A: 
  Programming & Coding languages: 
  HTML5
  CSS3
  bootstrap
  Javascript
  React JS

  SQL
  Mongo

  Tools
  Postman
  Splunk

{/* 3. Show your personality: Give visitors a sense of your personality by including some personal details. This could include your hobbies, interests, or any other details that help visitors get to know you. */}
  A:
  <p>When I'm not programming, I'm usually going for a run, lifting weights or spending time with my two dogs and a cat.</p>

4. Explain your approach: Explain your approach to your work. This could include your design philosophy, your development methodology, or any other insights into your work process.

5. Showcase your portfolio: Provide links to your portfolio projects and explain your role in each project. Be sure to include any notable achievements or challenges you faced during the project.

6. Provide contact information: Make it easy for visitors to get in touch with you by including your contact information, such as your email address or social media profiles.

7. Remember that your about page should be clear, concise, and easy to read. Use a friendly and approachable tone, and try to connect with your visitors on a personal level.</p>
</article>
<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div class="feature col">
                <div class="feature-icon bg-primary bg-gradient">
                  {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg> */}
                </div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <CustomLink href="#" class="icon-link">
                  Call to action
                  {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg> */}
                </CustomLink>
              </div>
              <div class="feature col">
                <div class="feature-icon bg-primary bg-gradient">
                  {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"/></svg> */}
                </div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <CustomLink href="#" class="icon-link">
                  Call to action
                  {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg> */}
                </CustomLink>
              </div>
              <div class="feature col">
                <div class="feature-icon bg-primary bg-gradient">
                  {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
                </div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <CustomLink href="#" class="icon-link">
                  Call to action
                  {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg> */}
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}