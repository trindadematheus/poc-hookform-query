import { useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";

import RepositorySection from "./RepositorySection";
import OwnerSection from "./OwnerSection";
import { useGetRepositoryByName } from "../../api/hooks/useGetRepositoryByName";
import Header from "./Header";
import SkeletonTable from "../../components/SkeletonTable";
import ErrorPage from "../../components/ErrorPage";

type FormState = "VIEW" | "EDIT" | "CREATION";

function FormPage() {
  const { repoName } = useParams();
  const methods = useForm();

  const [formState, setFormState] = useState<FormState>(
    repoName ? "VIEW" : "CREATION"
  );

  const repositoryByNameQuery = useGetRepositoryByName({
    name: repoName || "",
    options: {
      enabled: !!repoName,
      onSuccess: (data) => {
        methods.reset(data);
      },
    },
  });

  if (repositoryByNameQuery.isLoading) {
    return (
      <>
        <SkeletonTable />
      </>
    );
  }

  if (repositoryByNameQuery.isError) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  const isViewMode = formState === "VIEW";

  return (
    <>
      <FormProvider {...methods}>
        <Header isViewMode={isViewMode} />

        <div className="container max-w-5xl pt-8">
          <RepositorySection isViewMode={isViewMode} />
          <div className="divider" />
          <OwnerSection isViewMode={isViewMode} />
        </div>
      </FormProvider>
    </>
  );
}

export default FormPage;
