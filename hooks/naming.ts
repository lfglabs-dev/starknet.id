/* eslint-disable react-hooks/rules-of-hooks */
import { utils } from "starknetid.js";
import { useNamingContract } from "./contracts";

type TokenIdData = {
  tokenId?: any;
  error?: string;
};

export async function useTokenIdFromDomain(
  domain: string
): Promise<TokenIdData> {
  const namingContract = useNamingContract();
  const encoded: bigint[] = utils.encodeDomain(domain);
  console.log("encoded", encoded);
  const data = await namingContract.call("domain_to_id", [encoded]);
  return { tokenId: data as any, error: "error" };
}

export async function fetchIdentity(domain: string): Promise<TokenIdData> {
  return await useTokenIdFromDomain(domain);
}
