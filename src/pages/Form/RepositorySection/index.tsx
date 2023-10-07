import { useFormContext } from "react-hook-form";
import TextInput from "../../../components/TextInput";

type RepositorySection = {
  isViewMode: boolean;
};

function RepositorySection({ isViewMode }: RepositorySection) {
  const { register } = useFormContext();

  return (
    <>
      <div className="">
        <h2 className="font-bold mb-4 text-md">Repository data</h2>
        <TextInput
          label="Name"
          {...register("name", { disabled: isViewMode })}
        />
        <TextInput
          label="Description"
          {...register("description", { disabled: isViewMode })}
        />
        <TextInput
          label="Language"
          {...register("language", { disabled: isViewMode })}
        />
        <TextInput
          label="Visibility"
          {...register("visibility", { disabled: isViewMode })}
        />
      </div>
    </>
  );
}

export default RepositorySection;
