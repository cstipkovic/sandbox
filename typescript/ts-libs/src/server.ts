import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, { message: "Name is too short" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }),
});

type User = z.infer<typeof userSchema>;

function saveUserToDatabase(user: User) {
  const { name, age } = userSchema.parse(user);
  // ...
  console.log(name, age);
}

saveUserToDatabase({ name: "John", age: 40 });
