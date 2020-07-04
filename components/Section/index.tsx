import React, { FC } from "react";
import Link from "next/link";
import IDataObject from "../../interfaces";
import { PostCard } from "../PostCard";
import { GridSection, LinkSection, TitleSection } from "../Style";

interface SectionProps {
	title: string;
	items: IDataObject[];
	isCompact?: boolean;
}

export const Section: FC<SectionProps> = ({
	title,
	items,
	isCompact
}) => {
	return (
		// <section>
		// <TitleSection>{title}</TitleSection>
		// 	<GridSection>
		// 		<PostCard />
		// 		<PostCard />
		// 		<PostCard />
		// 	</GridSection>
			// </section>
		<section>
			<TitleSection>{title}</TitleSection>
			<GridSection>
				{items.map((item) => (
					<PostCard key={item.id} item={item} />
				))}
			</GridSection>

			{isCompact && (
				<Link href={`/category/${title}`} passHref={true}>
					<LinkSection>More in {title}</LinkSection>
				</Link>
			)}
		</section>
	);
};
