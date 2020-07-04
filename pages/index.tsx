import React from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Feed } from "../components";
import IDataObject, { Category } from "../interfaces/index";
import { fetchCategories, fetchItems } from "../api";

interface Props {
	categories: Category[];
	items: IDataObject[];
}

export const getStaticProps: GetStaticProps = async () => {
	const categories = await fetchCategories();
	const items = await fetchItems();
	return { props: { items, categories } };
};

export default function IndexPage({ categories, items }: Props & NextPage) {
	return (
		<>
			<Head>
				<title>landing page</title>
			</Head>

			<main>
				<Feed categories={categories} items={items} />
			</main>
		</>
	);
}
