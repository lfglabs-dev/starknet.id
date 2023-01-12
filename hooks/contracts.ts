import { Abi, Contract } from "starknet";

import naming_abi from "../abi/naming_abi.json";
import starknet_id_abi from "../abi/starknet_id_abi.json";
import soulbound_abi from "../abi/soulbound_abi.json";
import { Provider } from "starknet";

export function useNamingContract() {
  const Naming = new Contract(
    naming_abi as Abi,
    process.env.NEXT_PUBLIC_NAMING_CONTRACT as string,
    new Provider({
      sequencer: {
        network: "goerli-alpha", // "mainnet-alpha"
      },
    })
  );
  return Naming;
}

export function useStarknetIdContract() {
  const StarknetId = new Contract(
    starknet_id_abi as Abi,
    process.env.NEXT_PUBLIC_STARKNETID_CONTRACT as string,
    new Provider({
      sequencer: {
        network: "goerli-alpha",
      },
    })
  );
  return StarknetId;
}

export function useSoulboundContract(contractAddress: string) {
  const Soulbound = new Contract(
    soulbound_abi as Abi,
    contractAddress,
    new Provider({
      sequencer: {
        network: "goerli-alpha",
      },
    })
  );
  return Soulbound;
}
