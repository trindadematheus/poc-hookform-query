import { QueryKey, useQuery, UseQueryOptions } from "react-query";

import { getRepositoryByName } from "../services/repositories";
import { Repository } from "../types/repository";

type UseGetRepositoryByName = {
  name: string;
  options?: Omit<
    UseQueryOptions<Repository, Error, Repository, QueryKey>,
    "queryKey" | "queryFn"
  >;
};

export const useGetRepositoryByName = ({
  name,
  options,
}: UseGetRepositoryByName) => {
  const QUERY_KEY = `REPOSITORY_${name.toLocaleUpperCase()}`;

  return useQuery<Repository, Error>(
    QUERY_KEY,
    () => getRepositoryByName(name),
    options
  );
};
