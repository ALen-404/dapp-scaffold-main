import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, TransactionSignature, PublicKey, Keypair,Connection } from '@solana/web3.js';
import { FC, useCallback, useMemo } from 'react';
import { notify } from "../utils/notifications";
import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';
import s from './RequestAirdrop.module.css'
import * as anchor from "@project-serum/anchor"
import idl from './transfer.json';
import * as splToken from "@solana/spl-token";
import axios from 'axios';


export const RequestAirdrop: FC = () => {
  // const { connection } = useConnection();
  const wallet = useWallet();
  const { getUserSOLBalance } = useUserSOLBalanceStore();
  const programID = new PublicKey(idl.metadata.address);

  const connection = new Connection("https://clean-solitary-wildflower.solana-mainnet.quiknode.pro/52f1d9f45e847af7f96c04ddf3b3ef2f7481ce3a/");

  const provider = useMemo(() => {
    return new anchor.AnchorProvider(connection, wallet, {
      commitment: "processed",
    })
  }, [connection, wallet])
  const program = useMemo(() => {
    return new anchor.Program(idl as any, programID, provider)
  }, [programID, provider])



  const onClick = useCallback(async () => {
    if (!wallet.publicKey) {
      console.log('error', 'Wallet not connected!');
      notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
      return;
    }

    let signature: TransactionSignature = '';
    try {
      // transfer
      signature = await program.methods
        .transferSol()
        .accounts({
          user: wallet.publicKey,
          recipient: new PublicKey('9UgMeYVrWrG5fbjkHos4FShJfchUkXZgNo2CV68h8Mjq'),
        })
        .rpc();
      console.log(" transaction signature", signature);

      let latestBlockhash = await connection.getLatestBlockhash()
      await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed');
     const a =  await axios.post(`https://nft.koalago.io/nft/addList/${wallet.publicKey.toBase58()}`,)
        console.log(a.data,'{wallet.publicKey');
        
      notify({ type: 'success', message: 'Mint successful!', txid: signature });

      getUserSOLBalance(wallet.publicKey, connection);
    } catch (error: any) {
      notify({ type: 'error', message: `Mint failed!`, description: error?.message, txid: signature });
      console.log('error', `Mint failed! ${error?.message}`, signature);
    }
  }, [wallet.publicKey, program.methods, connection, getUserSOLBalance]);



  return (

    <div className="flex flex-row justify-center ">
      <button
        className={s.transferBtn}
        onClick={onClick}
      >
        <span>MINT </span>
      </button>
    </div>


  );
};

