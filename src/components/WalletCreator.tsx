import React, {useState} from 'react';
import {WalletService} from "../services/WalletService";
import DownloadBtn from "./DownloadBtn";

interface IState {
    privateKey?: any,
    account?: any,
    accountStr?: any,
    passwordInput?: string,
    errors?: string
}

class WalletCreator extends React.Component<any, IState> {
    account: any;

    render() {
        const walletService = new WalletService()

        const createWallet = () => {
            const password = this.state?.passwordInput
            if (!password) {
                this.setState({
                    errors: "Password is required!"
                })
                return
            }
            this.setState({
                errors: ""
            })
            this.account = walletService.crateAccount(password)
            this.setState({
                privateKey: this.account?.newWallet.privateKey
            })
        }

        const handleChange = (e: any) => {
            this.setState({passwordInput: e.target.value}, () => {
            });
        }

        return (
            <div className="WalletCreator">
                <p>{this.state?.errors}</p>
                password:
                <input onChange={(e) => {
                    handleChange(e)
                }}/>
                <button onClick={createWallet}>create wallet</button>
                {this.account ? (
                    <div>
                        <p> Account information:</p>
                        <p>address: {this.account?.newWallet?.address}</p>

                        <DownloadBtn fileName={"privateKey.txt"} fileContent={this.state.privateKey}
                                     buttonName={"download private key"}/>
                    </div>
                ) : ("")}

            </div>
        );
    }


}

export default WalletCreator;
