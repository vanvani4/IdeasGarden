import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable()
export class UserService {

  user: User = {
    login: 'Ivan',
    password: '',
    favoriteIdeas: [1,2,3,7,15]
  }

  getUser() {
    return this.user; // временно, дальше user с localStorage.getItem('currentUser'))
  }

  addFavoriteIdea (id) {
    this.user.favoriteIdeas.push(id);
  }

  delFavoriteIdea (id) {
    this.user.favoriteIdeas.splice(id, 1);
  }
}
