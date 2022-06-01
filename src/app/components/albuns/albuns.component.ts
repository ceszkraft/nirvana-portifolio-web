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
    name: 'Bleach',  
    url: '../../../assets/albuns/bleach/cover.jpg'
  },
  {
    name: 'Inceticide',
    url: '../../../assets/albuns/incesticide/cover.jpg'
  },
  {
    name: 'In utero',
    url: '../../../assets/albuns/in-utero/cover.jpg'
  },
  {
    name: 'Nevermind',
    url: '../../../assets/albuns/nevermind/cover.jpg'
  },
  {
    name: 'Outcesticide',
    url: '../../../assets/albuns/outcesticide/cover.jpg'
  },
  {
    name: 'Interview-limited-edition',
    url: '../../../assets/albuns/interview-limited-edition/cover.jpeg'
    
  },
  {
    name: 'Nirvana Live',
    url: '../../../assets/albuns/nirvana-live/54883830_1SZ.webp'
    
  },
  {
    name: 'Unplugged newyork',
    url: '../../../assets/albuns/unplugged-new-york/cover.jpg'
    
  },
  {
    name: 'Nirvana',
    url: '../../../assets/albuns/nirvana/cover.jpg'
  },
  {
    name: 'Nirvana complete cover',
    url: '../../../assets/albuns/nirvana-complete-cover-version/cover.jpg'
  },
  {
    name: 'FROM THE MUDDY BANKS OF THE WISHKAH',
    url: 'https://www.nirvana.com/files/2015/12/MuddyBanks.jpg'
  },
  {
    name: 'LIVE! TONIGHT! SOLD OUT!!',
    url: 'https://www.nirvana.com/files/2015/12/livetonight-soldout.jpg'
  },
  {
    name: 'LIVE AT THE PARAMOUNT',
    url: 'https://www.nirvana.com/files/2015/12/LiveAtTheParamount.jpg'
  },
  {
    name: 'SLIVER',
    url: 'https://www.nirvana.com/files/2015/12/7ff212fc-af3c-4002-b11f-d48e342f4bfa.jpg'
  },
  {
    name: 'https://www.nirvana.com/files/2015/12/WithTheLightsOut-photo.jpg',
    url: 'https://www.nirvana.com/files/2015/12/WithTheLightsOut-photo.jpg'
  }


]


  
  constructor() { }

  ngOnInit(): void {
 
    console.log(this.albuns);
    

  }

}
