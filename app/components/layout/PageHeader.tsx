import Container from "./Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  action,
}: PageHeaderProps) {
  return (
    <section className="bg-[#2673b0] py-16 text-center text-white  md:pt-[220px]">
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg font-bold opacity-90 mb-6">
            {subtitle}
          </p>
        )}

        {action && (
          <div className="flex justify-center">
            {action}
          </div>
        )}
        
      </Container>
    </section>
  );
}
