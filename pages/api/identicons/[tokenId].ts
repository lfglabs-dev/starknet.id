// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const Identicons = require("@nimiq/identicons");
Identicons.svgPath = "./identicons/identicons.min.svg";

export default async function getDataUrl(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    query: { tokenId },
  } = req;
  const svg = await Identicons.svg(tokenId as string);
  res.status(200).send(svg);
}
