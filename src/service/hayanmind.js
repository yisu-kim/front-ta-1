import { API } from 'utils/constants';

class HayanMind {
  constructor(httpClient) {
    this.hayanmind = httpClient;
  }

  async comments(_page) {
    const response = await this.hayanmind.get('comments', {
      params: { _page, _limit: API.limit },
    });
    return response.data;
  }
}

export default HayanMind;
