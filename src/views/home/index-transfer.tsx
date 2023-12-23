// Next, React
import { FC, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestMint';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

import Image from 'next/image';
import s from './home.module.css'
import { Connection, PublicKey } from '@solana/web3.js';
import axios from 'axios';
import { notify } from 'utils/notifications';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();

  useEffect(() => {
    if (wallet?.publicKey) {
      setInterval(async () => {
        const resData = await axios.get(`https://nft.koalago.io/nft/getWinnAddr`)
        if (resData.data.data?.includes(wallet.publicKey.toBase58())) {
          notify({ type: 'success', message: 'Congratulations on winning a koala nft!' });
        }
      }, 10000)
    }

  }, [wallet.publicKey])
  return (

    <div className="md:hero mx-auto p-4 ">
      <div className="md:hero-content flex flex-col">
        {/* <div className='mt-6'>
          <h1 className="text-center color-white text-4xl  font-bold text-white mb-4">
            MINT
          </h1>
        </div>
        <h4 className="md:w-full color-white  md:text-md text-center text-slate-200 my-2">
          <p>SPL-20</p>
          <p className='text-slate-400 leading-relaxed'>Mints an NFT and Inscribes a txt file</p>
        </h4> */}
        <div className={s.indexBg}>

          <div
            className={s.indexBgImage_T}
          >
            <Image
              src="/background.svg"
              alt="solana icon"
              width={3000}
              height={3000}
            />
          </div>
          <div className={s.nftMintBox}>
            <div className={s.nftImg}>
              <Image
                src="/koala.svg"
                alt="solana icon"
                width={156}
                height={156}
              />
            </div>
            <p className={s.nftInfo}>
              NFTS: 10000
            </p>
            <p className={s.nftInfo}>
              Mint price: 0.05sol
            </p>
            <p className={s.nftInfo}>
              Supply minted: 0/10000
            </p>
            <RequestAirdrop />
          </div>
        </div>

      </div>
    </div>
  );
};
