var baseUrl = "http://api.budejie.com/api/api_open.php"
class HTTP {
    static request({url,data}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                data,
                header: {'content-type':'application/json'},
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: (res)=>{
                    resolve(res)
                },
                fail: (err)=>{
                    reject(err)
                },
            });
        })
    }
}
module.exports = HTTP