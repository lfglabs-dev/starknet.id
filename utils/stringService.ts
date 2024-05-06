export function isStarkDomain(domain: string): boolean {
  return domain.endsWith(".stark");
}

export function minifyAddress(address: string): string {
  const firstPart = address.substring(0, 6);
  const secondPart = address.substring(address.length - 4, address.length);

  return (firstPart + "..." + secondPart).toLowerCase();
}

export function minifyDomain(
  domain: string,
  characterToBreak?: number
): string {
  if (domain.length > (characterToBreak ?? 18)) {
    const firstPart = domain.substring(0, 4);
    return (firstPart + "...").toLowerCase();
  } else {
    return domain.toLowerCase();
  }
}

export function is1234Domain(domain: string): boolean {
  return /^\d{4}$/.test(domain) && parseInt(domain) < 1234;
}

export function getDomainWithoutStark(str: string): string {
  if (str.endsWith(".stark")) {
    return str.slice(0, str.length - 6);
  } else {
    return str;
  }
}

export function isHexString(str: string): boolean {
  if (str === "") return true;
  return /^[0123456789abcdefABCDEF]+$/.test(str.slice(2));
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789-这来";

export function generateString(length: number): string {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function isSubdomain(domain: string): boolean {
  return Boolean((domain.match(/\./g) || []).length > 1);
}

// this makes sure hex string will be 64 chars
export function formatHexString(txHash: string) {
  // Remove the '0x' prefix if it exists
  if (txHash.startsWith("0x")) {
    txHash = txHash.slice(2);
  }

  // Calculate the number of leading zeros needed
  const totalHashLength = 64; // 64 characters for the hash
  const leadingZerosNeeded = totalHashLength - txHash.length;

  // Add the required leading zeros
  for (let i = 0; i < leadingZerosNeeded; i++) {
    txHash = "0" + txHash;
  }

  // Add the '0x' prefix back
  txHash = "0x" + txHash;

  return txHash.toLowerCase();
}

export function getImgUrl(image: string): string {
  if (image.startsWith("ipfs://")) {
    return image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
  } else {
    return image;
  }
}

export function shortenDomain(
  domain?: string,
  characterToBreak?: number
): string {
  if (!domain) return "";

  if (domain.length > (characterToBreak ?? 20)) {
    const firstPart = domain.substring(0, 4);
    const secondPart = domain.substring(domain.length - 3, domain.length);

    return (firstPart + "..." + secondPart).toLowerCase();
  } else {
    return domain.toLowerCase();
  }
}
