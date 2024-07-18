import { CompanyAccount } from './class/CompanyAccount'
import { GoldAccount } from './class/GoldAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(2000)
peopleAccount.withdraw(500)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(25000)

const goldAccount: GoldAccount = new GoldAccount('João', 30)
goldAccount.deposit(3000)
