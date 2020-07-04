import React, { FC } from "react";
import ListItem from "../ListItem";
import IDataObject from "../../interfaces";

type Props = {
	items: IDataObject[];
};

const List: FC<Props> = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>
					<ListItem data={item} />
				</li>
			))}
		</ul>
	);
};

export default List;
