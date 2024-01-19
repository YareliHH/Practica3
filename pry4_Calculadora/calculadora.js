const adicion=(v1,v2)=>v1+v2;
const sustraccion=(v1,v2)=>v1-v2;
const producto=(v1,v2)=>v1*v2;
const div=(v1,v2)=>{
   if(v1==0)
       return "división inaccesible";   
   else
       return v1/v2;   
}
const mod=(v1,v2)=>v1%v2;
const unoEntre=(v1)=>1/v1;
const cuadrado=(v1)=>v1*v1;
const raiz=(v1)=>Math.sqrt(v1);

export {adicion,sustraccion,producto,div,mod,unoEntre,cuadrado,raiz};
