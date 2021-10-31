import React, {useState} from 'react';
import {WalletService} from "../services/WalletService";
import DownloadBtn from "./DownloadBtn";

interface IState {
    privateKey?: any,
    account?: any,
    accountStr?: any
}

class WalletCreator extends React.Component<any, IState> {
    account: any;

    render() {
        const walletService = new WalletService()

        const createWallet = () => {
            this.account = walletService.crateAccount("testttttt")
            this.setState({
                privateKey: this.account?.newWallet.privateKey
            })
        }

        return (
            <div className="WalletCreator">
                my wallet
                <button onClick={createWallet}>create wallet</button>
                <p> Account information:</p>
                <p>address: {this.account?.newWallet?.address}</p>
                {this.account ? (
                    <DownloadBtn fileName={"privateKey.txt"} fileContent={this.state.privateKey}
                                 buttonName={"download private key"}/>
                ) : ("")};
            </div>
        );
    }


}

export default WalletCreator;
