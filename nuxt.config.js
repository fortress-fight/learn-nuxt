/*
 * @Description: Nuxt 配置文件
 * @Author: F-Stone
 * @Date: 2022-03-03 14:45:28
 * @LastEditTime: 2022-03-04 11:21:30
 * @LastEditors: F-Stone
 */

import { resolve } from "path";

export default {
    dev: process.env.NODE_ENV !== "production",
    alias: {
        // rootPath
        "~": __dirname,
        // srcPath
        "@": __dirname,
        assets: resolve(__dirname, "./assets"),
        static: resolve(__dirname, "./static"),
        images: resolve(__dirname, "./assets/images"),
        style: resolve(__dirname, "./assets/style"),
        data: resolve(__dirname, "./assets/other/data"),
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "learn-nuxt",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        // https://go.nuxtjs.dev/stylelint
        "@nuxtjs/stylelint-module",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
