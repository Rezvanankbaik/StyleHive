import React, { useEffect, useState } from 'react';
import { Card, Rate, Button, Skeleton, Tag } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const categories = [
  'mens-shirts',
  'mens-shoes',
  'womens-dresses',
  'womens-shoes',
];

function ItemsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let all = [];
        for (const category of categories) {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await res.json();

          const items = data.products.map((item) => ({
            ...item,
            discount: Math.floor(Math.random() * 30) + 10, // 10–40%
          }));

          all = [...all, ...items];
        }
        setProducts(all);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 tracking-tight">
        🛍️ New Arrival Collection
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array(8).fill(null).map((_, i) => (
            <Skeleton key={i} active paragraph={{ rows: 4 }} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => {
            const originalPrice = (product.price * 100 / (100 - product.discount)).toFixed(2);

            return (
              <Card
                key={product.id}
                hoverable
                className="transition-all duration-300 border-none shadow-sm hover:shadow-lg rounded-xl overflow-hidden"
                cover={
                  <div className="relative">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-72 w-full object-cover"
                    />
                    <Tag
                      color="red"
                      className="absolute top-4 right-4 font-semibold text-xs"
                    >
                      -{product.discount}%
                    </Tag>
                    <Button
                      type="text"
                      shape="circle"
                      icon={<HeartOutlined className="text-white text-lg" />}
                      className="absolute top-4 left-4"
                      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                    />
                  </div>
                }
                actions={[
                  <div className="flex gap-2 px-4 pb-3 w-full">
                    <Button
                      type="primary"
                      className="bg-black text-white hover:bg-gray-800 w-full font-semibold"
                      size="middle"
                    >
                      Buy Now
                    </Button>
                    <Button
                      icon={<ShoppingCartOutlined />}
                      className="border-gray-300 hover:border-black text-black"
                      size="middle"
                    />
                  </div>
                ]}
              >
                <Meta
                  title={
                    <h3 className="text-base font-semibold text-gray-900 truncate">
                      {product.title}
                    </h3>
                  }
                  description={
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-black">${product.price}</span>
                        <span className="line-through text-sm text-gray-400">${originalPrice}</span>
                      </div>
                      <Rate
                        disabled
                        defaultValue={product.rating}
                        allowHalf
                        className="text-sm"
                        style={{ color: '#facc15' }}
                      />
                      <div className="text-xs text-gray-500 flex justify-between">
                        <span>{product.stock} in stock</span>
                        <span>{product.stock * 2} sold</span>
                      </div>
                    </div>
                  }
                />
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default ItemsSection;
