import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  user: any;
  errorMessage: string | undefined;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.usersService.getUser(id).subscribe({
          next: (user) => {
            console.log('Fetched user:', user); // Log the fetched user
            this.user = user;
          },
          error: (err) => {
            console.error('Error fetching user:', err);
            this.errorMessage = 'User not found';
          }
        });
      }
    });
  }
}

