"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface Profile {
  username: string;
  userOwner: string;
  name?: string;
  bio?: string;
  links?: string[];
  imageUrl?: string;
}

const IndexPage = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [newProfile, setNewProfile] = useState<Profile>({
    username: "",
    userOwner: "",
  });

  useEffect(() => {
    axios
      .get("/api/register")
      .then((response) => {
        setProfiles(response.data.response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/register", newProfile);
      setProfiles([...profiles, response.data.response]);
      setNewProfile({ username: "", userOwner: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProfile({ ...newProfile, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index}>
            {profile.username} ({profile.userOwner})
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={newProfile.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          User Owner:
          <input
            type="text"
            name="userOwner"
            value={newProfile.userOwner}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default IndexPage;
