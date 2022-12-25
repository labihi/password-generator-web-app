import { test } from "vitest";

const User = {
    name: "John",
    age: 30,
};

test("User has name", (t) => {
    t.expect(User.name, "John");
});
