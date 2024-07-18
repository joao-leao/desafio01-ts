export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + value)
      console.log(`Voce depositou R$${value}! Saldo atual: R$${this.getBalance()}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.getBalance() >= value){
      this.setBalance(this.getBalance() - value)
      console.log(`Voce sacou R$${value}! Saldo atual: R$${this.getBalance()}`)
    }else{
      console.log('Saldo insuficiente')
    }
  }

  protected setBalance = (balance: number): void => {
    this.balance = balance
  }

  protected getBalance = (): number => {
    return this.balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
