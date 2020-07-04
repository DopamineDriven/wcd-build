export type UriString = string;

export type DateIsoString = string;
export default interface IDataObject {
    id: number;
    title: DateIsoString;
    date: string;
    source: UriString;
    image: UriString;
    lead: string;
    content: string;
}