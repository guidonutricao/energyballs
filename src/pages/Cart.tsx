import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import productJar from "@/assets/product-jar.png";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 29.90;
  const { toast } = useToast();

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const total = (pricePerUnit * quantity).toFixed(2);

  const handleCheckout = () => {
    toast({
      title: "Pedido confirmado! 🎉",
      description: "Obrigado por escolher energia natural e saborosa.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Seu Carrinho 🛒
            </h1>

            <div className="bg-card rounded-2xl shadow-xl p-8 space-y-8">
              {/* Product */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                  src={productJar}
                  alt="Energy Balls - Pote 200g"
                  className="w-32 h-32 object-contain"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">Energy Balls</h2>
                  <p className="text-muted-foreground">Pote 200g</p>
                  <p className="text-xl font-semibold text-primary mt-2">
                    R$ {pricePerUnit.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleDecrease}
                    className="h-10 w-10 rounded-full"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  
                  <span className="text-2xl font-bold w-12 text-center">
                    {quantity}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleIncrease}
                    className="h-10 w-10 rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold">Total:</span>
                  <span className="text-3xl font-bold text-primary">
                    R$ {total}
                  </span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full text-lg py-6 bg-[#FFB900] hover:bg-[#FFB900]/90 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Finalizar Compra
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
