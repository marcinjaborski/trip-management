import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
export const fileUrl = "http://127.0.0.1:8090/api/files";

export default pb;
