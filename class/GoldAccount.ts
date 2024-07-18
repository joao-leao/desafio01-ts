import { DioAccount } from "./DioAccount"

export class GoldAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void =>{
        if(this.validateStatus()){
            this.setBalance(this.getBalance() + value + 10)
            console.log(`Deposito de R$${value} realizado com sucesso! Saldo atual: R$${this.getBalance()}`)
        }
    }
}