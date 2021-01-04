import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyForNotLoggedInGuard } from './modules/auth/guards/only-for-not-logged-in.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [OnlyForNotLoggedInGuard]
  },
  {
    path: 'flashcards',
    loadChildren: () => import('./modules/flashcards/flashcards.module').then(m => m.FlashcardsModule)
  },
  {
    path: '',
    redirectTo: '/flashcards',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
