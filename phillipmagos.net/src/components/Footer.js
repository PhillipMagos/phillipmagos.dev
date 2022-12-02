import React from "react";
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
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink to="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
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
			<FooterLink to="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
// const Footer = () => {
// return (
// 	<div class="container">
//   <footer class="py-5">
//     <div class="row">
//       <div class="col-2">
//         <h5>Section</h5>
//         <ul class="nav flex-column">
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Home</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Features</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Pricing</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">FAQs</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">About</FooterLink></li>
//         </ul>
//       </div>

//       <div class="col-2">
//         <h5>Section</h5>
//         <ul class="nav flex-column">
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Home</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Features</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Pricing</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">FAQs</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">About</FooterLink></li>
//         </ul>
//       </div>

//       <div class="col-2">
//         <h5>Section</h5>
//         <ul class="nav flex-column">
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Home</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Features</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">Pricing</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">FAQs</FooterLink></li>
//           <li class="nav-item mb-2"><FooterLink to="#" class="nav-link p-0 text-muted">About</FooterLink></li>
//         </ul>
//       </div>

//       <div class="col-4 offset-1">
//         <form>
//           <h5>Subscribe to our newsletter</h5>
//           <p>Monthly digest of whats new and exciting from us.</p>
//           {/* <div class="d-flex w-100 gap-2">
//             <label for="newsletter1" class="visually-hidden">Email address</label>
//             <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
//             <button class="btn btn-primary" type="button">Subscribe</button>
//           </div> */}
//         </form>
//       </div>
//     </div>
// {/* <!-- social media --> */}
//     {/* <div class="d-flex justify-content-between py-4 my-4 border-top">
// 			<p>Copyright &copy; <script>document.write(new Date().getFullYear());</script>, phillipmagos.com</p>
//       <ul class="list-unstyled d-flex">
//         <li class="ms-3"><FooterLink class="link-dark" to="#"><svg class="bi" width="24" height="24"><use xlink:to="#twitter"/></svg></FooterLink></li>
//         <li class="ms-3"><FooterLink class="link-dark" to="#"><svg class="bi" width="24" height="24"><use xlink:to="#instagram"/></svg></FooterLink></li>
//         <li class="ms-3"><FooterLink class="link-dark" to="#"><svg class="bi" width="24" height="24"><use xlink:to="#facebook"/></svg></FooterLink></li>
//       </ul>
//     </div> */}
//   </footer>
// </div>

// /* <!-- old footer --> */
// // <!-- <footer class="main-footer">
// // 	<div class="container">
// // 		<footer class="py-3 my-4">
// // 			<ul class="nav justify-content-center border-bottom pb-3 mb-3">
// // 				<li class="nav-item"><FooterLink to="#" class="nav-link px-2 text-muted">Home</FooterLink></li>
// // 				<li class="nav-item"><FooterLink to="#" class="nav-link px-2 text-muted">Features</FooterLink></li>
// // 				<li class="nav-item"><FooterLink to="#" class="nav-link px-2 text-muted">Pricing</FooterLink></li>
// // 				<li class="nav-item"><FooterLink to="#" class="nav-link px-2 text-muted">FAQs</FooterLink></li>
// // 				<li class="nav-item"><FooterLink to="#" class="nav-link px-2 text-muted">About</FooterLink></li>
// // 			</ul>
// // 			<p>Copyright &copy; <script>document.write(new Date().getFullYear());</script>, phillipmagos.com</p>
// // 			<!--Have: link to: LinkedIn, Twitter?, -->
// // 		</footer>
// // 	</div> -->

// //</footer>
// /* <!--End of Footer Tag--> */
//   /* <!-- jQuery Link --> */
//   // <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
//   // <script src="script.js"></script>
// 	/* <!-- Whenever the below is used, drop downs no longer work. Drop downs are functional as of now -->
// 	    <!-- <script src="../assets/dist/js/bootstrap.bundle.min.js"></script> --> 
// 			<!-- Found from: C:\Users\phillip.magos\Desktop\Software_Development\bootstrap-5.1.3-examples\bootstrap-5.1.3-examples\sticky-footer --> */
// );
// };
export default Footer;
