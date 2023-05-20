import 'bootstrap/dist/css/bootstrap.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./features.css"
export default function About() {
  return (
    <div class="container justify-content-center">
      <div class="row mt-5 justify-content-center">
        <div class="col-md-12">
          <div class="container px-4 py-5" id="featured-3">
            <h1>Welcome to the About page</h1>
            <p>I've worked in the IT industry for over 8 years. Started from working as onsite support for my college's IT department to providing level 1 and 2 support at Dell Technologies As an experienced IT support technician, I can offer a wide range of IT services to resolve business and consumer related issues. These services include hardware, software and network support across commonly used devices ranging from Windows PC, Macbooks, android and iphones devices.</p>
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