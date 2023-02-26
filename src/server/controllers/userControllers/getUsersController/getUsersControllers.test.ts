import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import supertest from "supertest";
import connectDatabase from "../../../../database/connectDatabase.js";
import User from "../../../../database/models/Users.js";
import app from "../../../index.js";
import { UserStructure } from "../types.js";

const request = supertest(app);

let server: MongoMemoryServer;

beforeEach(async () => {
  server = await MongoMemoryServer.create();
  await connectDatabase(server.getUri());
});

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await server.stop();
  await mongoose.connection.close();
});

const mockUser: UserStructure = {
  username: "davo",
  name: "David",
  lastname: "Botello",
  age: 43,
  avatar: "",
  comunities: "Virtual Racing Girona",
  confidence: 5,
  language: "castellano",
  password: "lalalalan",
  simulators: "Assetto Corsa",
  prefered: {
    car: ["Porsche", "Camaro"],
    circuit: ["Laguna", "Kyalami"],
    simulator: ["Assetto Corsa"],
  },
};

describe("Given a GET 'user' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a status 200", async () => {
      const expectedStatus = 200;

      const response = await request
        .get("/user")
        .send(mockUser)
        .expect(expectedStatus);
    });
  });
  test("Then it should respond with contain", async () => {
    const response = await request.get("/user").send(mockUser);

    expect(response.body).toBeTruthy();
  });
});
