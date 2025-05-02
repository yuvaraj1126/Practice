const BASE_URL = "https://6770dd642ffbd37a63cda837.mockapi.io/api/Employee/Employee"

  const edit =(id)=>{

       window.location.replace(`./html/edit.html?id=${id}`)
    }
   const deleteEmployee = async(id)=>{
try {
    let res = await fetch(`${BASE_URL}/${id}`,{
        method:"DELETE"
    })

    let data = res.json()
    if(res.status===200){
        alert("Data Deleted")
        getData()
    }
    else{
        throw`${res.status}:${data??"Error Occured"}`
    }

} catch (error) {
    alert(error)
}
   }
   

const constructTable = (data) => {
    let tBody = document.getElementById("table-body")
    tBody.innerHTML = ""


    data.forEach((e) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
      <td class="border border-slate-400 p-2">${e.id}</td>
    <td class="border border-slate-400 p-2">${e.firstName}</td>
    <td class="border border-slate-400 p-2">${e.lastName}</td>
  
    <td class="border border-slate-400 p-2">${e.doj}</td>
    <td class="border border-slate-400 p-2">${e.email}</td>
    <td class="border border-slate-400 p-2">
    <button class="border border-slate-400 p-2" onClick="edit(${e.id})">Edit</button>
    &nbsp;&nbsp;
   <button class="border border-slate-400 p-2" onClick="deleteEmployee(${e.id})">Delete</button>

    </td>
    `
        tBody.appendChild(tr)
    });

}





const getData = async () => {
    try {
        const res = await fetch(BASE_URL)

        const data = await res.json()
        // console.log(res)
        if (res.status === 200) {
            // console.log(data)
            constructTable(data)
        }
        else
            throw `${res.status}: ${data.message ?? "Error Occured"}`

    } catch (error) {

    }

}

getData()

