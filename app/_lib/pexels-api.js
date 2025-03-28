import { createClient } from "pexels";

const SECRET_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

const client = createClient(SECRET_KEY);

export default client;
