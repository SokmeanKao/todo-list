import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" bg-todo h-screen w-full">
        <h1 className="flex text-center justify-center items-center text-[400px]">
          TODO-
        </h1>
        <div className="flex justify-center items-center gap-10">
          <Link className="btn text-center shadow-sm" href="/login">
            Login
          </Link>
          <Link className="btn text-center shadow-sm" href="/register">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
