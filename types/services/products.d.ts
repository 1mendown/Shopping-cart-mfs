export default class Products {
    static GeAll<T extends object>(url: string, params?: {
        [key: string]: string;
    }): Promise<T>;
}
