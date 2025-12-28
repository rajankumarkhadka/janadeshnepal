import Container from "./Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className=" bg-[#2673b0] py-16 text-center text-white">
      <Container>
      <h1 className="text-xl md:text-4xl font-bold mb-4">
        {title}
      </h1>

      {subtitle && (
        <p className=" text-lg opacity-90">
          {subtitle}
        </p>
      )}
      </Container>
    </section>
  );
}
