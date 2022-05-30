import { Component, OnInit } from '@angular/core';
import { AlbumModel } from 'src/app/models/album.model';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

albuns: AlbumModel[] = [
  { 
    name: 'bleach',  
    url: '../../../assets/albuns/bleach/cover.jpg'
  },
  {
    name: 'inceticide',
    url: '../../../assets/albuns/incesticide/cover.jpg'
  },
  {
    name: 'in utero',
    url: '../../../assets/albuns/in-utero/cover.jpg'
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nevermind/cover.jpg'
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nirvana/cover.jpg'
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nirvana/cover.jpg'
    
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nirvana/cover.jpg'
    
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nirvana/cover.jpg'
    
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nirvana/cover.jpg'
    
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nirvana/cover.jpg'
    
  },
  



]


  
  constructor() { }

  ngOnInit(): void {
 
    console.log(this.albuns);
    

  }

}
