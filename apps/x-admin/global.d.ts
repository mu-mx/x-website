
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly BASE_API_URL: string
    readonly GLOBAL_VAR: string
  }
}