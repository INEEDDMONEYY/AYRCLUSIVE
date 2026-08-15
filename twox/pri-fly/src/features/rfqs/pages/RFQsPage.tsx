import { useAuthStore } from "../../../store/authStore";
import OperatorRFQsPage from "../../dashboard/operator/pages/OperatorRFQsPage";

export default function RFQsPage() {
  const user = useAuthStore((state) => state.user);

  if (user?.role === "OPERATOR") {
    return <OperatorRFQsPage />;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-slate-900">RFQs</h1>
      <p className="mt-2 text-sm text-slate-500">RFQs page — placeholder</p>
    </div>
  );
}
