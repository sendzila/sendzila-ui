import { Button } from "./button";

export const Kinds = () => (
  <div className="flex gap-3 p-6">
    <Button kind="primary">Send email</Button>
    <Button>Default</Button>
    <Button kind="danger">Delete</Button>
    <Button kind="ghost">Ghost</Button>
    <Button disabled>Disabled</Button>
  </div>
);
