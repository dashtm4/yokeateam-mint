import React, { useRef, useState } from "react";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { HiViewList as ListIcon } from "react-icons/hi";
import { create } from "ipfs-http-client";

import { contractABI, contractAddress } from "../../../contract";
import { BaseButton, Header } from "../../../components";

import "./LandingHero.scss";


function LandingHero() {
  const fileInput = useRef(null);
  const [showSidebar, setToggleSidebar] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState([]);
  const [selectedImage, selectImage] = useState(null);

  const toggleSidebar = () => {
  };

  const mintAsset = () => {
  };

  const mintNFT = async () => {
  };

  const uploadFile = async () => {
  };

  const selectFile = (e) => {
  };

  const invokeSelectFile = () => {
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
