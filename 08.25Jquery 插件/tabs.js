class Tab {
  constructor(that) {
    this.settings={
      title:['新闻','体育','娱乐','音乐'],
      contents:['台风太腻害','登贝莱转会巴萨','没有娱乐新闻','Troye Siven']
    }
    this.that = that;
  }
  init(obt){
    $.extend(this.settings,obt);
    this.createBtns();
    this.createContents();
    this.Tabchange();
  }
  createBtns(){
    $(this.settings.title).each((i,e) => {
      let btns = $(`<button class=${i==0?'active':''}>${e}</button>`)
      this.that.append(btns)
    })
  }
  createContents(){
    $(this.settings.contents).each((i,e) => {
      let contents = $(`<div class=${i==0?'show':'hidden'}>${e}</div>`)
      this.that.append(contents)
    })
  }
  Tabchange(){
    let _this =this;
    $(_this.that).find('button').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      $(_this.that).find('div').eq($(this).index()).addClass('show').removeClass('hidden').siblings('div').addClass('hidden');
    })
  }
}
$.fn.extend({
  tabs:function(obt){
    let tab = new Tab(this);
    tab.init(obt);
    return this
  }
})
