import { useParams } from "react-router-dom";

type HeaderProps = {
  isViewMode: boolean;
};

function Header({ isViewMode }: HeaderProps) {
  const { repoName } = useParams();

  return (
    <>
      <div className="bg-base-200 py-4">
        <div className="text-xl font-bold container max-w-6xl flex justify-between items-center">
          <h1>{repoName || 'New Repository'}</h1>

          <div className="flex gap-4">
            <button className="btn btn-primary">EDITAR</button>
            <button className="btn btn-primary">SALVAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
