type Props = {
  title: string;
  image: string;
  description?: string;
};

export const CollectionCard = ({ title, image, description }: Props) => {
  return (
    <div className="group overflow-hidden rounded-xl border hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};
