[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
### 使用webpack4和react技术栈搭建的单页应用架构

---

**关键词：webpack4、create-react-app、react、redux、router、antd**

- 支持长效缓存：修改代码或者增删路由都不会影响vendor（第三方库文件）
- 根据router路由进行代码分割
- 单页应用

<h3>一. 代码分割方案</h3>
<p>仍然延续之前的方案：</p>
<p>1. 首先按照路由来切分</p>
<p>2. 从初始包中提取第三方模块（mathjs除外，因为它体积太大），放到vendor
包里<p>
<p>3. 从各异步包中提取重复次数4次以上的模块，放到commons包里（对应之前的
use-repeat）</p>
<p>4. 提取runtime包，保存webpack模块关系</p>
<p>5. moduleIds和chunkIds保证长效缓存</p>

<h3>二. 路由使用</h3>
<p>新版本router使用方式和之前版本有所不同，体现在以下方面：</p>
<p>1. 在router.js文件中，使用React.lazy()配合ES7的import()方法，引入
文件：</p>
<pre>
{
  path: '/loanBroker/prepayRecord',
  exact: true,
  component: lazy(() => import(/* webpackChunkName: 'prepayRecord' */'./components/prePurchase/prepayRecord/index'))
},
</pre>
<p>注意：import()方法中的注释，webpackChunkName很重要，它规定当前模块应当
打包进哪个JS包中。</p>
<p>React.lazy()和React.Suspend请自行百度，属于新版React特性。</p>
<p>2. 关于路由传参，之前我们都习惯用location.query或者location.state来传，
但是新版router将query彻底去掉了，state也只允许在browserHistory下使用，并且
新增了location.search来替代query。因此我们需要引入query-string这个三方库，
协助我们操作location.search。</p>
<pre>
// 传值
history.push({
  pathname: '/loanBroker/prePurchaseChoosePayment',
  search: QueryString.stringify({
    gear, activityType
  })
});
// 取值
const query = QueryString.parse(this.props.location.search);
const gear = Number(query.gear);
const activityType = Number(query.activityType);
</pre>
