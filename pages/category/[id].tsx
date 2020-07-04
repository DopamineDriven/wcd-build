import React, { FC } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { fetchItemsByCategory } from "../../api";
import { categoryPaths as paths } from "../../interfaces/StaticPaths";
import { Loader, Section } from "../../components";
import { ParsedUrlQuery } from 'querystring';
import IDataObject from "../../interfaces";

interface CategoryProps {
	items: IDataObject[];
}

interface Params {
	params: ParsedUrlQuery;
}

export const getStaticProps = async ({ params }: Params & GetStaticProps) => {
	const posts = await fetchItemsByCategory(params.id as string);
	return { props: { posts } };
}

export const getStaticPaths = async () => {
	return { paths, fallback: false };
};

const Category: FC<CategoryProps & NextPage> = ({ items }) => {
	const router = useRouter();

	return router.isFallback ? (
		<Loader />
	) : (
		<Section items={items} title={router.query.id as string} />
	);
};

export default Category;
