import { EntityId, Category } from "../index";

export interface ItemStaticParams {
	id: EntityId;
}

export interface ItemStaticPath {
	params: ItemStaticParams;
}

export const staticItemsIdList: EntityId[] = [1, 2, 3, 4];

export const itemPaths: ItemStaticPath[] = staticItemsIdList.map((id) => ({
	params: { id: String(id) }
}));

export interface CategoryStaticParams {
	id: Category;
}

export interface CategoryStaticPath {
	params: CategoryStaticParams;
}

export const categoriesToPreRender: Category[] = [
	"Project",
	"Technology",
	"People"
];

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
	(category) => ({
		params: { id: category }
	})
);
