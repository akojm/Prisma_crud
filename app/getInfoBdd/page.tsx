import { prisma } from "../lib/db";
import Link from "next/link";
export default async function GetInfoBdd() {
  const user = await prisma.user.findMany();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Get Info Bdd</h1>
      {user.map((user) => (
        <ul className="flex flex-col capitalize justify-around gap-2 mt-4">
          <li
            className="bg-green-400 text-black px-4 py-2 rounded-md"
            key={user.id}
          >
            Civilté : {user.civility} - Nom : {user.name} - Prénom :{" "}
            {user.surname} - Téléphone : {user.phone} - Email : {user.email}
          </li>
        </ul>
      ))}
      <Link
        className="bg-blue-400 text-black px-4 py-2  mt-4 rounded-md max-w-fit"
        href="/crud"
      >
        Return
      </Link>
    </div>
  );
}
