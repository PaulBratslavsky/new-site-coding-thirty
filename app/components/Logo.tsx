import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <Link to="/">
    <h2 className="text-white font-bold">coding<span className="text-pink-500 font-bold text-lg">{" "}after{" "}</span>thirty</h2>
  </Link>
  )
}
