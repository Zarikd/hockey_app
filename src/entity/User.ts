/*eslint-disable*/
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  guid: number

  @Column()
  email: string

  @Column()
  passwordHash: string

  @Column()
  secondName: string

  @Column()
  firstName: string

  @Column()
  dateBirth: string

  constructor() {
    this.guid = 0
    this.secondName = ''
    this.firstName = ''
    this.dateBirth = ''
    this.email = ''
    this.passwordHash = ''
  }
}