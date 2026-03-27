export const metadata = {
  title: "Klankentapper Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="fixed inset-0">{children}</div>;
}
