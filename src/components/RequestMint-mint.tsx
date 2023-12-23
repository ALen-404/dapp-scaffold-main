import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, TransactionSignature, PublicKey, Keypair } from '@solana/web3.js';
import { FC, useCallback, useMemo } from 'react';
import { notify } from "../utils/notifications";
import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';
import s from './RequestAirdrop.module.css'
import * as anchor from "@project-serum/anchor"
import idl from './idl.json';
import * as splToken from "@solana/spl-token";


export const RequestAirdrop: FC = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { getUserSOLBalance } = useUserSOLBalanceStore();
  const programID = new PublicKey(idl.metadata.address);


  const provider = useMemo(() => {
    return new anchor.AnchorProvider(connection, wallet, {
      commitment: "processed",
    })
  }, [connection, wallet])
  const program = useMemo(() => {
    return new anchor.Program(idl as any, programID, provider)
  }, [programID, provider])


  const mintAccount = new PublicKey("8MZacwbpKNaP6W2CycLFefvMVmheVoeNb5eiybqamag6");

  const onClick = useCallback(async () => {
    if (!wallet.publicKey) {
      console.log('error', 'Wallet not connected!');
      notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
      return;
    }

    let signature: TransactionSignature = '';


    const spenderAuthourity = PublicKey.findProgramAddressSync(
      [
        mintAccount.toBuffer(),
        Buffer.from("authority")
      ],
      programID
    )[0];



    const user = new Keypair();
    const recipient = new Keypair();
    const userTokenAccount = splToken.getAssociatedTokenAddressSync(
      mintAccount,
      wallet.publicKey
    );

    const ownerTokenAccount = splToken.getAssociatedTokenAddressSync(
      mintAccount,
      new PublicKey('GFN7iQnMec2G5eGG5FiK9CemZvXdebCME8g7h3k7UTs3')
    )

    try {

      // mint
      signature = await program.methods
        .mintNft()
        .accounts({
          user: wallet.publicKey,
          from: new PublicKey('GFN7iQnMec2G5eGG5FiK9CemZvXdebCME8g7h3k7UTs3'),
          recipient: new PublicKey('CKwDnkcEhv2DEt7U1FWBoWMYfnVPvV2pjguYgZr7rW9E'),
          mintAccount,
          userTokenAccount,
          fromTokenAccount: ownerTokenAccount,
          spenderAuthourity,
        })
        .rpc();
      console.log(" transaction signature", signature);

      let latestBlockhash = await connection.getLatestBlockhash()
      await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed');

      notify({ type: 'success', message: 'Mint successful!', txid: signature });

      getUserSOLBalance(wallet.publicKey, connection);
    } catch (error: any) {
      notify({ type: 'error', message: `Mint failed!`, description: error?.message, txid: signature });
      console.log('error', `Mint failed! ${error?.message}`, signature);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);



  return (

    <div className="flex flex-row justify-center">
      <button
        className={s.mintBtn}
        onClick={onClick}
      >
        <span>MINT </span>
      </button>
    </div>


  );
};

