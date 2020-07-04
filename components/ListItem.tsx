import React, { FC, Fragment } from "react";
import IDataObject from "../interfaces";

type Props = {
	data: IDataObject;
};

const ListItem = ({ data }: FC & Props) => {
	<Fragment>
		{data.id}:{data.name}
		{data.date}
		{data.source}
		{data.image}
		{data.lead}
		{data.content}
	</Fragment>;
};

export default ListItem;