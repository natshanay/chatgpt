
async function fetchdata(){
    try {
        const data =await new Promise((resolve, reject)=>{
            let seccess = true
            if (seccess) {
                resolve("wow")
            }
            else{
                reject("tish")
            }
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchdata()
