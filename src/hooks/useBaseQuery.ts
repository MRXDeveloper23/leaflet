import { fetchToken } from "@/api/fetchToken";
import { useAuth } from "@/providers/authProvider";
import { QueryFunction, UseQueryResult, useQuery } from "@tanstack/react-query";

export const useBaseQuery = (
  queryKey: string[],
  url: string,
  options: RequestInit = {}
): UseQueryResult<any, Error> => {
  const { token, setToken } = useAuth();

  const fetchData: QueryFunction = async () => {
    const currentToken = token || (await fetchToken());
    if (!token) {
      setToken(currentToken);
    }
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        "x-access-token": `${currentToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const queryResult = useQuery({
    queryKey,
    queryFn: fetchData,
    refetchInterval: 5000,
  });

  return queryResult;
};
