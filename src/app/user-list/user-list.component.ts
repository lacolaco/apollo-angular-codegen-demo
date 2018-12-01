import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AllUsersGQL, CreateUserGQL } from './../graphql/schema';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$ = this.allUsersGQL
    .watch()
    .valueChanges.pipe(map(({ data }) => data.allUsers));

  constructor(
    private allUsersGQL: AllUsersGQL,
    private createUserGQL: CreateUserGQL
  ) {}

  ngOnInit() {}

  createUser(name: string) {
    this.createUserGQL
      .mutate(
        { name },
        {
          refetchQueries: [
            {
              query: this.allUsersGQL.document
            }
          ]
        }
      )
      .toPromise();
  }
}
