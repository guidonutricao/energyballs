import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import productJar from "@/assets/product-jar.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-stone-50">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black leading-tight tracking-tight">
                <span className="gradient-text-animated text-glow inline-block hover:scale-105 transition-transform duration-300">
                  Energy Balls
                </span>{" "}
                <motion.span
                  className="inline-block text-7xl md:text-8xl lg:text-9xl"
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  🍫🌿
                </motion.span>
              </h1>

              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Doces Saudáveis, Energia Natural
              </p>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Prazer sem culpa, nutrição de verdade. As Energy Balls são uma alternativa saudável aos doces tradicionais —
                sem glúten, sem lactose e feitas com ingredientes 100% naturais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("receita")}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] transition-all duration-300 text-xl px-12 py-8 rounded-full font-semibold"
              >
                Quero Conhecer
              </Button>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-[2rem] blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={productJar}
              alt="Energy Balls - Pote de doces saudáveis"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;