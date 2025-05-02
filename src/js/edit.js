const BASE_URL = "https://6770dd642ffbd37a63cda837.mockapi.io/api/Employee/Employee"


let params = new URLSearchParams(window.location.search)
// console.log([...window.location.search]); 
let id = params.get("id")
// console.log(id)

const lpad = (value)=>{
    return value.toString().padStart(2,'0')
}

const convertDate = (date)=>{
    let d = new Date(date)
    return `${d.getFullYear()}-${lpad(d.getMonth())}-${lpad(d.getDate())}`
}

const mapValues = (data) => {
    document.getElementById("firstName").value = data.firstName
    document.getElementById("lastName").value = data.lastName
    document.getElementById("doj").value = convertDate(data.doj)
    document.getElementById("email").value = data.email
}
const getData = async () => {
    try {
    //    let loc= window.location
    //    console.log(loc)
        let res = await fetch(`${BASE_URL}/${id}`)
        let data = await res.json()
console.log(data)
        if (res.status === 200) {
            mapValues(data)
        }
        else {
            throw `${res.status}:${data ?? "Error Occured"}`
        }
    } catch (error) {
        alert(error)
    }
}

getData()



let myForm = document.getElementById("myForm")

myForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let formData = new FormData(myForm)
    let data = Object.fromEntries(formData)
    console.log(data)
    if (data.firstName && data.lastName && data.doj && data.email) {
        data.doj = new Date(data.doj).toISOString()
        try {
            let res = await fetch(`${BASE_URL}/${id}`, {
              

                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type":"application/json"
            
                }
            })
            console.log(res)
            if (res.status === 200) {
                alert("Employee Saved")
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