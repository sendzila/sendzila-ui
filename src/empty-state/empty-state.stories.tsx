import { Button } from "../button/button";
import { EmptyState } from "./empty-state";

export const EmptyFirstRun = () => (
  <EmptyState
    title="No domains yet"
    hint="Verify a sending domain to start delivering."
    action={<Button kind="primary">Add domain</Button>}
  />
);
