import { useState } from "react";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import ProfileCard from "../../components/profile/ProfileCard";
import SecurityCard from "../../components/profile/SecurityCard";

import {
  getProfile,
  updateProfile,
} from "../../services/student/profile.service";

function Profile() {
  const [profile, setProfile] = useState(getProfile());

  const handleSave = (updatedProfile) => {
    const response = updateProfile(updatedProfile);

    if (response.success) {
      setProfile({
        ...updatedProfile,
      });
    }
  };

  return (
    <div className="space-y-8">

      <ProfileHeader
        profile={profile}
      />

      <ProfileStats
        profile={profile}
      />

      <ProfileCard
        profile={profile}
        onSave={handleSave}
      />

      <SecurityCard />

    </div>
  );
}

export default Profile;