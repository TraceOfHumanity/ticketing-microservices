import request from "supertest";
import { app } from "../../app";
import { it } from "@jest/globals";

it("fails when a email that does not exist is supplied", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await request(app).post("/api/users/signup").send({
    email: "test@test.com",
    password: "password",
  });

  return request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "asdf",
    })
    .expect(400);
});
