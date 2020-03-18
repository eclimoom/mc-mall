Page({
    data: {
      category: [
            { name: '纯牛奶', id: 'danfan' },
            {name:'全脂',id:'guowei'},
            {name:'高钙',id:'shucai'},
            {name:'无糖',id:'chaohuo'},
            {name:'奶片',id:'dianxin'},
            {name:'酸奶',id:'cucha'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onReady(){
        var self = this;
        wx.request({
            url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})