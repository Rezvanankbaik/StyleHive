import React from 'react';
import { Carousel, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const carouselItems = [
  {
    title: 'Summer Collection 2023',
    description: 'Temukan gaya musim panas terbaru dengan diskon eksklusif 30% untuk pembelian pertama',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/summer-collection'
  },
  {
    title: 'Premium Denim',
    description: 'Koleksi denim premium dengan kualitas terbaik dan potongan sempurna',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/denim'
  },
  {
    title: 'Limited Edition Sneakers',
    description: 'Rilis terbatas kolaborasi dengan desainer ternama dunia',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/sneakers'
  }
];

const CustomCarousel = () => (
  <Carousel autoplay dotPosition="bottom" effect="fade">
    {carouselItems.map((item, index) => (
      <div key={index} className="relative h-[500px]">
        {/* Gambar full width */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay konten di sisi kiri */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-8 md:ml-16 lg:ml-24 max-w-md text-left">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {item.title}
            </h2>
            <p className="text-white text-lg md:text-xl mb-6 drop-shadow-md">
              {item.description}
            </p>
            <Button
              type="primary"
              size="large"
              href={item.link}
              icon={<RightOutlined />}
              className="bg-white text-black font-semibold hover:bg-gray-200 transition-all border-none"
            >
              Beli Sekarang
            </Button>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
);

export default CustomCarousel;