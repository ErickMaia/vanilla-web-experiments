//normal callback function

let sum = (result, error) => 
{
    if (3 + 1 == 3){
        result("success!")
    }else{
        error("error!")
    }
}

sum(
    (success) => console.log(success), 
    (err) => console.log(err)
)

//callback function turned into a Promise

let sumPromise = new Promise((result, error) =>
{
    if(2 + 1 == 3){
        result("Promise success!")
    }else{
        error("Promise error!")
    }
})

sumPromise
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage))