  methods: {
    search () {
      this.parameters.state = this.$route.meta.params.state
      this.movePage(1)
    },
    movePage (num) {
      const params = Object.assign({}, this.parameters, { page: num })
      this.apiClient.get('/sessions.json', { params: params }).then((data) => {
        this.collection = data.sessions
        this.meta = data.meta
        this.loading = false
      })
    },
    destroy(record) {
      this.confirmProcess('削除しますか？', 'warning').then(() => {
        var index = this.collection.indexOf(record)
        this.apiClient.delete(record.id + '.json').then((data) => {
          this.$delete(this.collection, index)
        })
      })
    },
  }
}
                                                                                           100,1         90%
