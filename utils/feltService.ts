import BN from "bn.js";
import { isHexString } from "./stringService";

export function hexToDecimal(hex: string | undefined): string {
  if (hex === undefined) return "";
  else if (!isHexString(hex)) {
    throw new Error("Invalid hex string");
  }

  return new BN(hex.slice(2), 16).toString(10);
}

export function fromUint256(low: bigint, high: bigint): string {
  const bhigh = (high as any) << BigInt(128);
  return ((low as any) + bhigh).toString(10);
}

export function stringToHex(str: string): string {
  if (!str) return "";
  const buffer = Buffer.from(str, "utf-8");

  return "0x" + buffer.toString("hex");
}
