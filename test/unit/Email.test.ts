import Email from "../../src/domain/entity/Email"

test("Deve criar um e-mail válido", function() {
  const email = new Email("john.doe@gmail.com")
  expect(email.getValue()).toBe("john.doe@gmail.com")
})

test("Não deve criar um e-mail válido", function() {
  expect(() =>  new Email("john.doe@gmail")).toThrow(new Error("Invalid email"))
})