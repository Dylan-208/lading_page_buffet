import { ContainerCard } from "./styled";

interface Service {
  titulo: string;
  url: string;
}

type CardProps = {
  serviceList: Service[];
};

function Card({ serviceList }: CardProps) {
  return (
    <>
      {serviceList.map((item, index) => {
        return (
          <ContainerCard
            $image={item.url}
            key={item.titulo}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: index * 0.3 },
            }}
            viewport={{ amount: 0.1, once: true }}
          >
            <p>{item.titulo}</p>
          </ContainerCard>
        );
      })}
    </>
  );
}

export default Card;
