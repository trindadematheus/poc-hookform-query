import { apiGithub } from "../client";
import { Repository } from "../types/repository";

export async function getAllRepositories(): Promise<Repository[]> {
  return (await apiGithub.get("/users/trindadematheus/repos")).data;
}

export async function getRepositoryByName(name: string): Promise<Repository> {
  return (await apiGithub.get(`/repos/trindadematheus/${name}`)).data;
}
