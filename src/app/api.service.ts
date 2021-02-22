import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  imageData: any;
  constructor() { }
  
  Configuration = [
    { _id: "1", image: '1', name: "Configuration" , userID: 1, des: 'dfkghasdkjgfbkasvb jk v kjsbgkjs dgjk nkjb kdsbgs'  },
    { _id: "2", image: '2', name: "LDAP Configuration", userID: 2, des: 'dfkghasdkjgfbkasvb jk v kjsbgkjs dgjk nkjb kdsbgs'  },
    { _id: "3", image: '3', name: " Upload Company Logo ", userID: 3, des: 'dfkghasdkjgfbkasvb jk v kjsbgkjs dgjk nkjb kdsbgs'  },
    { _id: "4", image: '4', name: "Change Wallpaper", userID: 4, des: 'dfkghasdkjgfbkasvb jk v kjsbgkjs dgjk nkjb kdsbgs'  },
    { _id: "5", image: '5', name: "Folder Watcher",  userID: 5, des: 'dfkghasdkjgfbkasvb jk v kjsbgkjs dgjk nkjb kdsbgs' },
    // { _id: "6", name: "Settings", page: "" },
  ]
  User = [
    { _id: "1", image: '1',name: "User Summary" },
    { _id: "2", image: '2',name: "Logged Users" },
    { _id: "3", image: '3',name: "  User Profile " },
    { _id: "4", image: '4',name: "Roles" },
    { _id: "5", image: '5',name: "Roles Mapping " },
    { _id: "1", image: '2',name: "sdgsdg" },
    { _id: "2", image: '3',name: "d gdsfgd s" },
    { _id: "3", image: '4',name: "  s dfghsdf " },
    { _id: "4", image: '5',name: "sd fgdfg" },
    { _id: "5", image: '1',name: "s s dfgdfgsdfgg " },
    { _id: "1", image: '3',name: "rfgdfgsdfgsd sd gsdg" },
    { _id: "2", image: '4',name: "sd fg sdfgg fg gfsfgd s" },
    { _id: "3", image: '5',name: "fff fgfffff s dfghsdf " },
    { _id: "4", image: '1',name: "sddfddfdsssssdfg" },
    { _id: "5", image: '2',name: "rererere dfgdfgsdfgg " },
  ]
LastUser = [
  { _id: "1", image: "assets/image.jpeg" ,  },
  { _id: "2", image: "assets/image2.jpg",  },
  { _id: "3", image: "assets/image3.jpg",  },
  { _id: "4", image: "assets/image4.png",  },
  { _id: "5", image: "assets/image5.jpg",  },
  // { _id: "6", name: "Settings", page: "" },
]
}

