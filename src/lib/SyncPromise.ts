import * as async from 'async'
import * as Q from 'q'

export class SyncPromise {
    arrayOfCallback: any

    constructor(arrayOfCallback: any) {
        this.arrayOfCallback = arrayOfCallback
    }

    /*
    var self = this
    var arrayOfCallback = ids.map(id => {
				return self.method(id)
			})
    method(option){
        return (callback)=>{
            slef.othermethod(option).then(data=>{
                callback(null,data)
            })
        }
    }*/
    public seriesOfArray(arrayOfCallback: any): any {
        const deferred = Q.defer()
        async.series(arrayOfCallback,
            function (err, results) {
                if (err) {
                    deferred.reject(err)
                    return
                }
                if (results) {
                    deferred.resolve(results)
                }
            })
        return deferred.promise
    }

    public seriesOfObject(arrayOfCallback: any): any {
        const deferred = Q.defer()
        async.series(arrayOfCallback,
            function (err, results) {
                if (err) {
                    deferred.reject(err)
                    return
                }
                if (results) {
                    deferred.resolve(results)
                }
            })
        return deferred.promise
    }

}