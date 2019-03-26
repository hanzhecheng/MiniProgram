## 基于京东Taro框架的微信小程序项目
### 主要技术 React+Taro
> 微信小程序出了很久，一直没有做过类似的东西，最近看了下小程序文档，不vue不react的感觉，事件绑定写法尤其不习惯，心态崩溃前发现了`Taro`，可以让开发者用react来开发多端应用，对应还出了UI框架`Taro-UI`，整体用下来，对小程序的适配基本上很完美，`Taro-UI`部分组件的bug提出issue后也很快看到了官方的更新，对react开发者相当友好了，本项目也是基于`Taro`开发。

### 更新记录
- 完成首页，分类页，购物车等页面的UI，及部分逻辑处理，练手项目，目前所有数据都写在了页面中，状态管理也没有增加，主要用于熟悉小程序各个ui组件，后续会不断完善
- 商品搜索页面增加无限加载，小程序限制setDdata每次最大1M，因此就算是分页，Taro每次更新也需要更新完整的数组，多次分页之后数组就会超出1M限制，因此改写法，每次只更新
数组中其中一项，将分页的数据更新进去，这样setData每次就更新分页的数据，不会超出1M限制，在react中，常规的setState无法更新数组中其中一项，google后发现新的写法，如下
```
  this.state.goodsList[this.state.currentPage] = arr
  this.forceUpdate()
```
forceUpdate方法将会导致组件的 render()方法被调用，并忽略shouldComponentUpdate()。这将会触发每一个子组件的生命周期方法，涵盖，每个子组件的shouldComponentUpdate() 方法，因此最好避免使用foreUpdate，目前只看到这个方法，后续有新的写法会更新进来