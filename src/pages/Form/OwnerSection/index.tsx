import { useFormContext } from "react-hook-form";

import TextInput from "../../../components/TextInput";

type OwnerSectionProps = {
  isViewMode: boolean;
};

function OwnerSection({ isViewMode }: OwnerSectionProps) {
  const { register } = useFormContext();

  return (
    <>
      <div className="">
        <h2 className="font-bold mb-4 text-md">Owner data</h2>
        <TextInput
          label="Login"
          {...register("owner.login", { disabled: isViewMode })}
        />
        <TextInput
          label="Avatar URL"
          {...register("owner.avatar_url", { disabled: isViewMode })}
        />
      </div>
    </>
  );
}

export default OwnerSection;
