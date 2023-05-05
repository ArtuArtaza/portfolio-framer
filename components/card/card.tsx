import { FC } from "react";

interface CardProps {
  img: string;
  title: string;
  subtitle: string;
  link: string;
}
const Card: FC<CardProps> = ({ title, img, subtitle, link }) => {
  return (
    <div className="p-6">
      <img
        className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
        src={img}
        alt="card-img"
      />
      <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
        {title}
      </h2>
      <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {subtitle}
      </h1>

      <div className="mt-4">
        <a
          href="#"
          className="inline-flex items-center mt-4 font-semibold text-white lg:mb-0 hover:text-neutral-600"
          title="read more"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default Card;
