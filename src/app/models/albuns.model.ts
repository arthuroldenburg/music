export interface Album {
  titulo:string;
  ano:number;
  capa:string;
  link_spotify:string;
  faixas:[{
    titulo:string;
    duracao:string;
    colaboracoes:string[];
    visualizacoes:string;
    link_spotify:string;
  }];
}
