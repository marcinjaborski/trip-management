import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
export const fileUrl = `${import.meta.env.VITE_POCKETBASE_URL}/api/files`;

export default pb;
