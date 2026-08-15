import { useState } from "react";
import Modal from "../../../../../shared/ui/Modal";
import Button from "../../../../../shared/ui/Button";
import Textarea from "../../../../../shared/ui/Textarea";

interface DeclineRFQDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}

export default function DeclineRFQDialog({ open, onClose, onConfirm }: DeclineRFQDialogProps) {
  const [reason, setReason] = useState("");

  function handleConfirm() {
    if (!reason.trim()) return;
    onConfirm(reason.trim());
    setReason("");
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">Decline RFQ</h2>
      <p className="mt-1 text-sm text-[var(--text-muted)]">
        Let the broker know why you're unable to fulfill this request.
      </p>

      <Textarea
        className="mt-4"
        rows={4}
        placeholder="Reason for declining..."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm} disabled={!reason.trim()} style={{ background: "var(--primary)" }}>
          Decline RFQ
        </Button>
      </div>
    </Modal>
  );
}
