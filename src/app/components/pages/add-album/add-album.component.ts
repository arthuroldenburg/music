import { Component, OnInit } from '@angular/core';
import { Album } from '../../../models/albuns.model';
import { AlbunsService } from '../../../services/albuns.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Music } from '../../../models/music.model';

@Component({
  selector: 'app-add-album',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})
export class AddAlbumComponent implements OnInit{
  album: Album = {
    id:'',
  titulo:'',
  ano:0,
  capa:'',
  link_spotify:'',
  faixas:[{
    titulo:'',
    duracao:'',
    colaboracoes:[],
    visualizacoes:'',
    link_spotify:'',
  }]
  };

  music:Music = {
    titulo:'',
    duracao:'',
    colaboracoes:[],
    visualizacoes:'',
    link_spotify:'',
  };

  albuns: Album[] = []

  message:string = '';

  constructor(private albumService:AlbunsService) {}

  ngOnInit(): void {
    this.albumService.get().subscribe((res) => this.albuns = res)
  }

  onSubmit(){
    this.albumService.add(this.album).subscribe((_res) =>
    this.message = 'album added with success!');
    this.album = {
      id:'',
      titulo: '',
      ano: 0,
      capa: '',
      link_spotify: '',
      faixas: [
        {
          titulo: '',
          duracao: '',
          colaboracoes: [],
          visualizacoes: '',
          link_spotify: '',
        },
      ],
    };
  }

  // onMusicSubmit() {
  //   this.albumService.ad
  //   this.album.titulo
  // }

}
