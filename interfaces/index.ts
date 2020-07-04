export type UriString = string;
export type Category = "People" | "Project" | "Technologies";

export type DateIsoString = string;
export default interface IDataObject {
    id: number;
    title: DateIsoString;
    date: string;
    category: Category;
    source: UriString;
    image: UriString;
    lead: string;
    content: string;
}