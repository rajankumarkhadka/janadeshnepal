import Link from "next/link";

export const metadata = {
  title: "404 | Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2 bg-black text-white rounded"
      >
        Go Home
      </Link>
    </div>
  );
}
