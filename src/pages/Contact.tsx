import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Mail, Instagram, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter no mínimo 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada com sucesso! ✨",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Entre em Contato"
        subtitle="Estamos prontos para responder suas dúvidas"
        emoji="💬"
      />

      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <CardSpotlight>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="text-3xl font-bold mb-6">
                      Envie sua{" "}
                      <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                        Mensagem
                      </span>
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Escreva sua mensagem aqui..."
                        rows={6}
                        {...register("message")}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--primary-glow)/0.5)] transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardSpotlight>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <CardSpotlight>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">
                      Outras formas de{" "}
                      <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                        Contato
                      </span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Você também pode entrar em contato conosco através das nossas redes sociais. 
                      Estamos sempre prontos para responder suas dúvidas!
                    </p>

                    <div className="space-y-4 pt-4">
                      <a
                        href="mailto:energyballs@contato.com"
                        className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg transition-shadow">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">E-mail</p>
                          <p className="text-sm text-muted-foreground">
                            energyballs@contato.com
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://instagram.com/energyballs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg transition-shadow">
                          <Instagram className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">Instagram</p>
                          <p className="text-sm text-muted-foreground">@energyballs</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </CardSpotlight>

                <CardSpotlight className="bg-muted/20">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold">Horário de Atendimento</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Segunda a Sexta: 9h às 18h</p>
                      <p>Sábados: 9h às 13h</p>
                      <p>Domingos e Feriados: Fechado</p>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      Tempo médio de resposta: <span className="font-semibold text-primary">24 horas</span>
                    </p>
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
