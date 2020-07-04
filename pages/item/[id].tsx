import React, { FC } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { fetchItem } from "../../api";
import IDataObject from "../../interfaces";
import { itemPaths as paths } from "../../interfaces/StaticPaths/index";
import { Loader, PostBody } from "../../components";
import { ParsedUrlQuery } from 'querystring';

interface ItemProps {
	item: IDataObject;
}

interface Params {
	params: ParsedUrlQuery;
}

export const getStaticProps = async ({ params }: Params & GetStaticProps) => {
	const item = await fetchItem(params.id as string);
	return { props: { item } };
}

export const getStaticPaths = async () => {
	return { paths, fallback: false };
};

const Item: FC<ItemProps & NextPage> = ({ item }) => {
	const router = useRouter();

	// try:
	// return !post || !posts ? <Loader /> : <PostBody post={post} />
	return router.isFallback ? <Loader /> : <PostBody items={item} />;
};

export default Item;