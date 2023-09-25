export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 sm:mb-8">
      <small className="mb-2 block text-xs">
        Built with love by Brian Miner - Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">This website was built</span> with React & Next.js (App Router & Server
        Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
