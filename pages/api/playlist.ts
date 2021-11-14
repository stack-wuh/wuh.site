// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { music } from "@/constant/res.json";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.status(200).json(music);
}
