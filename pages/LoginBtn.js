import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data } = useSession();
  if (data) {
    console.log(data);
    return (
      <>
        {data.user.email}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}
