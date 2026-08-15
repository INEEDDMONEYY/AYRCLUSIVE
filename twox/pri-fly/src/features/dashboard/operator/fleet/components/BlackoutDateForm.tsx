import { useState } from "react";
import Button from "../../../../../shared/ui/Button";
import Input from "../../../../../shared/ui/Input";

interface BlackoutDateFormProps {
  onAdd: (blackout: { startDate: string; endDate: string; reason?: string }) => void;
}

/** Inline form for blocking out dates this specific aircraft is unavailable. */
export default function BlackoutDateForm({ onAdd }: BlackoutDateFormProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const isValid = startDate !== "" && endDate !== "" && endDate >= startDate;

  function handleAdd() {
    if (!isValid) return;
    onAdd({ startDate, endDate, reason: reason.trim() || undefined });
    setStartDate("");
    setEndDate("");
    setReason("");
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-dashed border-[var(--border)] p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Input label="Start date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <Input label="End date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <Input
        label="Reason (optional)"
        placeholder="Scheduled maintenance"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <Button variant="secondary" onClick={handleAdd} disabled={!isValid} className="self-start">
        Add blackout date
      </Button>
    </div>
  );
}
