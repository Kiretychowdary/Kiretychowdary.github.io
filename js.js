// fav="KRISHNA"
// guess=prompt("Enter the Favourite LOVE");
// while(guess==fav)
// {
//     console.log("YEAH");
//     guess=prompt("Enter The Favourite LOVE");
// }

// let a=[["Krishna radha","shiva paravathi","rama sita","Gnaesha"],["Ammananna","friends"]]
// for(let i=0;i<a.length;i++)
// {
//     console.log(`At index ${i}`);
//     for(let j=0;j<a[i].length;j++)
//     {
//         console.log(i+1,j+1,a[i][j]);
//     }
// }
// let list=[]
// while(true)
// {
//     // e=prompt("Plz Enter the Tast to be performed");
//     if(e=="list")
//     {
//         for(l of list)
//         {
//             console.log(l);
//         }
//     }
//     if(e=="add")
//     {
//         // e=prompt("Enter the task");
//         list.push(e);
//         console.log("task added");
//     }
//     if(e=="del")
//     {
//         // e=prompt("Enter the task to delect");
//         list.pop(e);
//     }
// }
// s="lovel";
// console.log("radhakrishnashivaparvathisitaramaa".length);
// console.log(s.indexOf("o"));
// list=[["ammananna","radhakrishna","shivaparvathi","sitarama"],["chinna","edhucation-cricket","friends","love"]];
// for(it of list)
// {
//     for(i of it)
//     {
//         console.log(i);
//     }
// }

// const students=[
//     k={
//         name:"A+",
//         marks:88
//     },
//     l={
//         name:"A++",
//         marks:90
//     },
// ];

// // console.log("Random-Functions");
// // let ram=Math.floor(( Math.random()*5))+1;
// // print(ram);
// function hello()
// {
//     console.log("Radhakrishna");
// }
// hello();
// function dice()
// {
//     let t=Math.floor(Math.random()*6)+1;
//     console.log(t);
// }
// dice();
// console.log('\n');
// console.log("Function to caluculate the avg");
// function avg(a,b,c)
// {
//     console.log(Math.ceil((a+b+c)/2));
// }
// avg(2,3,4)
// // function multiplication(n)
// // {
// //     for(let i=1;i<=10;i++)
// //     {
// //         console.log(n,'x',i,'=',n*i);
// //     }
// // }
// // console.log("Multiplocation table using Given input number n");
// // n=prompt("Enter the value of n");
// // multiplication(n);
// // console.log("Enter the value of n to calculate");
// n=prompt("Enter the value to calculate sum of n natural numbers");
// function cal(n)
// {
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }
// p=cal(n);
// console.log(p);


// console.log("concatination of all strings in given list-");
// function concat(l1)
// {
//     let s="";
//     for(let i=0;i<l1.length;i++)
//     {
//         s+=l1[i];
//     }
//     return s;
// }



// let l1=["ammananna","radhakrishna","shivaparvathi","sitarama"];
// console.log(l1.length);
// for(let i=0;i<4;i++)
// {
//     p=prompt("Enter the string value");
//     l1.push(p);
// }
// console.log(concatenate(l1));

// let geeks="radha krishna";
// function outer()
// {
//     let geeks="ammananna";
//     console.log(geeks);
//     function inner()
//     {
//         console.log(geeks);
//     }
// }

// console.log(geeks);
// outer();
// console.log(onpause());

// const students={
//     name:"radhakrishnaaaaaa",
//     getVal()
//     {    
//         name="RAHDAKRISHNA",
//         console.log(name);
//     }
// } 

// const mul= (a,b)=>(a+b);

// let random=Math.random()*5+21;
// console.log(random);



// console.log("Hii every one welocome to prem mandir");

// const mul=(a,b)=>{
//     console.log("RADHAKRISHNA");
//     console.log("AMMANANNA");
//     console.log("SHIVAPARVATHI");
//     console.log("SITARAMA");
// }



// setTimeout(()=>{
//     console.log("RAHDKRISHNA");
//     console.log("AMMANANNA");
//     console.log("SHIVAPARVATHI");
//     console.log("SITA-RAMA");
// },4000);

// console.log("HII");

// setInterval(()=>{
//     console.log("RADHAKRISHNA");
//     console.log("SHIVAPARVATHI");
//     console.log("AMMANANNA");
//     console.log("SITARAMA");
// },2000);



// const square=(n)=>(n*n);


// let id=setInterval(()=>{
//     console.log("RAHDKRISHNA")
// },2000);

// setTimeout(()=>
// {
//     clearInterval(id);
// },10000);


// let length=12;
// // console.log(length);
// function callback()
// {
//     console.log(this.length);
// }

// let str1="My love krishnaradha parents shivaparvathi sitarama"
// str1.slice(3)

// forEach
// a=[1,2,3,4,5,6]
// a.forEach((e)=>{
//     console.log(e);
// })


// filter

// let n;
// a=[];
// let p=prompt("ENTER THE SIZE OF LIST");
// n=p;
// for(let i=0;i<n;i++)
// {
//     let p=prompt("Enter the value");
//     a.push(p);
// }



// let a=[10,20,30,40,50]
// let t=a.every((e)=>{
//     return e%10==0
// });
// console.log(t);

// let a=[-1,14,141,-1131]
// let t=a.reduce((t,e)=>{
//     if(t>e)
//     {
//         return e;
//     }
//     else{
//         return t;
//     }
// });
// console.log(t);

let b=document.querySelectorAll("button");
// function hello()
// {
//     for(bt of b)
//     {
//         console.log("RadhaKrishna");
//     }
// }

// b.onclick=function(){
//     console.log("RadhaKrishna");
// };

function hello()
{
    console.log("RadhaKrishna");
    console.log("RadhaKrishna");
}
for(bnt of b)
{
bnt.onclick=hello
}