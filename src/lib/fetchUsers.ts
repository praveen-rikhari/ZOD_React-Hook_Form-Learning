import { BasicUserSchema } from "./../models/User";
import z from "zod";

const UserResults = z.array(BasicUserSchema);
type UserArray = z.infer<typeof UserResults>;

export default async function fetchUsers(): Promise<UserArray | undefined> {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!result.ok) {
      return undefined;
    }

    const usersJSON: UserArray = await result.json();
    const parsedData = UserResults.parse(usersJSON);

    return parsedData;
  } catch (error) {
    console.log("error", error);
  }
}
