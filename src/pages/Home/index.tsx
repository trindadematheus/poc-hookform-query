import { Link } from "react-router-dom";

import { useGetAllRepositories } from "../../api/hooks/useGetAllRepositories";
import SkeletonTable from "../../components/SkeletonTable";
import ErrorPage from "../../components/ErrorPage";

function HomePage() {
  const getAllRepositoriesQuery = useGetAllRepositories();

  if (getAllRepositoriesQuery.isLoading) {
    return (
      <>
        <SkeletonTable />
      </>
    );
  }

  if (getAllRepositoriesQuery.isError) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  return (
    <>
      <div className="bg-base-200 py-4">
        <div className="text-xl font-bold container max-w-6xl flex justify-between items-center">
          <h1>Repositories</h1>

          <div className="flex gap-4">
            <Link to="/new">
              <button className="btn btn-primary">NEW</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Language</th>
                <th>Stars</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {getAllRepositoriesQuery.data?.map((repository) => (
                <tr key={repository.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{repository.name}</div>
                        <div className="text-sm opacity-50">
                          {repository.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{repository.language}</td>
                  <td>{repository.stargazers_count}</td>
                  <th>
                    <Link to={`/edit/${repository.name}`}>
                      <button className="btn btn-primary">details</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomePage;
