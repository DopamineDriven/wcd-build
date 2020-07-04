import React, { FC } from "react";
import { Section } from "../Section";
import IDataObject, { Category } from "../../interfaces";

interface FeedProps {
	categories: Category[];
	items: IDataObject[];
}

export const Feed: FC<FeedProps> = ({ categories, items }) => {
    return (
        <>
            {categories.map((currentCategory) => {
                const inSection = items.filter(
                    (item) => item.category === currentCategory
                )

                return (
                    <Section 
                        key={currentCategory}
                        title={currentCategory}
                        items={inSection}
                        isCompact
                    />
                )
            })}
        </>
    )
};