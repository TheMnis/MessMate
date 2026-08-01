import { useState } from "react";
import toast from "react-hot-toast";

import ProfileHeader from "../../components/owner/ProfileHeader";
import ProfileCard from "../../components/owner/ProfileCard";
import ChangePasswordCard from "../../components/owner/ChangePasswordCard";

import {
  getProfile,
  updateProfile,
} from "../../services/owner/profile.service";

function Profile() {
  const [profile, setProfile] = useState(getProfile());

  const handleSave = (updatedProfile) => {
    updateProfile(updatedProfile);

    setProfile({
      ...updatedProfile,
    });

    toast.success("Profile Updated Successfully");
  };

  return (
    <div className="space-y-8">
      <ProfileHeader />

      <ProfileCard
        profile={profile}
        onSave={handleSave}
      />

      <ChangePasswordCard />
    </div>
  );
}

export default Profile;
