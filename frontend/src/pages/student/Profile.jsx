import { useState } from "react";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileCard from "../../components/profile/ProfileCard";
import ProfileStats from "../../components/profile/ProfileStats";
import SecurityCard from "../../components/profile/SecurityCard";

function Profile() {
  const [profile, setProfile] = useState({
    name: "DewaYadav",
    email: "dewayadav@messmate.com",
    phone: "+91 9876543210",
    college: "BIT Durg",
    room: "A-203",
    address: "Bhilai, Chhattisgarh",

    image:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=DewaYadav",
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8">

      <ProfileHeader
        name={profile.name}
        email={profile.email}
        image={profile.image}
      />

      <ProfileStats />

      <ProfileCard
        profile={profile}
        onChange={handleChange}
      />

      <SecurityCard />

    </div>
  );
}

export default Profile;