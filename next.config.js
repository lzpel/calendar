/** @type {import('next').NextConfig} */
const project=process.cwd().substring(process.cwd().lastIndexOf('/'));
const nextConfig = {
    output:"export",
    env: {
        NEXT_PUBLIC_URL_PREFIX: process.env.NODE_ENV === "production" ? project : "/",
    },
}

module.exports = nextConfig
