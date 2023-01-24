import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { rpcEndpoint, sender } from '../constants';

let senderClient: SigningCosmWasmClient | null = null;

const getClient = async () => {
    const senderWallet = await DirectSecp256k1HdWallet.fromMnemonic(
        sender.mnemonic,
        { prefix: 'juno' },
    );
    senderClient = await SigningCosmWasmClient.connectWithSigner(
        rpcEndpoint,
        senderWallet,
    );
};

export const runQuery = async (
    contractAddress: string,
    message: Record<string, any>,
) => {
    try {
        if (!senderClient) {
            await getClient();
        }
        const result = await senderClient.queryContractSmart(
            contractAddress,
            message,
        );
        return result;
    } catch {
        console.log('query error', contractAddress, message);
        return null;
    }
};
