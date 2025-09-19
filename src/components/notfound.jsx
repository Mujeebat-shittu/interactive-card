import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--Gray-200)] h-screen text-[hsl(278,94%,30%)] text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-2 text-lg">Oops! Page not found.</p>
      <Link
        to="/home"
        className="underline text-lg text-[hsl(249,99%,24%)] hover:text-blue-800"
      >
        Return to Home
      </Link>
    </div>
  );
}
