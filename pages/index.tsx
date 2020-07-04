import React, { FC } from "react";
import Link from "next/link";
import { Layout } from "../components";

const IndexPage: FC = () => {
	return (
		<Layout>
			<h1>Hello Next</h1>
			<p>
				<Link href="./about">
					<a>About</a>
				</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;