import React from "react";
//import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./bootstrap.min.css"
import './footers.css';
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./FooterStyles";

const BSFooter = () => {
return (
<div class="container-test bg-dark">
  <footer class="py-1 my-1">
    <ul class="container-test2 nav justify-content-center border-bottom pb-3 mb-3 bg-dark">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">About</a></li>
    </ul>
    <p class="text-center text-light">&copy; 2023 Company, Inc</p>
  </footer>
</div>


   // <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

)
};
// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
export default BSFooter;
