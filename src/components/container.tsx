export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="max-w-screen-2xl mx-auto relative">{children}</div>;
}
