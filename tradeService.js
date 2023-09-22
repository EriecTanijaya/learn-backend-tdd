class TradeService {
  constructor(repo) {
    this.repo = repo;
  }

  postTradeItem(request) {
    this.repo.save(request);
  }
}

// class TradeService {
//   constructor(repo) {
//     this.repo = repo;
//   }

//   postTradeItem(request) {
//     this.repo.save(request);
//   }
// }

module.exports = TradeService;
