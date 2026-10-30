import { Injector, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Navigation guard for the app pages: lets a registered user (active Supabase
// session) or an active guest login through, everyone else goes to the login.
// It only shapes navigation – the actual data access rules are enforced by
// Supabase row level security (see supabase/schema.sql).
export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const injector = inject(Injector);

  if (localStorage.getItem('joinIsGuest') === 'true') return true;

  // Loaded lazily like in the user avatar, so the Supabase client is not
  // pulled into the initial bundle by the routes.
  const { Supabase } = await import('./supabase');
  const { data } = await injector.get(Supabase).supabase.auth.getSession();

  return data.session ? true : router.createUrlTree(['/login']);
};
