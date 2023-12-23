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
import { Progress } from 'antd';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const [progressValue,setProgressValue] = useState('0')
  const nftMintPublicKey = new PublicKey("8MZacwbpKNaP6W2CycLFefvMVmheVoeNb5eiybqamag6");
  const nftWalletPublicKey = new PublicKey("GFN7iQnMec2G5eGG5FiK9CemZvXdebCME8g7h3k7UTs3");

  const connection = new Connection("https://clean-solitary-wildflower.solana-mainnet.quiknode.pro/52f1d9f45e847af7f96c04ddf3b3ef2f7481ce3a/");
  const [nftBalance, setNftBalance] = useState(0)

  const getProgress = async ()=>{
    const resData = await axios.get(`https://nft.koalago.io/nft/getSchedule`)
    setProgressValue(resData.data.data)
  }

  const getAddlist = async ()=>{
    const resData = await axios.get(`https://nft.koalago.io/nft/getSchedule`)
    setProgressValue(resData.data.data)
  }

  const getNFTBalance = useCallback(async () => {
    try {
      const tokenAccountInfo = await connection.getParsedTokenAccountsByOwner(nftWalletPublicKey, {
        mint: nftMintPublicKey,
      });

      if (tokenAccountInfo && tokenAccountInfo.value && tokenAccountInfo.value.length > 0) {
        const nftBalance = tokenAccountInfo.value[0].account.data.parsed.info.tokenAmount.uiAmount;
        console.log('NFT Balance:', nftBalance);
        setNftBalance(nftBalance);
      } else {
        console.log('No NFT balance found for this wallet.');
      }
    } catch (error) {
      console.error('Error fetching NFT balance:', error);
    }
  }, [nftWalletPublicKey, nftMintPublicKey, connection]);

  useEffect(() => {
    if (wallet?.publicKey) {
      setInterval(async () => {
        const resData = await axios.get(`https://nft.koalago.io/nft/getWinnAddr`)
        if (resData.data.data?.includes(wallet.publicKey.toBase58())) {
          notify({ type: 'success', message: 'Congratulations on winning a koala nft!' });
        }
      }, 10000)
    }
    getProgress()
    getNFTBalance()

  }, [wallet.publicKey])

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    
    // 检查 URL 是否包含特定参数
    const checkURLParameter = (parameterName) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.has(parameterName);
    };

    // 获取特定参数的值
    const getURLParameterValue = (parameterName) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(parameterName);
    };

    // 示例用法 - 替换为您要检查和获取的参数名称
    const paramName = 'yourParameterName';

    if (checkURLParameter(paramName)) {
      const paramValue = getURLParameterValue(paramName);
      console.log(`URL 中包含参数 '${paramName}'，其值为 '${paramValue}'`);
      // 在这里可以对参数值进行其他操作，比如更新组件状态等
    } else {
      console.log(`URL 中未找到参数 '${paramName}'`);
    }
  }, []); 
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
            {/* <Image
              src="/background.svg"
              alt="solana icon"
              width={3000}
              height={3000}
            /> */}
            <video autoPlay muted>
              <source src="/background.MP4" type="video/mp4" />
            </video>
          </div>
          <div className={s.nftMintBox}>
            <p className={s.nftInfo}>
              Tokens: 10,000,000,000
            </p>
            <p className={s.nftInfo}>
              Tokens per mint: 200,000
            </p>
            <p className={s.nftInfo}>
              Mint Price: 0.118 SOL
            </p>
            <p className={s.nftInfo}>
              Supply Minted: {50000 - nftBalance}/50000
            </p>
            <div className={s.progressBox}>
            <Progress percent={Number(progressValue)} size="small" strokeColor={{ from: '#9011FF', to: '#063FD4' }} />
            </div>
            <RequestAirdrop />
          </div>
        </div>

      </div>
    </div>
  );
};
