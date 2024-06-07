import mongoose, { Schema, Document } from "mongoose";

interface IProfile extends Document {
  username: string;
  userOwner: mongoose.Types.ObjectId;
  name?: string;
  bio?: string;
  links?: string[];
  imageUrl?: string;
}

const ProfileSchema: Schema = new Schema({
  username: { type: String, required: true },
  userOwner: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  name: { type: String },
  bio: { type: String },
  links: [{ type: String }],
  imageUrl: { type: String },
});

export const ProfileModel = mongoose.model<IProfile>("profiles", ProfileSchema);

let profileModel: mongoose.Model<IProfile>;

export function getProfileModel(): mongoose.Model<IProfile> {
  if (!profileModel) {
    const ProfileSchema: Schema = new Schema({
      // ...
    });
    profileModel = mongoose.model<IProfile>("profiles", ProfileSchema);
  }
  return profileModel;
}
