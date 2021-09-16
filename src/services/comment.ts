import { AxiosInstance, AxiosResponse } from 'axios';
import { API } from 'utils/constants';

interface CommentRequest {
  getAll(page: number): Promise<AxiosResponse<CommentResponse[]>>;
}

export type CommentResponse = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

class CommentService implements CommentRequest {
  constructor(private httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  getAll(page: number): Promise<AxiosResponse<CommentResponse[]>> {
    return this.httpClient.get('comments', {
      params: { _page: page, _limit: API.limit },
    });
  }
}

export default CommentService;
