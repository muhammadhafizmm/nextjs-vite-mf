/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const packageJSON = require("./package.json");

const deps = packageJSON.dependencies;

const NextFederationConfig = () => ({
  name: "remote",
  remotes: {},
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    // Components
    "./components/CustomButton": "./src/components/CustomButton/index",
  },
  shared: {
    "@efishery/onefish": {
      eager: false,
      requiredVersion: deps["@efishery/onefish"],
      singleton: true,
    },
    "@chakra-ui/": {
      eager: false,
      requiredVersion: false,
      singleton: true,
    },
    "@emotion/": {
      eager: false,
      requiredVersion: false,
      singleton: true,
    },
  },
  extraOptions: {
    debug: true,
    exposePages: false,
    enableImageLoaderFix: true,
    enableUrlLoaderFix: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "export",
  // Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Change the output directory `out` -> `dist`
  distDir: "build",
  // Images source domain
  images: {
    domains: ["efishery.com", "*.efishery.com"],
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin(NextFederationConfig())
    );
    return config;
  },
};

module.exports = nextConfig;
