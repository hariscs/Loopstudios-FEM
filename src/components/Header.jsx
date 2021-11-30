const Header = () => {
	return (
		<header>
			<img src='' alt='' className='logo' />

			<nav className='nav'>
				<ul>
					<li>
						<a href='/'>About</a>
					</li>
					<li>
						<a href='/'>Careers</a>
					</li>
					<li>
						<a href='/'>Events</a>
					</li>
					<li>
						<a href='/'>Products</a>
					</li>
					<li>
						<a href='/'>Support</a>
					</li>
				</ul>
			</nav>

			<div className='mobileMenu'></div>

			{/* hero section */}
			<div className='hero'>
				<h1 className='heroTitle'>Immersive experiences that deliver</h1>
			</div>
		</header>
	);
};

export default Header;
