import Login from "../../src/application/usecase/Login"
import Signup from "../../src/application/usecase/Signup"
import UserRepositoryMemory from "../../src/infra/repository/memory/UserRepositoryMemory"

test("Deve fazer o signup", async function() {
  //given
  const userRepository = new UserRepositoryMemory()
  const signup = new Signup(userRepository)
  const inputSignup = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "12345678",
    age: 30
  }

  //when
  await signup.execute(inputSignup)

  //then - assert
  const login = new Login(userRepository)
  const inputLogin = {
    email: "john.doe@gmail.com",
    password: "12345678"
  }
  const output = await login.execute(inputLogin)
  expect(output.name).toBe("John Doe")
  expect(output.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTY3NzY3NTYwMDAwMCwiZXhwaXJlc0luIjoxMDAwMDAwMDB9.tLCoMVDWAf4Ir7oLSGChF-1Dm8IOEcXoGErCTfPZSTQ")
})
