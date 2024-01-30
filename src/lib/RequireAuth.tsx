'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function RequireAuth({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { status } = useSession()
    if (status === "unauthenticated") {
        router.push('/signin');
    }
    if (status === "loading") {
        return ''
    }
    if (status === "authenticated") {
        return <>{children}</>
    }
}
export default RequireAuth;