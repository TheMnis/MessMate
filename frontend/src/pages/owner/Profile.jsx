import ProfileHeader from "../../components/owner/ProfileHeader";
import ProfileCard from "../../components/owner/ProfileCard";
import ChangePasswordCard from "../../components/owner/ChangePasswordCard";

function Profile() {
  return (
    <div className="space-y-8">

      <ProfileHeader />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <ProfileCard />

        </div>

        <ChangePasswordCard />

      </div>

    </div>
  );
}

export default Profile;