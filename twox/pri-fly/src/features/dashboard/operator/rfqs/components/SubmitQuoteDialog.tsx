import { useState } from "react";
import Modal from "../../../../../shared/ui/Modal";
import Button from "../../../../../shared/ui/Button";
import Input from "../../../../../shared/ui/Input";
import Textarea from "../../../../../shared/ui/Textarea";
import type { OperatorRFQQuote } from "../types";

interface SubmitQuoteDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (quote: OperatorRFQQuote) => void;
}

export default function SubmitQuoteDialog({ open, onClose, onSubmit }: SubmitQuoteDialogProps) {
  const [price, setPrice] = useState("");
  const [aircraft, setAircraft] = useState("");
  const [terms, setTerms] = useState("");

  const isValid = price.trim() !== "" && aircraft.trim() !== "" && terms.trim() !== "";

  function handleSubmit() {
    if (!isValid) return;
    onSubmit({
      price: Number(price),
      aircraft: aircraft.trim(),
      terms: terms.trim(),
      submittedAt: new Date().toISOString(),
    });
    setPrice("");
    setAircraft("");
    setTerms("");
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">Submit Quote</h2>
      <p className="mt-1 text-sm text-[var(--text-muted)]">
        Provide pricing, aircraft, and terms for the broker to review.
      </p>

      <div className="mt-4 flex flex-col gap-4">
        <Input
          label="Price (USD)"
          type="number"
          min="0"
          placeholder="18500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Aircraft"
          placeholder="Gulfstream G550 — N123AB"
          value={aircraft}
          onChange={(e) => setAircraft(e.target.value)}
        />
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-[var(--text-primary)]">Terms</label>
          <Textarea
            rows={3}
            placeholder="Payment terms, cancellation policy, inclusions..."
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={!isValid} style={{ background: "var(--primary)" }}>
          Submit Quote
        </Button>
      </div>
    </Modal>
  );
}
