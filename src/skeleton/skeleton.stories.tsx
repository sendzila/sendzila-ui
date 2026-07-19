import { CardSkeleton, Skeleton, TableSkeleton } from "./skeleton";

export const TableLoading = () => (
  <div className="p-6 card">
    <TableSkeleton cols={5} rows={6} loadingLabel="Loading" />
  </div>
);

export const CardLoading = () => (
  <div className="p-6 max-w-sm">
    <CardSkeleton lines={4} loadingLabel="Loading" />
  </div>
);

export const InlineSkeleton = () => (
  <div className="p-6 space-y-2">
    <Skeleton className="h-4 w-48 block" />
    <Skeleton className="h-4 w-32 block" />
  </div>
);
