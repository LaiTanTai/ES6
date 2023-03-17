class Person {
    constructor(name,address,id,email){
        this.name = name ;
        this.address = address;
        this.id = id;
        this.email = email ;
    }
}
class Student extends Person{
    constructor(name,address,id,email,math,physic,chemist){
        super(name,address,id,email)
        this.math = math;
        this.physic = physic
        this.chemist = chemist;
    }
    average(){
        return `Điểm Trung Bình : ${(this.math + this.chemist + this.physic)/3}`
    }
}
class Employee extends Person{
    constructor(name,address,id,email,work_amount,work_salary_day){
        super(name,address,id,email)
        this.work_amount = +work_amount;
        this.work_salary_day = +work_salary_day;
    }
    salary_counter(){
        return `Tiền lương : ${formatter.format(this.work_amount*this.work_salary_day)}`
    }
}
class Customer extends Person{
    constructor(name,address,id,email,cop_name,bill,judge){
        super(name,address,id,email);
        this.cop_name = cop_name;
        this.bill = bill ;
        this.judge = judge;
    }
}
class ListPerson {
    listperson = [];
    size(){ 
       return this.listperson.length
    }
    addperson(person){
        this.listperson.push(person)
    }
    checkstates(person){
        if(person.id.indexOf("S") != -1){
            return 1
        }else if(person.id.indexOf("E") != -1){
            return 2
        }else if(person.id.indexOf("C") != -1){
            return 3
        }
        
    }
    checktype(person){
        if(person.id.indexOf("S") != -1){
            return "Học Sinh"
        }else if(person.id.indexOf("E") != -1){
            return "Nhân Viên "
        }else if(person.id.indexOf("C") != -1){
            return "Khách Hàng"
        }
    }
    validationS(name,address,email,math,physic,chemist){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const nameRegex = /^[a-zA-Z0-9ỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ\s]+$/;
        const scoreregex = /^[0-9]{1,2}(\.[0-9]{1,2})?$/
        const addressregex = /^[0-9]+\/[a-zA-Z0-9\s]+/
        let Isvalid = true
        if(!name.trim()){
            helper(".TenS").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!nameRegex.test(name)){
            helper(".TenS").innerHTML = "Tên đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".TenS").innerHTML = ""
        }
        
        if(!address.trim()){
            helper(".addrS").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!addressregex.test(address)){
            helper(".addrS").innerHTML = "Địa chỉ không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".addrS").innerHTML = ""
        }

        if(!email.trim()){
            helper(".EmailS").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!emailRegex.test(email)){
            helper(".EmailS").innerHTML = "Email đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".EmailS").innerHTML = ""
        }
    
        if(!math.trim()){
            helper(".math").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!scoreregex.test(math)){
            helper(".math").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".math").innerHTML = ""
        }
        if(!physic.trim()){
            helper(".physic").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!scoreregex.test(physic)){
            helper(".physic").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".physic").innerHTML = ""
        }
    
        if(!chemist.trim()){
            helper(".chemist").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!scoreregex.test(chemist)){
            helper(".chemist").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false;
        }else{
            helper(".chemist").innerHTML = ""
        }
        
        return Isvalid
    }
    validationE(name,address,email,date,salary){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const nameRegex = /^[a-zA-Z0-9ỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ\s]+$/;
        const scoreregex = /^[0-9]+$/
        const addressregex = /^[0-9]+\/[a-zA-Z0-9\s]+/
        let Isvalid = true
        if(!name.trim()){
            helper(".TenE").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!nameRegex.test(name)){
            helper(".TenE").innerHTML = "Tên đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".TenE").innerHTML = ""
        }
        
        if(!address.trim()){
            helper(".addrE").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!addressregex.test(address)){
            helper(".addrE").innerHTML = "Địa chỉ không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".addrE").innerHTML = ""
        }

        if(!email.trim()){
            helper(".EmailE").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!emailRegex.test(email)){
            helper(".EmailE").innerHTML = "Email đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".EmailE").innerHTML = ""
        }
    
        if(!date.trim()){
            helper(".date").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!scoreregex.test(date)){
            helper(".date").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".date").innerHTML = ""
        }
        if(!salary.trim()){
            helper(".salary").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!scoreregex.test(salary)){
            helper(".salary").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".salary").innerHTML = ""
        }
        return Isvalid
    }
    validationC(name,address,email,cop_name,bill,judge){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const nameRegex = /^[a-zA-Z0-9ỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ\s]+$/;
        const scoreregex = /^[0-9]{1,2}(\.[0-9]{1,2})?$/
        const addressregex = /^[0-9]+\/[a-zA-Z0-9\s]+/
        let Isvalid = true
        if(!name.trim()){
            helper(".TenC").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!nameRegex.test(name)){
            helper(".TenC").innerHTML = "Tên đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".TenC").innerHTML = ""
        }
        
        if(!address.trim()){
            helper(".addrC").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!addressregex.test(address)){
            helper(".addrC").innerHTML = "Địa chỉ không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".addrC").innerHTML = ""
        }

        if(!email.trim()){
            helper(".EmailC").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!emailRegex.test(email)){
            helper(".EmailC").innerHTML = "Email đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".EmailC").innerHTML = ""
        }
    
        if(!cop_name.trim()){
            helper(".namecop").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!nameRegex.test(cop_name)){
            helper(".namecop").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".namecop").innerHTML = ""
        }
        if(!bill.trim()){
            helper(".bill").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!scoreregex.test(bill)){
            helper(".bill").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false
        }else{
            helper(".bill").innerHTML = ""
        }
    
        if(!judge.trim()){
            helper(".judge").innerHTML = "Không được để trống"
            Isvalid = false;
        }else if(!nameRegex.test(judge)){
            helper(".judge").innerHTML = "Điểm đăng nhập không dúng yêu cầu"
            Isvalid= false;
        }else{
            helper(".judge").innerHTML = ""
        }
        
        return Isvalid
    }
}