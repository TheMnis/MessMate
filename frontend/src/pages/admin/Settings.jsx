import SettingsHeader from "../../components/admin/SettingsHeader";
import GeneralSettings from "../../components/admin/GeneralSettings";
import SecuritySettings from "../../components/admin/SecuritySettings";
import NotificationSettings from "../../components/admin/NotificationSettings";
import SystemSettings from "../../components/admin/SystemSettings";
import BackupRestore from "../../components/admin/BackupRestore";

function Settings() {
  return (
    <div className="space-y-8">

      <SettingsHeader />

      <div className="grid gap-8 xl:grid-cols-2">

        <GeneralSettings />

        <SecuritySettings />

      </div>


      <div className="grid gap-8 xl:grid-cols-2">

        <NotificationSettings />

        <SystemSettings />

      </div>


      <BackupRestore />

    </div>
  );
}

export default Settings;