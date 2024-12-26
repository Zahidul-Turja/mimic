/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ik.imagekit.io",
      "raw.githubusercontent.com",
      "www.wizardingworld.com",
      "images.pexels.com",
      "www.themealdb.com",
    ],
  },
  env: {
    FAVQ_API_KEY: "648c79d3eb2f04824485fa8e114b3a12",
  },
};

export default nextConfig;
