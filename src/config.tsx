const URL = process.env.NEXT_PUBLIC_URL_API;
export const getApiUrl = (path: string) => (URL ? URL + path : path);
export const KEY = process.env.NEXT_PUBLIC_SECRET;
