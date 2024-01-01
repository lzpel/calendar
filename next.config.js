/** @type {import('next').NextConfig} */
const project=process.cwd().substring(process.cwd().lastIndexOf('/'));
const url_prefix = process.env.NODE_ENV === "production" ? project : ""
const nextConfig = {
    output:"export",
    assetPrefix: url_prefix,
    basePath: url_prefix,
    env: {
        NEXT_PUBLIC_URL_PREFIX: url_prefix,
    },
}

module.exports = nextConfig
