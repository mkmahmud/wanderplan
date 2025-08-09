// app/dashboard/layout.tsx (Dashboard Layout)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>

        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <aside className="w-full flex-none md:w-64">
            {/* Sidebar content */}
            Side
          </aside>
          <main className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</main> {/* Dashboard specific content */}
        </div>
      </body>
    </html>
  );
}
