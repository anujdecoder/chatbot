export interface Message {
  id: string;
  body: string;
  userSent?: boolean;
  deleted?: boolean;
}

export interface PageInfo {
  hasMore: boolean;
  cursor: string;
}

export interface ListMessagesResponse {
  pages: Message[];
  pageParams: PageInfo;
}
