import { QueryKey, useQuery, UseQueryOptions } from "react-query";

import { getAllRepositories } from "../services/repositories";
import { Repository } from "../types/repository";

type GetAllRepositoriesResponse = Repository[];

type UseGetGenresMovieProps = Omit<
  UseQueryOptions<
    GetAllRepositoriesResponse,
    Error,
    GetAllRepositoriesResponse,
    QueryKey
  >,
  "queryKey" | "queryFn"
>;

export const useGetAllRepositories = (
  options?: Partial<UseGetGenresMovieProps>
) => {
  return useQuery<GetAllRepositoriesResponse, Error>(
    "ALL_REPOSITORIES",
    () => getAllRepositories(),
    options
  );
};
