import './globals.css'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark-mode"> 
        <nav>
          <div className="nav-container">
            <span className="nav-logo">AGWUNCHA ADIM</span>
            <ul className="nav-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <main>{children}</main>

        <footer>
          <div className="footer-content">
            <p className="copyright">© 2025 Agwuncha Adim</p>
          </div>
        </footer>
      </body>
    </html>
  );
}