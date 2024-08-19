import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatsService } from '../../../services/feats.service';
import { Participacao } from '../../../models/participacoes.model';

@Component({
  selector: 'app-feats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feats.component.html',
  styleUrl: './feats.component.css',
})
export class FeatsComponent implements OnInit {
  feats: Participacao[] = [];

  constructor(private featService: FeatsService) {}
  ngOnInit(): void {
    this.featService.get().subscribe((res) => {
      this.feats = res;
    });
  }
}
