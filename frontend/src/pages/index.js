import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div style={{textAlign:"center", marginTop:"100px"}} >
      {!session ? (
        <>
          <h2>You are not signed in</h2>
          <button onClick={()=>signIn("google")}> Sign in with google</button>
        </>
      ) : (
        <>
          <h2>Welcome, {session.user.name}</h2>
          <p>{session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}
