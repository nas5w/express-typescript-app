import { User } from "../types";

const users: User[] = [];

export const addUser = (user: User) => {
  users.push(user);
};

export const getUser = (user: User) => {
  return users.find(
    (u) => u.username === user.username && u.password === user.password
  );
};
