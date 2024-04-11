// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Identicons from "starknetid-identicons";
Identicons.svgPath = "./identicons/identicons.min.svg";

export default async function getDataUrl(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    query: { tokenId },
  } = req;
  const svg = await Identicons.svg(tokenId);
  // Set the Content-Type header to image/svg+xml so the browser treats the response as an SVG image
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
