export function DemoPreview({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="bg-card space-y-2 rounded border p-2">
      <h2 className="text-lg font-semibold">{name}</h2>

      <div className="bg-background rounded border p-4">{children}</div>
    </div>
  );
}
