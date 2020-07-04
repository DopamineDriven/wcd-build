import React, { FC } from "react";
import Link from "next/link";
import IDataObject from "../../interfaces";
import {
	ContentPostBody,
	FigurePostBody,
	LeadPostBody,
	MetaPostBody,
	TitlePostBody
} from "../Style";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface PostBodyProps {
	items: IDataObject;
}

export const PostBody: FC<PostBodyProps> = ({ items }) => {
	return (
		<div>
			<TitlePostBody>{items.title}</TitlePostBody>
			<FigurePostBody>
				{items.category !== "People" ? (
					<img src={items.image} alt={items.title} />
				) : (
					<Avatar
						src={items.image}
						alt={items.title}
						style={{ verticalAlign: "center" }}
						icon={<UserOutlined />}
						shape="circle"
						size={400}
					/>
				)}
			</FigurePostBody>
			<LeadPostBody>{items.lead}</LeadPostBody>
			<ContentPostBody dangerouslySetInnerHTML={{ __html: items.content }} />

			<MetaPostBody>
				<span>{items.date}</span>
				<span>&middot;</span>
				<Link href="/category/[id]" as={`/category/${items.category}`}>
					<a>{items.category}</a>
				</Link>
				<span>&middot;</span>
				<a href={items.source}>Source</a>
			</MetaPostBody>
		</div>
	);
};

/*
			<FigurePostBody>
				<Avatar src={items.image} alt={items.title} icon={<UserOutlined />} shape="circle" />
			</FigurePostBody>
*/
