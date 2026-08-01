import { useMemo, useState } from "react";

import MessHeader from "../../components/admin/MessHeader";
import MessStats from "../../components/admin/MessStats";
import MessFilter from "../../components/admin/MessFilter";
import MessTable from "../../components/admin/MessTable";
import MessCard from "../../components/admin/MessCard";
import MessFormModal from "../../components/admin/MessFormModal";
import MessDetailsDrawer from "../../components/admin/MessDetailsDrawer";
import MessDeleteDialog from "../../components/admin/MessDeleteDialog";

import adminMessData from "../../data/adminMessData";

function Messes() {
  const [messes] =
    useState(adminMessData);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const [view, setView] =
    useState("table");

  const [selectedMess, setSelectedMess] =
    useState(null);

  const [openForm, setOpenForm] =
    useState(false);

  const [openDrawer, setOpenDrawer] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const filteredMesses = useMemo(() => {
    return messes.filter((mess) => {
      const statusMatch =
        status === "All"
          ? true
          : mess.status === status;

      const searchMatch =
        mess.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        mess.owner
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        statusMatch &&
        searchMatch
      );
    });
  }, [
    messes,
    search,
    status,
  ]);

  return (
    <div className="space-y-8">

      <MessHeader />

      <MessStats />

      <MessFilter
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        view={view}
        setView={setView}
      />

      {view === "table" ? (
        <MessTable
          messes={filteredMesses}
          onView={(mess) => {
            setSelectedMess(mess);
            setOpenDrawer(true);
          }}
          onEdit={(mess) => {
            setSelectedMess(mess);
            setOpenForm(true);
          }}
          onDelete={(mess) => {
            setSelectedMess(mess);
            setOpenDelete(true);
          }}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredMesses.map((mess) => (
            <MessCard
              key={mess.id}
              mess={mess}
              onView={(data) => {
                setSelectedMess(data);
                setOpenDrawer(true);
              }}
              onEdit={(data) => {
                setSelectedMess(data);
                setOpenForm(true);
              }}
              onDelete={(data) => {
                setSelectedMess(data);
                setOpenDelete(true);
              }}
            />
          ))}

        </div>
      )}

      <MessFormModal
        open={openForm}
        onClose={() =>
          setOpenForm(false)
        }
      />

      <MessDetailsDrawer
        open={openDrawer}
        mess={selectedMess}
        onClose={() =>
          setOpenDrawer(false)
        }
      />

      <MessDeleteDialog
        open={openDelete}
        mess={selectedMess}
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

export default Messes;