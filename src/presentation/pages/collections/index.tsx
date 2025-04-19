import { Link } from "react-router-dom";
import { CollectionCard } from "@/presentation/components/cards/CollectionCard";

// Tạm thời hard-code, có thể thay bằng API sau
const MOCK_COLLECTIONS = [
  {
    slug: "fw24",
    name: "Fall Winter 2024",
    description: "Dark elegance and modern silhouettes for the season.",
    image: "/images/collections/fw24.jpg",
  },
  {
    slug: "ss25",
    name: "Spring Summer 2025",
    description: "Soft tones and flowy fabrics for a bright new start.",
    image: "/images/collections/ss25.jpg",
  },
];

const CollectionsPage = () => {
  return (
    <div className="container py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Collections</h1>
      <p className="text-muted-foreground">
        Discover our seasonal fashion collections.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {MOCK_COLLECTIONS.map((collection) => (
          <Link key={collection.slug} to={`/collection/${collection.slug}`}>
            <CollectionCard
              title={collection.name}
              image={collection.image}
              description={collection.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
