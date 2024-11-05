let fetchdata = new Promise((resolve, reject) => {
    let seccess = true
    if (seccess){
        resolve("data fetched nice ")

    }
    else{
        reject("error in fetching ")
    }
})
fetchdata.
then(response=>console.log(response))
.catch(error=>console.log(error))
