import { QueryClient, DefaultOptions } from "react-query";
import { axios } from "./axios";

const defaultQueryFn = async ({queryKey}: any) => {
  const { data } = await axios.get(`${queryKey[0]}`);
  return data;
};

const queryConfig: DefaultOptions = {
  queries: {
    retry: false,
    queryFn: defaultQueryFn,
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  }
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
