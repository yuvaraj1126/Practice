const BASE_URL = "https://6770dd642ffbd37a63cda837.mockapi.io/api/Employee/Employee"


let myForm = document.getElementById("myForm")

myForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let formData = new FormData(myForm)
    let data = Object.fromEntries(formData)
    console.log(data)
    if (data.firstName && data.lastName && data.doj && data.email) {
        data.doj = new Date(data.doj).toISOString()
        try {
            let res = await fetch(BASE_URL, {
              

                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type":"application/json"
            
                }
            })
            console.log(res)
            if (res.status === 201) {
                alert("Employee Created")
                window.location.replace("../index.html")

            }
            else {
                throw `${res.status}:${data ?? "Error Occured"}`
            }
        } catch (error) {
            alert(error)
        }

    }
    else {
        alert("all field are missing ")
    }
})