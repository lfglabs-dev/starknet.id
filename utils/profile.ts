import { Provider } from "starknet";
import { activityContractsMainnet } from "../utils/constants";
import { ActivityProps, TransactionObject } from "../types";

export async function getLastBlockNumber() {
  const provider = new Provider({
    sequencer: {
      network: "goerli-alpha",
    },
  });
  let hasBlockNb = false;
  while (!hasBlockNb) {
    try {
      const block = await provider.getBlock("latest");
      if (block.block_number) {
        hasBlockNb = true;
        return block.block_number;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export async function retrieveActivities(
  block: number,
  contractAddress: string
) {
  let needFetch = true;
  let activities: ActivityProps[] = [];
  let fromBlock = 0;
  let toBlock = 0;
  while (needFetch && fromBlock >= 0) {
    toBlock = toBlock === 0 ? block : toBlock - 10000;
    fromBlock = fromBlock === 0 ? block - 10000 : fromBlock - 10000;
    const data = await fetch(
      `https://api.starkscan.co/api/v0/transactions?from_block=${fromBlock}&to_block=${toBlock}&contract_address=${contractAddress}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_ASPECT_MAINNET}`,
        },
      }
    );
    const dataToJson = await data.json();
    activities.push(...buildActivities(dataToJson.data));
    if (activities.length >= 3) {
      const threeActivities = activities.slice(-3);
      needFetch = false;
      return { activities: threeActivities, lastBlock: fromBlock };
    }
  }
}

export function buildActivities(data: TransactionObject[]) {
  const activities: ActivityProps[] = [];
  data.forEach((tx) => {
    if (tx.calldata && tx.calldata.length > 0) {
      const n = Number(tx.calldata[0]);
      for (let i = 0; i < n; i++) {
        const contractAddr = tx.calldata[1 + i * 4];
        let key = Object.entries(activityContractsMainnet).find(
          ([k, v]) => v === contractAddr
        );

        if (key) {
          activities.push({
            transaction_hash: tx.transaction_hash,
            block_number: tx.block_number as number,
            contract_address: contractAddr,
            type: key[0],
            timestamp: tx.timestamp,
            date: new Date(tx.timestamp * 1000).toLocaleDateString("en-uk", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          });
        }
      }
    }
  });

  return activities;
}
