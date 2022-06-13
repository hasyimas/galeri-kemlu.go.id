const dev = process.env.dev == 'production'

export const server = dev ? process.env.NEXT_PUBLIC_URLPUB : process.env.NEXT_PUBLIC_URLLOC
export const ldap = dev ? process.env.NEXT_PUBLIC_URLLDAPPUB : process.env.NEXT_PUBLIC_URLLDAPLOC