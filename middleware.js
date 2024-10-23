import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, origin } = request.nextUrl;
  console.log(pathname);
  // check if the user is authenticated
  if (!request.cookies.get("status") && pathname !== "/login") {
    return NextResponse.redirect(`${origin}/login`);
  }
  // redirect to home if the user is authenticated and tries to access the login page
  if (pathname === "/login" && request.cookies.get("status")) {
    return NextResponse.redirect(`${origin}/`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/queue/:path*"],
};
