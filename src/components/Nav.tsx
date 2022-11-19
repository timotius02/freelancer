import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Nav = () => (
  <nav className="flex h-20 items-center justify-center bg-white">
    <ul className="flex gap-10">
      <li>
        <ActiveLink activeClassName="text-green-500" href="/">
          <a className="no-decoration font-medium">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="text-green-500" href="/about">
          <a className="no-decoration font-medium">About</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="text-green-500" href="/blog">
          <a className="no-decoration font-medium">Blog</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          activeClassName="text-green-500"
          href="/[slug]"
          as="/dynamic-route"
        >
          <a className="no-decoration font-medium">Dynamic Route</a>
        </ActiveLink>
      </li>
    </ul>
    <div className="absolute right-10">
      <SignedOut>
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/user-profile"
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  </nav>
);

export default Nav;
