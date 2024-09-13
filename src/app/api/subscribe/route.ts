import { NextResponse } from 'next/server';
import { MongoClient, Db, Collection } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = 'notifyMeDB';
const collectionName = 'emails';

interface EmailDocument {
  email: string;
  timestamp: Date;
}

async function connectToDatabase(): Promise<{ client: MongoClient; collection: Collection<EmailDocument> }> {
  const client = await MongoClient.connect(uri);
  const db: Db = client.db(dbName);
  const collection: Collection<EmailDocument> = db.collection(collectionName);
  return { client, collection };
}

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const { client, collection } = await connectToDatabase();

    const result = await collection.insertOne({ email, timestamp: new Date() });

    await client.close();

    return NextResponse.json({ message: 'Email stored successfully', insertedId: result.insertedId });
  } catch (error) {
    console.error('Error storing email:', error);
    return NextResponse.json({ error: 'An error occurred while storing the email' }, { status: 500 });
  }
}
