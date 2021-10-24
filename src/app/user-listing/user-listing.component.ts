import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzThSelectionComponent } from 'ng-zorro-antd/table';
import { Roles, UserService } from 'src/shared';
import { User } from 'src/shared/models/user';
import { REGISTERED_USERS } from 'src/shared/registered-users';
import { CreateNotification } from '../state/app/app.actions';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  userData = REGISTERED_USERS;

  /* MODALS */
  isAddUserModalVisible = false;
  isEditUserModalVisible = false;

  /* objects */
  newUser: User = {};
  editedUser!: User;

  /* index for edited user */
  editedUserIndex!: number;

  constructor(
    private userService: UserService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  canUserPerformCRUDOperations() {
    const user = this.userService.getUser();

    return user.userType === Roles.SuperAdmin;
  }

  onAddUserCancel() {
    this.isAddUserModalVisible = false;
    this.newUser = {};
  }

  onAddUser() {
    if (this.validateUser(this.newUser)) {
      REGISTERED_USERS.push(this.newUser);
      this.userData = [...this.userData];
      this.newUser = {};
      this.onAddUserCancel();
    } else {
      this.store.dispatch(new CreateNotification({ title: 'Error', content: 'All fields must be filled' }));
    }
  };

  openAddUserModal() {
    this.isAddUserModalVisible = true;
  }

  openEditUserModal(user: User, userIndex: number) {
    this.isEditUserModalVisible = true;
    /* to prevent reference */
    this.editedUser = { ...user };
    this.editedUserIndex = userIndex;
  }

  onEditUserCancel() {
    this.isEditUserModalVisible = false;
    this.editedUser = {};
  }

  onEditUser() {
    if (this.validateUser(this.editedUser)) {
      REGISTERED_USERS[this.editedUserIndex] = this.editedUser;
      this.userData = [...this.userData];
      this.onEditUserCancel();
    } else {
      this.store.dispatch(new CreateNotification({ title: 'Error', content: 'All fields must be filled' }));
    }
  }

  deleteUser(userIndex: number) {
    REGISTERED_USERS.splice(userIndex, userIndex + 1);
    this.userData = [...this.userData];
  }

  validateUser(user: User) {
    return user.email && user.password && user.userType;
  }

}
