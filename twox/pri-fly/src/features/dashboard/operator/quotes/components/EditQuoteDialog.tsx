import { useEffect, useState } from "react";
import Modal from "../../../../../shared/ui/Modal";
import Button from "../../../../../shared/ui/Button";
import Input from "../../../../../shared/ui/Input";
import type { OperatorQuoteDraft } from "../types";

interface EditQuoteDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (draft: OperatorQuoteDraft) => void;
  initialValues: OperatorQuoteDraft;
}

export default function EditQuoteDialog({ open, onClose, onSubmit, initialValues }: EditQuoteDialogProps) {
  const [draft, setDraft] = useState<OperatorQuoteDraft>(initialValues);

  useEffect(() => {
    if (open) setDraft(initialValues);
  }, [open, initialValues]);

  const isValid = draft.price > 0 && draft.aircraft.trim() !== "" && draft.validUntil !== "";

  function handleSubmit() {
    if (!isValid) return;
    onSubmit({ ...draft, aircraft: draft.aircraft.trim() });
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">Edit Quote</h2>
      <p className="mt-1 text-sm text-[var(--text-muted)]">Update the price, aircraft, or terms while this quote is still pending.</p>

      <div className="mt-4 flex flex-col gap-4">
        <Input
          label="Price (USD)"
          type="number"
          min="0"
          value={draft.price}
          onChange={(e) => setDraft((d) => ({ ...d, price: Number(e.target.value) }))}
        />
        <Input
          label="Assigned aircraft"
          placeholder="Gulfstream G280 — N425AL"
          value={draft.aircraft}
          onChange={(e) => setDraft((d) => ({ ...d, aircraft: e.target.value }))}
        />
        <Input
          label="Valid until"
          type="date"
          value={draft.validUntil}
          onChange={(e) => setDraft((d) => ({ ...d, validUntil: e.target.value }))}
        />
        <Input
          label="Notes / terms (optional)"
          placeholder="Includes catering, 2hr ground hold."
          value={draft.terms ?? ""}
          onChange={(e) => setDraft((d) => ({ ...d, terms: e.target.value }))}
        />
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={!isValid} style={{ background: "var(--primary)" }}>
          Save Changes
        </Button>
      </div>
    </Modal>
  );
}
