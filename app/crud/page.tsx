import Link from "next/link";

export default function Crud() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Prisma Crud</h1>
      <Link
        className="bg-green-400 text-black px-4 py-2  mt-4 rounded-md max-w-fit"
        href="/"
      >
        Users
      </Link>
    </div>
  );
}
