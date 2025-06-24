import { Component, inject, signal } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-profile-public',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-profile-public.component.html',
  styleUrls: ['./user-profile-public.component.css'],
})
export class UserProfilePublicComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  user = signal<any>({});
  errorMessage = signal<string | null>(null);

  userName = this.route.snapshot.paramMap.get('username')!;

  constructor() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getPublicUser(this.userName).subscribe({
      next: (res: any) => {
        this.user.set(res);
        this.errorMessage.set(null);
      },
      error: (err: any) => {
        this.errorMessage.set('Öffentliches Profil konnte nicht geladen werden.');
      }
    });
  }

}
