import { Component, OnInit } from '@angular/core';
import { Album } from '../../../models/albuns.model';
import { AlbunsService } from '../../../services/albuns.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albuns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.css'
})
export class AlbunsComponent implements OnInit{
  albuns:Album[] = []
  show:boolean = false

  constructor(private albumService:AlbunsService) {}
  ngOnInit(): void {
    this.albumService.get().subscribe((res) => {
      this.albuns = res;
    });
  };

  musics() {
    if (this.show) this.show = false
    else {this.show = true}
  }


}
