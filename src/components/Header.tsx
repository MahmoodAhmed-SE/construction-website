import { useEffect, useRef, useState } from "react";

import { Sling as Hamburger } from "hamburger-react";

import brandIcon from "/assets/brand-icon.webp";
import { NavLink } from "react-router-dom";

import "./header.css";

export default function Header({ isStaticColor }: { isStaticColor: boolean }) {
	const [isOpen, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const menubarRef = useRef<HTMLElement>(null);
	const toggleButtonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseOut = (e: MouseEvent) => {
			if (
				menubarRef.current &&
				!menubarRef.current.contains(e.target as Node) &&
				toggleButtonRef.current &&
				!toggleButtonRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};
		window.addEventListener("mousedown", handleMouseOut);

		return () => window.removeEventListener("mousedown", handleMouseOut);
	});
	if (!isStaticColor) {
		useEffect(() => {
			const onScroll = () => setScrolled(window.scrollY > 50);
			window.addEventListener("scroll", onScroll);
			return () => window.removeEventListener("scroll", onScroll);
		}, []);
	}

	return (
		<header
			className={
				isStaticColor
					? "header dark-bg"
					: scrolled
						? "header dark-bg"
						: "header"
			}
		>
			<div className="brand-icon">
				<img src={brandIcon} />
			</div>

			<nav className={isOpen ? "menu open" : "menu"} ref={menubarRef}>
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
							onClick={() => setOpen(false)}
						>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about-us"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
							onClick={() => setOpen(false)}
						>
							ABOUT US
						</NavLink>
					</li>
					<li>
						<a href="/#testimonials" onClick={() => setOpen(false)}>
							TESTIMONIALS
						</a>
					</li>
					<li>
						<NavLink
							to="/contact-us"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
							onClick={() => setOpen(false)}
						>
							CONTACT
						</NavLink>
					</li>
				</ul>
			</nav>

			<div ref={toggleButtonRef} className={"toggleMenuButton"}>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					direction="right"
					size={45}
					color="white"
				/>

			</div>
		</header>
	);
}
