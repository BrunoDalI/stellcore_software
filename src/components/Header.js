// Reexport do componente real em Header.tsx para manter imports existentes (`@/components/Header`).
// Mantemos este arquivo em .js SEM JSX para evitar erros de parsing do esbuild.
// Caso você edite o componente, faça em `Header.tsx`.
export { default } from './Header.tsx';