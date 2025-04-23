import {
  NextResponse,
  type MiddlewareConfig,
  type NextRequest,
} from "next/server";
import verifyToken from "@/functions/verify-token";

const publicRoutes = [
  { path: "/login", whenAuthenticated: "redirect" },
  { path: "/cadastro", whenAuthenticated: "redirect" },
  { path: "/", whenAuthenticated: "redirect" },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";
const DASHBOARD_ROUTE = "/dashboard"; // Página de destino após o login

export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);

  // Se o usuário não está autenticado e está tentando acessar uma rota pública
  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  // Se o usuário não estiver autenticado, redireciona para a página de login
  const isValid = authToken ? await verifyToken(authToken) : null;
  if (!isValid) {
    return NextResponse.redirect(
      new URL(REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE, request.url)
    );
  }

  // Se o usuário está autenticado e está tentando acessar a página de login ou cadastro, redireciona para /dashboard
  if (isValid && publicRoute?.whenAuthenticated === "redirect") {
    return NextResponse.redirect(new URL(DASHBOARD_ROUTE, request.url));
  }

  // Caso contrário, permite a navegação para a rota solicitada
  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
