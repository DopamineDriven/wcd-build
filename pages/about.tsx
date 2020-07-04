import React, { FC } from "react";
import Link from "next/link";
import { Layout } from "../components";

type Props = {
    title: string;
}

const AboutPage: FC<Props> = () => {
	return (
		<Layout title="Nextjs+TS">
			<p>about page</p>
			<p>
				<Link href="/">
					<a>Return Home</a>
				</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;