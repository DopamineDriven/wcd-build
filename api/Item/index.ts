import fetch from "node-fetch";
import IDataObject, { EntityId } from "../../interfaces";
import { config } from "../Config";

export const fetchItem = async (id: EntityId): Promise<IDataObject> => {
    const res = await fetch(`${config.baseUrl}/items/${id}`);
    return await res.json();
};