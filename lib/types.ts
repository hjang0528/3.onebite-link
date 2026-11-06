export interface Folder {
  id: string;
  name: string;
  emoji: string;
  count: number;
}

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  folderId: string;
  createdAt: string;
}
