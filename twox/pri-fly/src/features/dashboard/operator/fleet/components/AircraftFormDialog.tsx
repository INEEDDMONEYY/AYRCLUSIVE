import { useEffect, useState } from "react";
import Modal from "../../../../../shared/ui/Modal";
import Button from "../../../../../shared/ui/Button";
import Input from "../../../../../shared/ui/Input";
import { CABIN_CLASSES, AIRCRAFT_STATUSES, type CabinClass, type AircraftStatus } from "../../../../../config/aircraft";
import type { OperatorAircraftDraft } from "../types";

interface AircraftFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (draft: OperatorAircraftDraft) => void;
  initialValues?: OperatorAircraftDraft;
}

const emptyDraft: OperatorAircraftDraft = {
  tailNumber: "",
  model: "",
  category: "light_jet",
  passengerCapacity: 1,
  baseAirport: "",
  status: "active",
};

/** Shared dialog for both registering a new tail number and editing an existing aircraft's specs. */
export default function AircraftFormDialog({ open, onClose, onSubmit, initialValues }: AircraftFormDialogProps) {
  const [draft, setDraft] = useState<OperatorAircraftDraft>(initialValues ?? emptyDraft);
  const isEdit = Boolean(initialValues);

  useEffect(() => {
    if (open) setDraft(initialValues ?? emptyDraft);
  }, [open, initialValues]);

  const isValid = draft.tailNumber.trim() !== "" && draft.model.trim() !== "" && draft.baseAirport.trim() !== "";

  function handleSubmit() {
    if (!isValid) return;
    onSubmit({ ...draft, tailNumber: draft.tailNumber.trim().toUpperCase(), model: draft.model.trim(), baseAirport: draft.baseAirport.trim().toUpperCase() });
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">{isEdit ? "Edit Aircraft" : "Add Aircraft"}</h2>
      <p className="mt-1 text-sm text-[var(--text-muted)]">
        Register or update this aircraft's tail number and specs.
      </p>

      <div className="mt-4 flex flex-col gap-4">
        <Input
          label="Tail number"
          placeholder="N425AL"
          value={draft.tailNumber}
          onChange={(e) => setDraft((d) => ({ ...d, tailNumber: e.target.value }))}
        />
        <Input
          label="Model"
          placeholder="Gulfstream G280"
          value={draft.model}
          onChange={(e) => setDraft((d) => ({ ...d, model: e.target.value }))}
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-[var(--text-primary)]">Category</label>
          <select
            value={draft.category}
            onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value as CabinClass }))}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
          >
            {CABIN_CLASSES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Passenger capacity"
          type="number"
          min="1"
          value={draft.passengerCapacity}
          onChange={(e) => setDraft((d) => ({ ...d, passengerCapacity: Number(e.target.value) }))}
        />
        <Input
          label="Base airport"
          placeholder="TEB"
          value={draft.baseAirport}
          onChange={(e) => setDraft((d) => ({ ...d, baseAirport: e.target.value }))}
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-[var(--text-primary)]">Status</label>
          <select
            value={draft.status}
            onChange={(e) => setDraft((d) => ({ ...d, status: e.target.value as AircraftStatus }))}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
          >
            {AIRCRAFT_STATUSES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={!isValid} style={{ background: "var(--primary)" }}>
          {isEdit ? "Save Changes" : "Add Aircraft"}
        </Button>
      </div>
    </Modal>
  );
}
