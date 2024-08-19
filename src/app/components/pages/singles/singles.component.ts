import { Component, OnInit } from '@angular/core';
import { Single } from '../../../models/singles.model';
import { SinglesService } from '../../../services/singles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singles.component.html',
  styleUrl: './singles.component.css',
})
export class SinglesComponent implements OnInit {
  singles: Single[] = [];

  constructor(private singleService: SinglesService) {}
  ngOnInit(): void {
    this.singleService.get().subscribe((res) => {
      this.singles = res;
    });
  }
}
