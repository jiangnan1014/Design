const HTTP = require('./Gank')
class IndexGank extends HTTP{
    static getindex(){
        return this.request({
            url:"today"
        })
    }
}
module.exports = IndexGank