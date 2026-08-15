import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../../../../shared/ui/Button";
import { useOperatorFleet } from "../fleet/hooks/useOperatorFleet";
import FleetAircraftCard from "../fleet/components/FleetAircraftCard";
import AircraftFormDialog from "../fleet/components/AircraftFormDialog";

export default function OperatorFleetPage() {
  const { fleet, addAircraft, updateStatus } = useOperatorFleet();
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-[var(--text-primary)]">Fleet</h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            {fleet.length} aircraft registered to your operation.
          </p>
        </div>
        <Button variant="primary" onClick={() => setIsAddOpen(true)} style={{ background: "var(--primary)" }}>
          <Plus size={16} className="mr-1.5" />
          Add aircraft
        </Button>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {fleet.map((aircraft) => (
          <FleetAircraftCard key={aircraft.id} aircraft={aircraft} onStatusChange={updateStatus} />
        ))}
      </div>

      <AircraftFormDialog
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={(draft) => {
          addAircraft(draft);
          setIsAddOpen(false);
        }}
      />
    </div>
  );
}
