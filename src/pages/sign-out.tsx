import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoadingFlexComponent } from "~/components/Loader";

const SignOut = () => {
  const router = useRouter();

  useEffect(() => void router.push("/create"), [router]);

  return (
    <div>
      <LoadingFlexComponent size={40} />
    </div>
  );
};

export default SignOut;
