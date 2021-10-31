import Web3 from "web3";


export class WalletService {
    web3 = new Web3()

    crateAccount(password: string) {
        const newWallet = this.web3.eth.accounts.create();
        const encryptedWallet = this.web3.eth.accounts.encrypt(newWallet.privateKey, password); // can store to database

        console.log(newWallet, encryptedWallet)
        return {newWallet, encryptedWallet}
    }

    decryptAccount(encryptedWallet: any, password: string) {
        return this.web3.eth.accounts.decrypt(encryptedWallet, password)
    }

    // crateWallet(password: string, accountNumber: number) {
    //     const newWallet = this.web3.eth.accounts.wallet.create(accountNumber);
    //     const encryptedWallet = this.web3.eth.accounts.wallet.encrypt(newWallet.privateKey, password); // can store to database
    //
    //     console.log(newWallet, encryptedWallet)
    // }
    //
    // decryptWallet(encryptedWallet: any, password: string) {
    //     return this.web3.eth.accounts.wallet.decrypt(encryptedWallet, password)
    // }
}