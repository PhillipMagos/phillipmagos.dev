import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Site Name
//       </Link>
//       <ul>
//         <CustomLink to="/contact">Contact</CustomLink>
//         <CustomLink to="/about">About</CustomLink>
//       </ul>
//     </nav>
//   )
// }
export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
			{/* <!-- Hamburger button --> */}
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
			{/* <!-- End hambuger button --> */}
			<div class="container-xl">
				<CustomLink class="navbar-brand" to="/home">Home</CustomLink>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
	
				<div class="collapse navbar-collapse" id="navbarsExample07XL">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<CustomLink class="nav-link" aria-current="page" to="/about">About</CustomLink>
						</li>
						<li class="nav-item">
							<CustomLink class="nav-link" to="/contact">Contact</CustomLink>
						</li>
						<li class="nav-item">
							<CustomLink class="nav-link" to="/portfolio">Portfolio (IP)</CustomLink>
						</li>
						<li class="nav-item">
							<CustomLink class="nav-link" to="/blog">Blog (IP)</CustomLink>
						</li>
						<li class="nav-item">
							<CustomLink class="nav-link" to="/APIs">APIs</CustomLink>
						</li>
						<li class="nav-item dropdown">
							<CustomLink class="nav-link dropdown-toggle" to="/projects" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Projects</CustomLink>
							<ul class="dropdown-menu" aria-labelledby="dropdown07XL">
								<li><CustomLink class="dropdown-item" to="#">CSS Projects</CustomLink></li>
								<li><CustomLink class="dropdown-item" to="#">Javascript Projects</CustomLink></li>
								<li><CustomLink class="dropdown-item" to="#">Python Project</CustomLink></li>
							</ul>
						</li>
					</ul>
					{/* <!-- <form>
						<input class="form-control" type="text" placeholder="Search" aria-label="Search">
					</form> --> */}
				</div>
			</div>
		</nav>
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
