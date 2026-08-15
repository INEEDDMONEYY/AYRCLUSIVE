import { useState } from "react";
import { Send } from "lucide-react";

interface MessageComposerProps {
  onSend: (body: string) => void;
}

export default function MessageComposer({ onSend }: MessageComposerProps) {
  const [body, setBody] = useState("");

  function handleSend() {
    const trimmed = body.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setBody("");
  }

  return (
    <div className="flex items-center gap-2 border-t border-[var(--border)] p-3">
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        placeholder="Write a message..."
        className="flex-1 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
      />
      <button
        type="button"
        onClick={handleSend}
        aria-label="Send message"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--primary)] text-white disabled:opacity-50"
        disabled={!body.trim()}
      >
        <Send size={16} />
      </button>
    </div>
  );
}
