import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbunsComponent } from './components/pages/albuns/albuns.component';
import { SinglesComponent } from './components/pages/singles/singles.component';
import { FeatsComponent } from './components/pages/feats/feats.component';
import { AddAlbumComponent } from './components/pages/add-album/add-album.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'albuns', component: AlbunsComponent, title: 'albuns' },
  { path: 'singles', component: SinglesComponent, title: 'singles' },
  { path: 'feats', component: FeatsComponent, title: 'feats' },
  {path: 'add-album', component: AddAlbumComponent, title:'add album'}
];
