export default function Loading() {
  return (
    <div className="min-h-[55vh] animate-pulse px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="h-3 w-24 rounded bg-slate-100" />
        <div className="mt-4 h-9 w-80 max-w-full rounded bg-slate-100" />
        <div className="mt-3 h-4 w-[32rem] max-w-full rounded bg-slate-100" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((item) => <div key={item} className="h-36 rounded-2xl border bg-white" />)}
        </div>
      </div>
    </div>
  );
}
