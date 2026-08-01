import { useMemo, useState } from "react";

import UserHeader from "../../components/admin/UserHeader";
import UserStats from "../../components/admin/UserStats";
import UserFilter from "../../components/admin/UserFilter";
import UserTable from "../../components/admin/UserTable";
import UserCard from "../../components/admin/UserCard";
import UserFormModal from "../../components/admin/UserFormModal";
import UserDetailsDrawer from "../../components/admin/UserDetailsDrawer";
import UserDeleteDialog from "../../components/admin/UserDeleteDialog";

import adminUsersData from "../../data/adminUsersData";

function Users() {
  const [users] =
    useState(adminUsersData);

  const [search, setSearch] =
    useState("");

  const [role, setRole] =
    useState("All");

  const [view, setView] =
    useState("table");

  const [selectedUser, setSelectedUser] =
    useState(null);

  const [openForm, setOpenForm] =
    useState(false);

  const [openDrawer, setOpenDrawer] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const roleMatch =
        role === "All"
          ? true
          : user.role === role;

      const searchMatch =
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        roleMatch &&
        searchMatch
      );
    });
  }, [
    users,
    search,
    role,
  ]);

  return (
    <div className="space-y-8">

      <UserHeader />

      <UserStats />

      <UserFilter
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        view={view}
        setView={setView}
      />

      {view === "table" ? (
        <UserTable
          users={filteredUsers}
          onView={(user) => {
            setSelectedUser(user);
            setOpenDrawer(true);
          }}
          onEdit={(user) => {
            setSelectedUser(user);
            setOpenForm(true);
          }}
          onDelete={(user) => {
            setSelectedUser(user);
            setOpenDelete(true);
          }}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onView={(data) => {
                setSelectedUser(data);
                setOpenDrawer(true);
              }}
              onEdit={(data) => {
                setSelectedUser(data);
                setOpenForm(true);
              }}
              onDelete={(data) => {
                setSelectedUser(data);
                setOpenDelete(true);
              }}
            />
          ))}

        </div>
      )}

      <UserFormModal
        open={openForm}
        onClose={() =>
          setOpenForm(false)
        }
      />

      <UserDetailsDrawer
        open={openDrawer}
        user={selectedUser}
        onClose={() =>
          setOpenDrawer(false)
        }
      />

      <UserDeleteDialog
        open={openDelete}
        user={selectedUser}
        onClose={() =>
          setOpenDelete(false)
        }
        onConfirm={() =>
          setOpenDelete(false)
        }
      />

    </div>
  );
}

export default Users;