import { Routes } from '@angular/router';
import { StartScreenComponent } from './screens/start-screen/start-screen.component';
import { RecipesScreenComponent } from './screens/recipes-screen/recipes-screen.component';
import { RecipeDetailComponent } from './screens/recipe-detail/recipe-detail.component';
import { LoginpageComponent } from './screens/loginpage/loginpage.component';
import { RegisterpageComponent } from './screens/registerpage/registerpage.component';
import { ProfileComponent } from './screens/profile/profile-private/profile.component';
import { SettingsComponent } from './screens/profile/settings/settings.component';
import { FavoriteScreenComponent } from './screens/favorite-screen/favorite-screen.component';
import { CommentsComponent } from './screens/profile/comments/comments.component';
import { UserProfilePublicComponent } from './screens/profile/user-profile-public/profile-public/user-profile-public.component';
import { PublicCommentsComponent } from './screens/profile/user-profile-public/public-comments/public-comments.component';
import { PublicFavoritesComponent } from './screens/profile/user-profile-public/public-favorites/public-favorites.component';
import { AdminDashboardComponent } from './screens/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { ImprintComponent } from './screens/imprint/imprint.component';
import { PrivacyPolicyComponent } from './screens/privacy-policy/privacy-policy.component';
import { NotAuthorizedComponent } from './screens/not-authorized/not-authorized.component';


export const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'recipe', component: RecipesScreenComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/settings', component: SettingsComponent },
  { path: 'profile/favorites', component: FavoriteScreenComponent },
  { path: 'profile/comments', component: CommentsComponent },
  { path: 'user/:username', component: UserProfilePublicComponent },
  { path: 'comments/:username', component: PublicCommentsComponent },
  { path: 'favorites/:username', component: PublicFavoritesComponent },
  { path: 'favorites', component: FavoriteScreenComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent }
];
