import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import './footers.css';
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				width: "100%",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink to="#">Aim</FooterLink>
			<FooterLink to="#">Vision</FooterLink>
			<FooterLink to="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink to="#">Writing</FooterLink>
			<FooterLink to="#">Internships</FooterLink>
			<FooterLink to="#">Coding</FooterLink>
			<FooterLink to="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink to="#">Uttar Pradesh</FooterLink>
			<FooterLink to="#">Ahemdabad</FooterLink>
			<FooterLink to="#">Indore</FooterLink>
			<FooterLink to="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink to="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Github
				</span>
			</i>
			</FooterLink>
			<FooterLink to="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
			<FooterLink to="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			{/* <FooterLink to="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink> */}
		</Column>
		</Row>
	</Container>
	</Box>
);
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
export default Footer;
