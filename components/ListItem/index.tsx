import React, { FC, Fragment } from "react";
import IDataObject from "../../interfaces";

type Props = {
	data: IDataObject;
};

export const ListItem: FC<Props> = ({ data }) => {
	return (
		<Fragment>
			{data.id}:{data.title}
			{data.date}
			{data.source}
			{data.image}
			{data.lead}
			{data.content}
		</Fragment>
	);
};
