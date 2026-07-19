import { ErrorState } from "./error-state";

export const ErrorWithRetry = () => (
  <ErrorState error={new Error("request failed (503)")} onRetry={() => {}} retryLabel="Retry" />
);
