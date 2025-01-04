import { prisma } from "../lib/db";
import { createUser, deleteUser, updateUser } from "../actions/actions";
import Link from "next/link";
export default async function UsersPage() {
  const user = await prisma.user.findMany();
  return (
    <>
      <div>
        <h1>Create, Update, Delete Users</h1>
        <form
          action={createUser}
          className="flex ps-4 pe-4 pt-2 pb-2 bg-gray-100 border-gray-100 rounded-md"
        >
          <select name="civility" id="civility">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="surname" placeholder="Surname" />
          <input type="text" name="phone" placeholder="Phone" required />
          <input type="text" name="email" placeholder="Email" required />

          <button
            className="bg-blue-400 text-black px-4 py-2  ml-4 mr-4 rounded-md"
            type="submit"
          >
            Create
          </button>
        </form>
        <ul className="flex flex-col capitalize justify-around gap-2 mt-4">
          {user.map((user) => (
            <li className="pt-3" key={user.id}>
              <div className="flex flex-col-2 justify-around items-center bg-gray-200 pb-4 mb-4">
                <div className="flex flex-col-2 justify-around items-center pe-4 ps-4 pt-2 pb-2 bg-blue-200">
                  {user.civility} {user.name} {user.surname} {user.phone}{" "}
                  {user.email}
                </div>
                <form
                  className="flex flex-col-2 items-center bg-blue-200"
                  action={deleteUser}
                >
                  <input type="hidden" name="id" value={user.id} />
                  <button
                    className="bg-red-400 text-black px-4 py-2 rounded-md"
                    type="submit"
                  >
                    Delete
                  </button>
                </form>
              </div>
              <div className="flex flex-col-2 justify-around items-center bg-blue-200">
                <div className="flex flex-col-2 justify-around items-center pe-4 ps-4 pt-2 pb-2 bg-blue-200">
                  {user.civility} {user.name} {user.surname} {user.phone}{" "}
                  {user.email}
                </div>
                <form
                  className="flex flex-col-2 items-center bg-blue-200"
                  action={updateUser}
                >
                  <input type="hidden" name="id" value={user.id} />
                  <select name="civility" id="civility">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>

                  <input
                    type="text"
                    name="name"
                    defaultValue={user.name}
                    required
                  />
                  <input
                    type="text"
                    name="surname"
                    defaultValue={user.surname ?? ""}
                  />
                  <input
                    type="text"
                    name="phone"
                    defaultValue={user.phone?.toString()}
                    required
                  />
                  <input
                    type="text"
                    name="email"
                    defaultValue={user.email}
                    required
                  />

                  <button
                    className="bg-green-400 text-black px-4 py-2 ml-4 mr-4 rounded-md"
                    type="submit"
                  >
                    Update
                  </button>
                </form>
              </div>
            </li>
          ))}
          <Link
            className="bg-green-400 text-black px-4 py-2  mt-4 rounded-md max-w-fit"
            href="/crud"
          >
            Validate
          </Link>
        </ul>
      </div>
    </>
  );
}
