import { create } from "zustand";
import { mockOperatorFleet } from "../data";
import type { AircraftBlackoutDate, OperatorAircraft, OperatorAircraftDraft } from "../types";
import type { AircraftStatus } from "../../../../../config/aircraft";

interface OperatorFleetState {
  fleet: OperatorAircraft[];
  addAircraft: (draft: OperatorAircraftDraft) => void;
  updateAircraft: (id: string, draft: OperatorAircraftDraft) => void;
  updateStatus: (id: string, status: AircraftStatus) => void;
  addBlackout: (id: string, blackout: Omit<AircraftBlackoutDate, "id">) => void;
  removeBlackout: (id: string, blackoutId: string) => void;
}

// Backed by zustand (not local useState) so edits persist when navigating
// between the fleet roster and an individual aircraft's detail page.
export const useOperatorFleet = create<OperatorFleetState>((set) => ({
  fleet: mockOperatorFleet,

  addAircraft: (draft) =>
    set((state) => ({
      fleet: [...state.fleet, { ...draft, id: `AC-${Date.now()}`, upcomingTrips: [], blackoutDates: [] }],
    })),

  updateAircraft: (id, draft) =>
    set((state) => ({
      fleet: state.fleet.map((aircraft) => (aircraft.id === id ? { ...aircraft, ...draft } : aircraft)),
    })),

  updateStatus: (id, status) =>
    set((state) => ({
      fleet: state.fleet.map((aircraft) => (aircraft.id === id ? { ...aircraft, status } : aircraft)),
    })),

  addBlackout: (id, blackout) =>
    set((state) => ({
      fleet: state.fleet.map((aircraft) =>
        aircraft.id === id
          ? { ...aircraft, blackoutDates: [...aircraft.blackoutDates, { ...blackout, id: `BO-${Date.now()}` }] }
          : aircraft
      ),
    })),

  removeBlackout: (id, blackoutId) =>
    set((state) => ({
      fleet: state.fleet.map((aircraft) =>
        aircraft.id === id
          ? { ...aircraft, blackoutDates: aircraft.blackoutDates.filter((b) => b.id !== blackoutId) }
          : aircraft
      ),
    })),
}));
