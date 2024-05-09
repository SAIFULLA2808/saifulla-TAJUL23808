function validate()
{
    var  up = /^[A-Za-z]+$/
    var php = /[6-9]{1}[0-9]{9}/

    var uv = document.getElementById("uname").value
    var pv = document.getElementById("phnum").value
    if(uv=="")
    {       
         document.getElementById("msg").innerHTML="Enter the user name."
         
    } 
    if(uv.match(up))
    true;
    else
    {
        document.getElementById("msg").innerHTML="user name should contain only alphabet"
        return false
    }
    if(uv.length<3)
    {
        document.getElementById("msg").innerHTML="user name should be minimum 3 characters"
        return false
    }
        if(uv.length>8)
    {

           document.getElementById("msg").innerHTML="user name should be maximum 8 characters"
           return false

    }
    if(pv=="")
    {
    document.getElementById("msg1").innerHTML="Enter the phone number."
    return false

    }
    if(pv.match(php))
    true;
    else
    {
        document.getElementById("msg1").innerHTML="invalid phone number"
        return false
    }
}

