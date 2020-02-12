const HTTP = require('./HTTP')
class IndexModel extends HTTP{
    static getindex(value,start){
        return this.request({
           url:`?a=list&c=data&type=${value}&${start}&page=3`,
        })
    }
    static getcomment(id){
        return this.request({
           url:`?a=dataList&c=comment&data_id=${id}&hot=1`,
        })
    }
    static getbig(url){
        return this.request({
           url,
        })
    }
}
module.exports = IndexModel