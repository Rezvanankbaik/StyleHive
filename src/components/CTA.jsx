import React from 'react';
import { Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';

function CTA() {
  return (
    <div className="relative py-20 px-4 text-center bg-black text-white overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Promo"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          🎁 Flash Sale Spesial Hari Ini!
        </h2>
        <p className="mb-6 text-base md:text-lg drop-shadow-md">
          Dapatkan <strong>diskon hingga 50%</strong> untuk koleksi terbaru kami. Penawaran terbatas hanya hari ini!
        </p>
        <Button
          type="primary"
          size="large"
          icon={<FireOutlined />}
          className="bg-white text-black hover:bg-gray-200 border-none font-semibold"
        >
          Lihat Penawaran
        </Button>
      </div>
    </div>
  );
}

export default CTA;
