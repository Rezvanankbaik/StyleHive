import React from 'react';
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">StyleHive</h2>
          <p className="text-sm text-gray-400">
            Tampil trendi dengan koleksi fashion terbaru kami. Kualitas terbaik, harga bersahabat.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Beranda</a></li>
            <li><a href="#" className="hover:text-white">Produk</a></li>
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Cara Belanja</a></li>
            <li><a href="#" className="hover:text-white">Pengembalian</a></li>
            <li><a href="#" className="hover:text-white">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <EnvironmentOutlined className="mt-1" />
              Jl. Fashion No. 123, Jakarta
            </li>
            <li className="flex items-center gap-2">
              <PhoneOutlined />
              +62 812 3456 7890
            </li>
            <li className="flex items-center gap-2">
              <MailOutlined />
              support@tokopakaian.com
            </li>
            <li className="flex items-center gap-3 mt-2">
              <a href="#"><FacebookFilled className="text-xl hover:text-blue-500" /></a>
              <a href="#"><TwitterSquareFilled className="text-xl hover:text-blue-400" /></a>
              <a href="#"><InstagramFilled className="text-xl hover:text-pink-400" /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 StyleHive. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
