function fun()
{
    var a=prompt("enter the first no");
    var b=prompt("enter the second value");
    var c=prompt("enter the third value");
    if(a>=0&&a<=9)
    {
    if(a>b&&a>c)
    {
        document.write(a+"is largest no");
    }else if(b>c)
    {
        document.write(b+"is largest no");
    }else{
        document.write(c+"is largest");
    }
   }
   else{
    alert("please enter the numbers only");
              fun();
   }
}
