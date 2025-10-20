/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['v5.airtableusercontent.com', 'source.unsplash.com', 'unsplash.com', 'blogger.googleusercontent.com', 'plus.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jahannuma.vercel.app',
                port: '',
                pathname: '/metaimages/**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
