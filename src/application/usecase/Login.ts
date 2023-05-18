import User from "../../domain/entity/User"
import TokenGenerator from "../../domain/service/TokenGenerator"
import UserRepository from "../../infra/repository/memory/UserRepositoryMemory"

export default class Login {
  constructor(readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email) 
    if(!user) throw new Error('Authenticated failed')

    const isValidPassword = await user.validatePassword(input.password)
    if(!isValidPassword) throw new Error('Authenticated failed')
    
    const tokenGenerator = new TokenGenerator("secret")
    const token = tokenGenerator.generate(user, 100000000, new Date("2023-03-01T10:00:00"))

    return {
      name: user.name.getValue(),
      token: token
    }
  }
}

type Input = {
  email: string,
  password: string
}

type Output = {
  name: string,
  token: string
}