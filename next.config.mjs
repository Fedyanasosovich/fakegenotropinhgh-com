/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakegenotropinhgh.com"],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
