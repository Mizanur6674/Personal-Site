import useSWR from "swr";
import { PostProps } from "../src/types/PostProps";
const baseURL = "http://localhost:3000/";

async function response<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

function fetcher<T>(endpoint: any) {
  const { data, error } = useSWR<T, Error>(`${baseURL}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default fetcher;
