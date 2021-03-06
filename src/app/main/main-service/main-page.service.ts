import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { Idea } from '../../models/idea';
import { UserService } from '../../user/user-service/user.service';

@Injectable()
export class MainPageService {

  topIdeas: Idea[] = [
    {
      id: 1,
      name: 'Bike',
      description: '2 wheels',
      picture: 'https://i.ytimg.com/vi/oIe9Rjcn0tA/maxresdefault.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 2,
      name: 'Moto',
      description: '3 wheels',
      picture: 'http://www.autoconsulting.com.ua/pictures/testdrives/Moto/Dnepr_22.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 3,
      name: 'Car',
      description: '4 wheels',
      picture: 'http://i.dailymail.co.uk/i/pix/2018/02/07/12/48F523F800000578-5362079-image-a-7_1518005510818.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 4,
      name: 'Bus',
      description: 'big',
      picture: 'https://cdn.vox-cdn.com/thumbor/ratuHD94xaVpChadADOS5oooCkE=/0x0:2362x1771/1200x800/filters:focal(993x698:1369x1074)/cdn.vox-cdn.com/uploads/chorus_image/image/55049115/ELEC_CITY.0.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 5,
      name: 'Plane',
      description: 'long',
      picture: 'https://s10.stc.all.kpcdn.net/share/i/12/10345345/inx960x640.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 6,
      name: 'Tank',
      description: 'caterpillar',
      picture: 'http://oruzhie.info/images/is-3/is3_15.jpg',
      favorIcon: 'favorite_border'
    }];

  recomIdeas: Idea[] = [
    {
      id: 7,
      name: 'Car',
      description: '4 wheels',
      picture: 'http://i.dailymail.co.uk/i/pix/2018/02/07/12/48F523F800000578-5362079-image-a-7_1518005510818.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 8,
      name: 'Bus',
      description: 'big',
      picture: 'https://cdn.vox-cdn.com/thumbor/ratuHD94xaVpChadADOS5oooCkE=/0x0:2362x1771/1200x800/filters:focal(993x698:1369x1074)/cdn.vox-cdn.com/uploads/chorus_image/image/55049115/ELEC_CITY.0.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 9,
      name: 'Bike',
      description: '2 wheels',
      picture: 'https://i.ytimg.com/vi/oIe9Rjcn0tA/maxresdefault.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 10,
      name: 'Moto',
      description: '3 wheels',
      picture: 'http://www.autoconsulting.com.ua/pictures/testdrives/Moto/Dnepr_22.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 11,
      name: 'Tank',
      description: 'caterpillar',
      picture: 'http://oruzhie.info/images/is-3/is3_15.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 12,
      name: 'Plane',
      description: 'long',
      picture: 'https://s10.stc.all.kpcdn.net/share/i/12/10345345/inx960x640.jpg',
      favorIcon: 'favorite_border'
    }];

  newIdeas: Idea[] = [
    {
      id: 13,
      name: 'Bus',
      description: 'big',
      picture: 'https://cdn.vox-cdn.com/thumbor/ratuHD94xaVpChadADOS5oooCkE=/0x0:2362x1771/1200x800/filters:focal(993x698:1369x1074)/cdn.vox-cdn.com/uploads/chorus_image/image/55049115/ELEC_CITY.0.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 14,
      name: 'Car',
      description: '4 wheels',
      picture: 'http://i.dailymail.co.uk/i/pix/2018/02/07/12/48F523F800000578-5362079-image-a-7_1518005510818.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 15,
      name: 'Moto',
      description: '3 wheels',
      picture: 'http://www.autoconsulting.com.ua/pictures/testdrives/Moto/Dnepr_22.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 16,
      name: 'Bike',
      description: '2 wheels',
      picture: 'https://i.ytimg.com/vi/oIe9Rjcn0tA/maxresdefault.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 17,
      name: 'Tank',
      description: 'caterpillar',
      picture: 'http://oruzhie.info/images/is-3/is3_15.jpg',
      favorIcon: 'favorite_border'
    },
    {
      id: 18,
      name: 'Plane',
      description: 'long',
      picture: 'https://s10.stc.all.kpcdn.net/share/i/12/10345345/inx960x640.jpg',
      favorIcon: 'favorite_border'
    }];


  constructor(userService: UserService) { }

  getTopIdeas() {
    return this.topIdeas;
  }

  getRecomIdeas() {
    return this.recomIdeas;
  }

  getNewIdeas() {
    return this.newIdeas;
  }

  // like(id: number) {
  //   const arr = this.user
  //   const serId: number = arr.indexOf(id);
  //   if (serId === -1) {
  //     this.userService.user.favoriteIdeas.push(id);
  //     for (let idea of this.topIdeas) {
  //       if (idea.id === id) {
  //         idea.favorIcon = 'favorite';
  //       }
  //     }
  //   } else {
  //     this.userService.user.favoriteIdeas.splice(serId, 1);
  //     for (let idea of this.topIdeas) {
  //       if (idea.id === id) {
  //         idea.favorIcon = 'favorite_border';
  //       }
  //     }
  //   }
  //   return false;
  // }

}
