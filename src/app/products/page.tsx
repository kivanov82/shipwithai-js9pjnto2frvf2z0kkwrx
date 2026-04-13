import { Container, Grid, Section, Breadcrumb, Select, ProductCard } from '@/components/ui';

const products = [
  {
    id: '1',
    name: 'Smart Light Bulb Pro',
    description: 'Color-changing WiFi bulb with voice control and scheduling',
    price: 29.99,
    originalPrice: 39.99,
    image: '/api/placeholder/400/300',
    badge: { text: 'Best Seller', variant: 'success' as const },
    inStock: true
  },
  {
    id: '2',
    name: 'Smart Thermostat',
    description: 'Learning thermostat that saves energy and money',
    price: 199.00,
    image: '/api/placeholder/400/300',
    badge: { text: 'New', variant: 'info' as const },
    inStock: true
  },
  {
    id: '3',
    name: 'Smart Security Camera',
    description: '4K outdoor camera with AI-powered motion detection',
    price: 149.99,
    originalPrice: 179.99,
    image: '/api/placeholder/400/300',
    inStock: true
  },
  {
    id: '4',
    name: 'Smart Door Lock',
    description: 'Keyless entry with fingerprint and app control',
    price: 249.99,
    image: '/api/placeholder/400/300',
    badge: { text: 'Low Stock', variant: 'warning' as const },
    inStock: true
  },
  {
    id: '5',
    name: 'Smart Speaker Hub',
    description: 'Voice assistant with premium sound and home control',
    price: 89.99,
    image: '/api/placeholder/400/300',
    inStock: false
  },
  {
    id: '6',
    name: 'Smart Power Strip',
    description: '6 outlet surge protector with individual app control',
    price: 49.99,
    originalPrice: 69.99,
    image: '/api/placeholder/400/300',
    inStock: true
  }
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A to Z' }
];

export default function ProductsPage() {
  return (
    <>
      <Section size="sm">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products' }
            ]}
          />
          
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">All Products</h1>
            <p className="text-lg text-neutral-600">Transform your home with our smart devices</p>
          </div>
          
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-neutral-600">
              Showing {products.length} products
            </p>
            <Select
              options={sortOptions}
              placeholder="Sort by"
              className="w-48"
            />
          </div>
        </Container>
      </Section>
      
      <Section size="lg">
        <Container>
          <Grid cols={3}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={(id) => console.log('Add to cart:', id)}
              />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}