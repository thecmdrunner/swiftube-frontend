import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Base from "~/components/Base";
import { LoadingFlexComponent } from "~/components/Loader";

const Admin = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  const isAdmin = !!user?.publicMetadata.isAdmin;

  useEffect(() => {
    if (isLoaded && !isAdmin) setTimeout(() => router.replace("/"), 2000);
  }, [user, isLoaded, isSignedIn]);

  if (!isLoaded) return <LoadingFlexComponent size={40} />;
  if (!isAdmin)
    return (
      <Base>
        <div className="flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            You're not an admin... 🕺
            <br />
            Redirecting...
          </h1>
        </div>
      </Base>
    );

  return (
    <Base>
      <div className="flex items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          You're an admin... 🕺
        </h1>
      </div>
    </Base>
  );
};

export default Admin;
