import { useSignOut, useUser } from '@/hooks/user';
import Link from 'next/link';

function NavBar() {
  const user = useUser();
  const signOut = useSignOut();

  console.log('[NavBar] user:', user);
  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Home</Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <Link href="/cart">Cart</Link>
            <li>{user.name}</li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
