new Vue({
  el: "#app",
  data() {
    return {
      currentPage: 0, // 現在のページ番号
      size: 10, // 1ページに表示するアイテムの上限
      pageRange: 10, // ページネーションに表示するページ数の上限
      items: [] // 表示するアイテムリスト
    };
  },
  mounted() {
    // 表示するアイテムの初期化（APIで取得するなど）
    this.items = [...Array(200)].map((_, i) => {
      return {
        text: `Item: ${i}`
      };
    });
  },
  computed: {
    /**
     * ページ数を取得する
     * @return {number} 総ページ数(1はじまり)
     */
    pages() {
      return Math.ceil(this.items.length / this.size);
    },
    /**
     * ページネーションで表示するページ番号の範囲を取得する
     * @return {Array<number>} ページ番号の配列
     */
    displayPageRange() {
      const half = Math.ceil(this.pageRange / 2);
      let start, end;

      if (this.pages < this.pageRange) {
        // ページネーションのrangeよりページ数がすくない場合
        start = 1;
        end = this.pages;
      } else if (this.currentPage < half) {
        // 左端のページ番号が1になったとき
        start = 1;
        end = start + this.pageRange - 1;
      } else if (this.pages - half < this.currentPage) {
        // 右端のページ番号が総ページ数になったとき
        end = this.pages;
        start = end - this.pageRange + 1;
      } else {
        // activeページを中央にする
        start = this.currentPage - half + 1;
        end = this.currentPage + half;
      }

      let indexes = [];
      for (let i = start; i <= end; i++) {
        indexes.push(i);
      }
      return indexes;
    },
    /**
     * 現在のページで表示するアイテムリストを取得する
     * @return {any} 表示用アイテムリスト
     */
    displayItems() {
      const head = this.currentPage * this.size;
      return this.items.slice(head, head + this.size);
    },
    /**
     * 現在のページかどうか判定する
     * @param {number} page ページ番号
     * @return　{boolean} 現在のページならtrue
     */
    isSelected(page) {
      return page - 1 === this.currentPage;
    }
  },
  methods: {
    /**
     * ページ先頭に移動する
     */
    first() {
      this.currentPage = 0;
      this.selectHandler();
    },
    /**
     * ページ後尾に移動する
     */
    last() {
      this.currentPage = this.pages - 1;
      this.selectHandler();
    },
    /**
     * 1ページ前に移動する
     */
    prev() {
      if (0 < this.currentPage) {
        this.currentPage--;
        this.selectHandler();
      }
    },
    /**
     * 1ページ次に移動する
     */
    next() {
      if (this.currentPage < this.pages - 1) {
        this.currentPage++;
        this.selectHandler();
      }
    },
    /**
     * 指定したページに移動する
     * @param {number} index ページ番号
     */
    pageSelect(index) {
      this.currentPage = index - 1;
      this.selectHandler();
    },
    /**
     * ページを変更したときの処理
     */
    selectHandler() {
      // なんかの処理
    }
  }
});
