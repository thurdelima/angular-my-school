export interface Course {
  id: number;
  name: string;
  category: Category;
  rating: number;
  year: number;
  professor: string;
  description: string;
  image: string;
}


export enum Category {
  Tecnologia = 'Tecnologia',
  Arte = 'Arte',
  Culinaria = 'Culinária',
  Financas = 'Finanças',
  Psicologia = 'Psicologia',
  Marketing = 'Marketing',
  Fotografia = 'Fotografia',
  Escrita = 'Escrita',
  Musica = 'Música',
  CienciasAmbientais = 'Ciências Ambientais',
  Moda = 'Moda',
  Comunicação = 'Comunicação',
  Filosofia = 'Filosofia',
  Saude = 'Saúde',
}


export const CategoryArray = [
  { key: 'Tecnologia', value: 'Tecnologia' },
  { key: 'Arte', value: 'Arte' },
  { key: 'Culinaria', value: 'Culinária' },
  { key: 'Financas', value: 'Finanças' },
  { key: 'Psicologia', value: 'Psicologia' },
  { key: 'Marketing', value: 'Marketing' },
  { key: 'Fotografia', value: 'Fotografia' },
  { key: 'Escrita', value: 'Escrita' },
  { key: 'Musica', value: 'Música' },
  { key: 'CienciasAmbientais', value: 'Ciências Ambientais' },
  { key: 'Moda', value: 'Moda' },
  { key: 'Comunicação', value: 'Comunicação' },
  { key: 'Filosofia', value: 'Filosofia' },
  { key: 'Saude', value: 'Saúde' },
];
