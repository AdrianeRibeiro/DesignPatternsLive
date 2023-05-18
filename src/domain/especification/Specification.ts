export interface Specification<T> {
  isSatisfiedBy (t: T): boolean
  and (other: Specification<T>): Specification<T>
}

export abstract class AbstractSpecification<T> implements Specification<T> {
  abstract isSatisfiedBy(t: T): boolean;

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification(this, other)
  }
}

export class AndSpecification<T> extends AbstractSpecification<T> {
  private left: Specification<T>
  private rigth: Specification<T>

  constructor(left: Specification<T>, rigth: Specification<T>) {
    super()
    this.left = left
    this.rigth = rigth
  }

  isSatisfiedBy(t: T): boolean {
    return this.left.isSatisfiedBy(t) && this.rigth.isSatisfiedBy(t)
  }
}