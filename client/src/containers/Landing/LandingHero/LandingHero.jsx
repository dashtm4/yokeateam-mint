import React, { useRef, useState } from "react";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { HiViewList as ListIcon } from "react-icons/hi";
import { create } from "ipfs-http-client";

import { contractABI, contractAddress } from "../../../contract";
import { BaseButton, Header } from "../../../components";

import "./LandingHero.scss";

const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const web3 = createAlchemyWeb3(API_URL);
const nftContract = new web3.eth.Contract(contractABI, contractAddress);

const client = create("https://ipfs.infura.io:5001/api/v0");

function LandingHero() {
  const fileInput = useRef(null);
  const [showSidebar, setToggleSidebar] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState([]);
  const [selectedImage, selectImage] = useState(null);

  const toggleSidebar = () => {
    setToggleSidebar(!showSidebar);
  };

  const mintAsset = () => {
    uploadFile();
    mintNFT();
  };

  const mintNFT = async () => {
    try {
      const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");

      const gasPrice =
        Math.ceil((await web3.eth.getGasPrice()) * 1.4) || 500000;

      const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: gasPrice,
        maxPriorityFeePerGas: 1999999987,
        data: nftContract.methods.mintNFT(PUBLIC_KEY, url).encodeABI(),
      };

      const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
      const transactionReceipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );
      console.log("Successfully Minted >>>", transactionReceipt);
    } catch {
      console.error("Failed to Mint");
    }
  };

  const uploadFile = async () => {
    try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      setUrl(url);
    } catch (error) {
      console.log(error.message);
    }
  };

  const selectFile = (e) => {
    const data = e.target.files[0];
    const readerAsArrayBuffer = new window.FileReader();
    const readerAsURL = new window.FileReader();

    readerAsArrayBuffer.readAsArrayBuffer(data);
    readerAsArrayBuffer.onloadend = () => {
      setFile(Buffer(readerAsArrayBuffer.result));
    };

    readerAsURL.readAsDataURL(data);
    readerAsURL.onload = ({ target }) => {
      selectImage(target.result);
    };

    e.preventDefault();
  };

  const invokeSelectFile = () => {
    selectImage(null);
    fileInput.current?.value.click();
  };

  return (
    <section className="base__container landing-hero">
      <Header show={showSidebar} toggle={toggleSidebar} />
      <ListIcon className="landing-hero__list-icon" onClick={toggleSidebar} />

      <div className="landing-hero__title">
        Random
        <br />
        NFT
        <br />
        Name
        <br />
      </div>
      <div className="landing-hero__description">This is a random message.</div>

      <BaseButton title="Buy Now" className="buy--button" />

      <div className="nft-card__wrapper">
        {selectedImage ? (
          <div className="nft-card__loaded-image">
            <img
              src={selectedImage}
              alt="nft-asset"
              className="nft-card__image"
            />
            <BaseButton
              title="Select Image"
              variant="outline"
              className="nft-card__select-button"
              onClick={invokeSelectFile}
            />
            <BaseButton
              title="Mint Now"
              variant="outline"
              className="nft-card__mint-button"
              onClick={mintAsset}
            />
          </div>
        ) : (
          <label className="nft-card__button">
            <input
              type="file"
              name="data"
              ref={fileInput}
              onChange={selectFile}
              className="nft-card__input"
            />
            Put your own NFT here
          </label>
        )}
      </div>
    </section>
  );
}

export default LandingHero;
