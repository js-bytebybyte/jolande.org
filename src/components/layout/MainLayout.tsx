import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        <div className="min-h-screen bg-background">
          <div className="mx-auto max-w-4xl px-6 py-8 pt-16 lg:pt-8">
            <Breadcrumb />
            {children}
          </div>

          {/* Footer */}
          <footer className="border-t bg-muted/50 py-8">
            <div className="mx-auto max-w-4xl px-6">
              <div className="text-center text-sm text-muted-foreground">
                <p className="mb-1">Jolande Steenput | Developer</p>
                <p className="mb-1">jolande.steenput@gmail.com</p>
                <p>Copyright © 2025 All Rights Reserved by Developer.</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
