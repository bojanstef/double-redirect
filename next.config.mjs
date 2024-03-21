/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: 'https://apple.co/45aL8Ej',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
