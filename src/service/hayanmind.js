class HayanMind {
  constructor(httpClient) {
    this.hayanmind = httpClient;
  }

  async comments(_page) {
    const response = await this.hayanmind.get("comments", {
      params: { _page, _limit: 10 },
    });
    return response.data;
  }
}

export default HayanMind;
