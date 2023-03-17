function helper(selector){
    return document.querySelector(selector);
}
const formatter = new Intl.NumberFormat('vn-VN', {
    style: 'currency',
    currency: 'VND',
});
let list = new ListPerson;
function getdatafromboard(){
    const state = helper("#select").value
    if(state == 1){
        const name = helper("#TenS").value 
        const addr = helper("#addrS").value 
        const email = helper("#EmailS").value 
        const math = helper("#math").value 
        const physic = helper("#physic").value 
        const chemist = helper("#chemist").value 
        const index = list.size()
        if(list.validationS(name,addr,email,math,physic,chemist)){
            const student = new Student(name,addr,String(index) + "-S",email,+math,+physic,+chemist)
            console.log(student);
            return student
        }
    }else if(state == 2){
        const name = helper("#TenE").value 
        const addr = helper("#addrE").value 
        const email = helper("#EmailE").value 
        const work_amount = helper("#date").value 
        const work_salary_day = helper("#salary").value
        const index = list.size()
        if(list.validationE(name,addr,email,work_amount,work_salary_day)){
            const employee = new Employee(name,addr,String(index)+"-E",email,+work_amount,+work_salary_day)
            return employee
        }
    }else{
        const name = helper("#TenC").value 
        const addr = helper("#addrC").value 
        const email = helper("#EmailC").value 
        const cop_name = helper("#namecop").value 
        const bill = helper("#bill").value 
        const judge = helper("#judge").value 
        const index = list.size();
        if(list.validationC(name,addr,email,cop_name,bill,judge)){
            const customer = new Customer(name,addr,String(index) + "-C",email,cop_name,bill,judge);
            return customer
        }
    }
}
function Render(newlist = list.listperson){
    let number = 0;
    const sorted_list = sorted(newlist);
    let html = sorted_list.reduce((result,person)=>{
        return ( result + 
        ` 
            <tr>
                <th scope="row">${++number}</th>
                <td>${person.name}</td>
                <td>${list.checktype(person)}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>
                <button class="btn btn-dark" onclick="delete_per(\'${person.id}\')">Xóa</button>
                <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="update(\'${person.id}\')">Cập nhật</button>
                <input placeholder="${method(person)}" disabled="true">
                </td>
            </tr>
        `
        )
    },"")
    helper(".table-body").innerHTML = html 
}
function addPerson(){
    let person = getdatafromboard();
    if(person!=undefined){
        list.addperson(person)
        Render()
        alert("Đã thêm người dùng !")    
    }
}
function change_form(){

    const state = helper("#select").value;
    for(let i = 1 ; i <= 3 ;i++){
        if(i==state){
            let html = "." + "group" + String(i);
            helper(html).style.display = "block";
        }else{
            let html = "." + "group" + String(i);
            helper(html).style.display = "none";
        }
    }
}
function delete_per(id){
    list.listperson = list.listperson.filter((person)=>{
        if(person.id != id){
            return person ;
        }
    })
    Render()
}
function update(id){
    helper(".add").disabled = true;
    helper(".update").style.display = "block";
    let position = 0;
    for(let i = 0 ; i < list.listperson.length;i++){
        if(list.listperson[i].id == id ){
            position = i
            if(list.checkstates(list.listperson[i]) == 1){
                helper("#TenS").value = list.listperson[i].name
                helper("#addrS").value = list.listperson[i].address
                helper("#EmailS").value = list.listperson[i].email
                helper("#math").value = list.listperson[i].math
                helper("#physic").value = list.listperson[i].physic
                helper("#chemist").value = list.listperson[i].chemist
            }
            if(list.checkstates(list.listperson[i]) == 2){
                helper("#TenE").value = list.listperson[i].name
                helper("#addrE").value = list.listperson[i].address
                helper("#EmailE").value = list.listperson[i].email
                helper("#date").value = list.listperson[i].work_amount
                helper("#salary").value = list.listperson[i].work_salary_day
              
            }
            if(list.checkstates(list.listperson[i]) == 3){
                helper("#TenC").value = list.listperson[i].name
                helper("#addrC").value = list.listperson[i].address
                helper("#EmailC").value = list.listperson[i].email
                helper("#namecop").value = list.listperson[i].cop_name
                helper("#bill").value = list.listperson[i].bill
                helper("#judge").value = list.listperson[i].judge
                
            }
        }
    }
    helper(".update").onclick = function(){
        const person = getdatafromboard();
        list.listperson[position] = person;
        Render()
    }
}
function sorted(newlist){
    const finallist = newlist.sort((a,b) => a.Name - b.Name)
    return finallist;
}
helper("#addbutton").onclick = function(){
    helper(".add").disabled = false;
    helper(".update").style.display = "none";
}
function student(){
    let newlist = list.listperson.filter((person) =>{
        if(list.checkstates(person) == 1){
            return person;
        }
    })
    Render(newlist);
}
function employee(){
    let newlist = list.listperson.filter((person) =>{
        if(list.checkstates(person) == 2){
            return person;
        }
    })
    Render(newlist);
}
function customer(){
    let newlist = list.listperson.filter((person) =>{
        if(list.checkstates(person) == 3){
            return person;
        }
    })
    Render(newlist);
}
function method(person){
    if(list.checkstates(person) == 1){
        return person.average();
    }else if(list.checkstates(person) == 2){
        return person.salary_counter();
    }else{
        return "Không tồn tại phương thức "
    }
}
