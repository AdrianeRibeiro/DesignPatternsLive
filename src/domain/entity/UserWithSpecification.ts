import UserAgeSpecification from "../especification/UserAgeSpecification";
import UserEmailSpecification from "../especification/UserEmailSpecification";
import UserNameSpecification from "../especification/UserNameSpecification";
import UserPasswordSpecification from "../especification/UserPasswordSpecification";

export default class User {
  constructor(readonly name: string, readonly email: string, readonly password: string, readonly age: number) {
    const nameSpecification = new UserNameSpecification()
    const emailSpecification = new UserEmailSpecification()
    const passwordSpecification = new UserPasswordSpecification()
    const ageSpecification = new UserAgeSpecification()

    if(!nameSpecification
        .and(emailSpecification)
        .and(passwordSpecification)
        .and(ageSpecification)
        .isSatisfiedBy(this)) {
      throw new Error("Invalid parameter")
    }
  }
}