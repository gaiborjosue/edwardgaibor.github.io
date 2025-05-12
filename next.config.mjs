/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/edwardgaibor.github.io",
  distDir: "./out",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
