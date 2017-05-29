//jshint esversion: 6

const reverseString = s => s.split('').reverse().join('');

const factorialize = num => num ? num * factorialize(num-1) : 1;

const palindrome = s => s.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');

const findLongestWord = s => s.split(' ').reduce((a, v) => Math.max( a, v.length ),[]);

const titleCase = s=> s.split(" ").map(e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() ).join(" ");

const largestOfFour = x => x.map(v => v.reduce((a,v) => Math.max( a, v )));

const confirmEnding = (s, t) => s.substr(s.length - t.length,s.length)==t;

const repeatStringNumTimes=(s,n)=>(n--<0)?"":(n===0)?s:s.concat(repeatStringNumTimes(s,n));

const truncateString=(s,n)=>(n<=3)?`${s.slice(0,n)}...`:(n>=s.length)?s:`${s.slice(0, n-3)}...`;

const chunkArrayInGroups=(a,s)=>a.length===0?[]:[a.slice(0,s)].concat(chunkArrayInGroups(a.slice(s),s));

const slasher = (a,h) => { while(h>0){ a.shift(); h--}return (h<a.length) ?a : []};

const mutation = x => x[1].length==x[1].toLowerCase().split('').reduce((a,v)=>(x[0].toLowerCase().match(v))?a+1:a,0);

const bouncer = a => a.filter(v => v);

function destroyer(){let[one,...rest]=arguments;return one.filter(v=>(rest.some(e=>e==v))?false:true);}

const getIndexToIns=(r,n)=>r.reduce((a,e,i)=>(n>e)?a+1:a,0);

const rot13=(s)=>s.split('').map(v=>String.fromCharCode((c=v.charCodeAt(0))?(c>64 && c<91)?(c=c+13)?(c>90)?c-26:c:c:c:v.charCodeAt(0))).join('');

const sumAll=s=>{let [a,b]=s, x=Math.max(a,b), n=Math.min(a,b);return (n==x)?n:sumAll([n+1,x])+n}

const diffArray=(o,t)=>o.concat(t).filter(v=>(o.some(x=>x==v)&&t.some(x=>x==v))?false:true)

//roman numeral needs work

const whatIsInAName=(c,s)=>c.filter(obj=>Object.keys(s).every(key=>obj.hasOwnProperty(key)&&obj[key]===s[key]))

const myReplace = (str, bef, aft) => str.replace(bef,(m, o, s)=>(s.charCodeAt(o)>64&&s.charCodeAt(o)<91) ? aft.charAt(0).toUpperCase().concat(aft.slice(1,aft.length)) : aft)

function translatePigLatin(str) {var vowels = ['a', 'e', 'i','o','u'];return (vowels.includes(str[0])) ? str+'way' : (!vowels.includes(str[0]) && !vowels.includes(str[1])) ? str.slice(2)+str.slice(0,2)+'ay' : str.slice(1)+str[0]+'ay'}

const pairElement=s=> s.split("").map(v=>v.split("").concat({"A":"T","T":"A","C":"G","G":"C"}[v]));

const fearNotLetter=s=>s.split('').reduce((a,v,i,r)=>(a!=null)?a:(i>0 && v.charCodeAt(0)-1 != r[i-1].charCodeAt(0))?String.fromCharCode(v.charCodeAt(0)-1):undefined ,null);

const booWho = b => (b===true||b===false) ? true : false

//sorted Union needs work

//html entities need work

//spinal tap case

//sum all odd fibonacci

//sum all primes

//smallest commons

const findElement = (a, f) => a.find(n => f(n));

const dropElements=(a,f)=>a.reduce((c,v)=>(c.length)?c.concat(v):(f(v))?c.concat(v):c,[])

const steamrollArray=a=>a.reduce((c,v)=>c.concat((Array.isArray(v))?steamrollArray(v):v),[])

//binary agents

const telephoneCheck=s=>/^1? ?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/.test(s);

const truthCheck = (c,p) => c.every(v => (v.hasOwnProperty(p)) ? v[p] : "");

const addTogether=(x,y)=>(typeof x!=="number")?undefined:(!y)?y=>(typeof y==="number")?x+y:undefined:(typeof(x+y)==='number')?x+y:undefined

function sym(){return Array.from(arguments).reduce((a,e)=>a.concat(e).filter(v=>(a.some(x=>x==v)&&e.some(x=>x==v))?false:true)).filter((v,i,a)=>v!=a[i+1])}
