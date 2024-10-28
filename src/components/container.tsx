export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-screen-2xl flex flex-col mx-auto">{children}</div>
  );
}
