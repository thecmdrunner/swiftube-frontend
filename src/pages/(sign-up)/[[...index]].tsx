import Link from "next/link";
import { Button } from "~/components/ui/button";

const SignUpPage = () => (
  <main className="flex h-screen flex-col items-center justify-start bg-gray-900 py-16">
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-white transition-colors first:mt-0">
      Sign up not allowed from this route.
    </h2>
    <br />
    <Link href="/sign-in">
      <Button variant={"secondary"}>Sign in</Button>
    </Link>
  </main>
);
export default SignUpPage;
