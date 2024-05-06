import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;
  const response = await fetch(`https://discord.com/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    },
  });
  const body = await response.json();
  res.status(200).json(body);
}
