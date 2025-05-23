import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "growming-backend-production.up.railway.app",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
