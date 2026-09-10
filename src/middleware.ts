import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  const { pathname } = request.nextUrl;

  // Proteksi rute /admin (kecuali /admin/login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!session) {
      // Jika tidak ada session, arahkan kembali ke halaman login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Jika user sudah login tapi mencoba mengakses halaman login, arahkan ke dashboard
  if (pathname === '/admin/login') {
    if (session) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Terapkan middleware ini hanya pada rute di bawah ini
  matcher: ['/admin/:path*'],
};
