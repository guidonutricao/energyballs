import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-background relative overflow-hidden">
      {/* Decorative shapes */}
      <motion.div 
        className="absolute top-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Comece Sua Jornada{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Saudável Hoje! 💪
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforme seus lanches com Energy Balls – energia natural e sabor em cada mordida.
            </p>
          </div>

          <MovingBorderButton
            borderRadius="2rem"
            onClick={() => scrollToSection("receita")}
            className="text-lg px-12 py-6"
            duration={3000}
          >
            Quero Fazer em Casa
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;