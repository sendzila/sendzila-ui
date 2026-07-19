import { Input } from "./input";

export const States = () => (
  <div className="p-6 max-w-sm space-y-3">
    <Input placeholder="hello@acme.com" />
    <Input defaultValue="filled@acme.com" />
    <Input disabled placeholder="disabled" />
  </div>
);
