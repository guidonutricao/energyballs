import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  emoji?: string;
}

const PageHeader = ({ title, subtitle, emoji }: PageHeaderProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {emoji && (
            <motion.div
              className="text-7xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              {emoji}
            </motion.div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {title.split(" ").map((word, index) => {
              // Check if word contains special characters that indicate it should be gradient
              const shouldBeGradient = word.includes("?") || word.includes("!");
              const cleanWord = word;
              
              return (
                <span key={index}>
                  {shouldBeGradient ? (
                    <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                      {cleanWord}
                    </span>
                  ) : (
                    cleanWord
                  )}{" "}
                </span>
              );
            })}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
