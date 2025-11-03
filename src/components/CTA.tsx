import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Sparkles } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="comprar" className="py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-background relative overflow-hidden">
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
              Energia Natural{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                ao Seu Alcance!
              </span>{" "}
              🍫
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Adquira agora seu Energy Balls e transforme seus lanches com energia e sabor naturais.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <MovingBorderButton
              borderRadius="2rem"
              onClick={() => navigate("/loading")}
              className="bg-[#FFB900] hover:bg-[#FFB900]/90 text-black font-bold text-xl px-16 py-8 shadow-2xl"
              containerClassName="inline-block"
              borderClassName="bg-gradient-to-r from-[#FFB900] via-[#FFA500] to-[#FFB900]"
              duration={2000}
            >
              <span className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                Comprar Agora
                <Sparkles className="w-6 h-6" />
              </span>
            </MovingBorderButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;