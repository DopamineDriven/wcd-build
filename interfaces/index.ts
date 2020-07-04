export type UriString = string;
export type Category = "People" | "Project" | "Technology";
export type EntityId = number | UniqueString;
export type UniqueString = string;
export type DateIsoString = string;
export default interface IDataObject {
    id: EntityId;
    title: DateIsoString;
    date: string;
    category: Category;
    source: UriString;
    image: UriString;
    lead: string;
    content: string;
}