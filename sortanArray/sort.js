function fun()
{
    let a= ["rohith","sridhar","ganesh"];

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
    document.getElementById("demo").innerHTML = a;


}