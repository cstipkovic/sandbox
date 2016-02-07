describe("Some feature", function () {
    describe("#someFunction", function () {
        it("should return true when called", function () {
            expect(someFunction()).toBeTruthy();
        });

        it("returns an array of names", function () {
            expect(anotherFunction()).toContain("teste");
            expect(anotherFunction()).not.toContain("teste1");
        });
    });
});

describe("User", function () {
  it("shoud ensure that the user is 21 or older", function () {
      expect(User.getAge()).toBeGreaterThan(20);
  });
});
