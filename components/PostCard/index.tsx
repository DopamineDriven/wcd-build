import React, { FC } from "react";
import Link from "next/link";
import IDataObject from "../../interfaces";
import {
	CardPostCard,
	FigurePostCard,
	LeadPostCard,
	TitlePostCard
} from "../Style";

interface PostCardProps {
	item: IDataObject;
}

export const PostCard: FC<PostCardProps> = ({ item }) => {
	return (
		<Link href="/item/[id]" as={`/item/${item.id}`} passHref={true}>
			<CardPostCard>
				<FigurePostCard>
					<img alt={item.title} src={`https://res.cloudinary.com/asross311/image/upload/v1592831978/ASR_Assets/cropped-a_nqaem7.png`} />
				</FigurePostCard>
				<TitlePostCard>{item.title}</TitlePostCard>
				<LeadPostCard>{item.lead}</LeadPostCard>
			</CardPostCard>
		</Link>
	);
};
