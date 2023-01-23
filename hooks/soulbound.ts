import { useSoulboundContract } from "./contracts";

type SoulboundData = {
  data?: any;
  error?: string;
};

export async function useSoulboundDataFromId(
  contractAddress: string,
  id: string
): Promise<SoulboundData> {
  const soulboundContract = useSoulboundContract(contractAddress);
  const data = await soulboundContract.call("get_uri", [Number(id)]);
  return { data, error: "error" };
}

export async function fetchSoulbounds(
  contractAddress: string,
  id: string
): Promise<SoulboundData> {
  return await useSoulboundDataFromId(contractAddress, id);
}
