import React, { FC } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
	title?: string;
	children: any;
};

const Layout: FC<Props> = ({ children, title = "default title" }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<nav>
					<Link href="/">
						<a>Home</a>
					</Link>{" "}
					|{" "}
					<Link href="/lfc">
						<a>List as a FC</a>
					</Link>{" "}
					|{" "}
					<Link href="/lcc">
						<a>List as a CC</a>
					</Link>{" "}
					|{" "}
					<Link href="/about">
						<a>About</a>
					</Link>{" "}
					|{" "}
				</nav>
			</header>
			{children}
			<footer>
				<hr />
				<span>2020</span>
			</footer>
		</div>
	);
};

export default Layout;
