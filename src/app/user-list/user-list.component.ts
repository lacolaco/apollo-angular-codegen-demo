import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AllUsersGQL } from './../graphql/schema';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$ = this.allUsersGQL
    .watch()
    .valueChanges.pipe(map(({ data }) => data.allUsers));

  constructor(private allUsersGQL: AllUsersGQL) {}

  ngOnInit() {}
}
