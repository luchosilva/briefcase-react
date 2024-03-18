interface CardProps {
  children: any;
}

export const Card = ({ children }: CardProps) => <div className="shadow-md rounded-md my-2 p-4 h-auto">{children}</div>;
