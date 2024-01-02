export default class ContextService {
  private static instance : ContextService | null = null;
  private word : string []= [];

  static getInstance() {
    if (!ContextService.instance) {
      ContextService.instance = new ContextService();
    };

    return ContextService.instance;
  };

  set assignWord(word: string) {
    this.word = word.split("");
  };

  get getWord() {
    return this.word;
  };

};