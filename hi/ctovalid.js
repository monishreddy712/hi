function validate()
{
var f =document.getElementById("fname").value
var l =document.getElementById("lname").value
var u =document.getElementById("uname").value
var p =document.getElementById("psw").value
var po =document.getElementById("pc").value
var mn=document.getElementById("phno").value
var ei=document.getElementById("em").value
var refi = /[A-Z]/
var reu =/\w/
var repm=/\d/
var reei = /[a-z]@[a-z]*.com/
if(!(!refi.test(f))||!(f.length>=8))
{
 if(!refi.test(f))
   {
     alert("First Name should contain only CAPITAL letters")
   }
  if(f.length>8)
   {
     alert("Length of first name must be less EIGHT")
   }
}
if(!(!refi.test(l))||!(l.length>=8))
{
 if(!refi.test(l))
   {
     alert("Last Name should contain only CAPITAL letters")
   }
  if(!(l.length<=8))
   {
     alert("Length of first name must be EIGHT")
   }
}
if(!reu.test(u))
{
 alert("Username should not contain spaces or special symbols")
}
if(p.length<8)
{
 alert("To secure your account password should be EIGHT characters in length")
}
if(!(!repm.test(po))||!(po.length==6))
{
   if(!repm.test(po))
   {
     alert("Postal code contains only DIGITS")
   }
   if(!(po.length==6))
   {
    alert("Length of postal card must be SIX")
   }
}
if(!reei.test(ei))
{
  alert("Please check out your EMAIL-ID")
}
if(!(!repm.test(mn))||!(mn.length==10))
{
  if(!repm.test(mn))
   {
    alert("Mobile number contains only DIGITS")
    }
  if(!(mn.length==10))
  {
   alert("Length of phone number must be 10 digits")
 }
}
} 