import { Link, useLocation } from "react-router-dom";

const links = [
  { title: "Início", path: "/" },
  { title: "Quem Somos", path: "/quem-somos" },
  { title: "Conheça o Produto", path: "/conheca-energy-balls" },
  { title: "Referências", path: "/referencias" },
  { title: "Contato", path: "/contato" },
];

const Footer = () => {
  const location = useLocation();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleClick}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 ${
                  location.pathname === link.path ? "text-primary font-medium" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <p className="text-muted-foreground text-center">
            © 2025 Energy Balls. Feito com <span className="text-red-500">❤️</span> para uma vida mais saudável.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;