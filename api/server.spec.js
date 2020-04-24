const request = require("supertest");

const server = require("./server");
const db = require("../data/dbConfig");

const hobbit = {
  name: "duke",
};

describe("server", () => {
  describe("GET /", () => {
    it("should return 200 ok", () => {
      // make get request to /endpoint on server
      return request(server) // return the async call to let jest know it should wait
        .get("/")
        .then((res) => {
          // assert that status code is 200
          expect(res.status).toBe(200);
        });
    });
  });

  describe("POST /hobbits", () => {
    beforeEach(async () => {
      await db("hobbits").truncate();
    });

    it("should return 201 created", () => {
      return request(server)
        .post("/hobbits", hobbit)
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
  });
});
