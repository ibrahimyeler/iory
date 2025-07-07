import ElbiselerHeader from "../../components/elbiseler/ElbiselerHeader";
import ElbiselerFilters from "../../components/elbiseler/ElbiselerFilters";
import ElbiselerGrid from "../../components/elbiseler/ElbiselerGrid";

export default function ElbiselerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ElbiselerHeader />
      <ElbiselerFilters />
      <ElbiselerGrid />
    </div>
  );
} 