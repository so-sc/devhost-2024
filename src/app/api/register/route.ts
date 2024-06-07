//app\api\products\route.js
import connectMongoDB from "@/lib/db";
import { ProfileModel } from "@/models/Profiles";
import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   await connectMongoDB();
//   try {
//     const response = await ProfileModel.find({});
//     return res.json({ response });
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// }

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDB();

  const profile = new ProfileModel(req.body);
  try {
    const response = await profile.save();
    return res.json({ response });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
