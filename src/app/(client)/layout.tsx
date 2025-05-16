import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="main-layout">
      <header>Header chung cho toàn bộ ứng dụng</header>
      <main>{children}</main>
      <footer>Footer chung</footer>
    </div>
  );
}