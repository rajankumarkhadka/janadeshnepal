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
    <section className="bg-[#2673b0] py-16 text-center text-white pt-[220px] ">
      <Container>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg font-normal opacity-90 mb-6">
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
