import fetch from "node-fetch";
import IDataObject, { Category} from "../../interfaces";
import { config } from "../Config";
import { NextResponse, NextRequest} from "next";

export const fetchItems = async (): Promise<IDataObject[]> => {
	try {
		const res = await fetch(`${config.baseUrl}/items`);
		return await res.json();
	} catch (error) {
		throw new Error(`fetchPosts error - ${error}`);
	}
};

export const fetchCategories = async (): Promise<Category[]> => {
	try {
		const res = await fetch(`${config.baseUrl}/categories`);
		return await res.();
	} catch (error) {
		throw new Error(`fetchCategories error - ${error}`);
	}
};
