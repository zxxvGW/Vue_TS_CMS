export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名', minWidth: '150' },
    { prop: 'oldPrice', label: '原价', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '80', slotName: 'newPrice' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '80', slotName: 'status' },

    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '160',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '160',
      slotName: 'updateAt'
    },
    { prop: 'handler', label: '操作', minWidth: '180', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
