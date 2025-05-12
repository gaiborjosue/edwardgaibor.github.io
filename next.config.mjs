/** @type {import('next').NextConfig} */
const nextConfig = {

  basePath: "/edwardgaibor.github.io",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
