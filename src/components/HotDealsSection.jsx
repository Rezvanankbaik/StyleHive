import React, { useEffect, useState } from 'react';
import { Card, Button, Rate, Tag } from 'antd';

const { Meta } = Card;

function HotDealsSection() {
  const [hotItems, setHotItems] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-shoes')
      .then(res => res.json())
      .then(data => {
        const selected = data.products.slice(0, 4).map(product => ({
          ...product,
          discount: Math.floor(Math.random() * 30) + 10 // Diskon 10–40%
        }));
        setHotItems(selected);
      });
  }, []);

  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">🔥 Hot Deals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {hotItems.map(item => {
          const originalPrice = (item.price * 100 / (100 - item.discount)).toFixed(2);

          return (
            <Card
              key={item.id}
              hoverable
              className="rounded-xl overflow-hidden border-none shadow-sm hover:shadow-md transition-all"
              cover={
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />
                  <Tag
                    color="volcano"
                    className="absolute top-2 right-2 font-semibold text-xs"
                  >
                    -{item.discount}%
                  </Tag>
                </div>
              }
            >
              <Meta
                title={<h3 className="text-base font-semibold text-gray-900 truncate">{item.title}</h3>}
                description={
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-black">${item.price}</span>
                      <span className="line-through text-sm text-gray-400">${originalPrice}</span>
                    </div>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={item.rating}
                      className="text-sm"
                      style={{ color: '#facc15' }}
                    />
                  </div>
                }
              />
              <Button
                type="primary"
                block
                size="middle"
                className="mt-4 bg-black text-white hover:bg-gray-800 font-semibold"
              >
                Beli Sekarang
              </Button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default HotDealsSection;
