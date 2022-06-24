// @ts-nocheck
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { ethers } from "ethers";
import { CONTACT_ADDRESS, CONTACT_ABI } from "../../../config";
import Example from "../../../blockchain/build/contracts/Example.json";

export const Contract: NextPage = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const accountsEth = await signer.getAddress();
        console.log(accountsEth, "accountsEth");

        setAccount(accountsEth);

        // const contract = new ethers.Contract(CONTACT_ADDRESS, CONTACT_ABI, provider);
        // const currentValue = await contract.count();
        // console.log(currentValue, 'currentValue')
        console.log(Example, "Example");
        const exampleContract = new ethers.Contract(
          Example.networks[5777].address,
          Example.abi,
          provider
        );
        const daiWithSigner = exampleContract.connect(signer);
        const dai = ethers.utils.parseUnits('1.0', 18);
        const tx = daiWithSigner.transfer('ricmoo.firefly.eth', dai);
        // console.log(exampleContract, "exampleContract");
        // await provider.getSigner();
        // const tx = await exampleContract.increment();
        const receipt = await tx.wait(2);
        const sumEvent = receipt.events.pop();
        // assert.equal(sumEvent.event, "Return");
        // assert.equal(sumEvent.eventSignature, "Return(uint256)");
        const sum = sumEvent.args[0]
        console.log(sum, 'sum')
      } catch (e) {
        console.error(e);
      }
    };

    load();
  }, []);

  return (
    <div>
      your account is: {account}
      <div>
        {/* {Object.keys(contacts).map((contact, index) => (
          <div key={index}>
            <span>{contacts[index].name}</span>
            <span>
              <b>{contacts[index].phone}</b>
            </span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Contract;
