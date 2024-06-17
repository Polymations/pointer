function point(s,i){
  let lnz = s[s.length-1].findLastIndex(item=>!!item);
  let r = s.length-s[s.length-1][lnz]-1;
  let j=s[s.length-1]
  s[s.length-1]=s[s.length-1].map((item,id)=>id<lnz?item:!s[r][id]?0:s[r][id]+s[s.length-1][lnz]);
  let b=s.slice(r+1,s.length);
  for(let h=0;h<i;h++){
    b=b.map((item,id)=>item.map(item2=>item2<=id+1?item2:item2+j[lnz]))
    s.push(...b);
  }
  return s;
}
function bmdecr(i,t,M){
  let e=0
  while(M.some(item=>item.length)){
    if(!M[M.length-1].every(item=>!item)){
    M=M.length<t?point(M,i):point(M,i).slice(0,t+1);
    console.clear();
    console.log(M.map(item=> '('+item+')').join('')+' '+e);
    e++
    }
    else{
      M=M.slice(0,-1);
      console.log(M.map(item=> '('+item+')').join('')+' '+e);
      e++
    }
  }
  return;
}
module.exports={point,bmdecr};