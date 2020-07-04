import React, { FC } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components";

const IndexPage: FC<NextPage> = () => {
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