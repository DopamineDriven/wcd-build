import fetch from "node-fetch";
import IDataObject, { EntityId } from "../../interfaces";
import { config } from "../Config";

export const fetchItemsByCategory = async (
	categoryId: EntityId
): Promise<IDataObject[]> => {
	const res = await fetch(`${config.baseUrl}/categories/${categoryId}`);
	return await res.json();
};
