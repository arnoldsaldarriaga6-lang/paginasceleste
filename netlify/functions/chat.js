exports.handler = async (event)=>{

if(event.httpMethod!=="POST"){

return{
statusCode:405,
body:"Metodo no permitido"
};

}

try{

const apiKey = process.env.OPENAI_API_KEY;

if(!apiKey){

return{

statusCode:200,

body:JSON.stringify({

respuesta:"⚠️ Falta OPENAI_API_KEY"

})

};

}

const { mensaje } = JSON.parse(event.body||"{}");


const response = await fetch(

"https://api.openai.com/v1/chat/completions",

{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":`Bearer ${apiKey}`

},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[

{

role:"system",

content:`Eres el asistente oficial ElCerveceroTV creado por Arnold.
Fanático Sporting Cristal.
Si hay anuncios recomienda Brave o uBlock.`

},

{

role:"user",

content:mensaje

}

]

})

}

);


// 🔥 leer primero texto
const texto = await response.text();

console.log("OPENAI:",texto);


// convertir json seguro
let data;

try{

data = JSON.parse(texto);

}catch{

return{

statusCode:200,

body:JSON.stringify({

respuesta:"⚠️ Error respuesta IA."

})

};

}


// 🔥 SI OPENAI RESPONDE ERROR
if(data.error){

return{

statusCode:200,

body:JSON.stringify({

respuesta:"⚠️ OpenAI dice: "+data.error.message

})

};

}


// 🔥 YA NO ROMPE
const respuesta =

data?.choices?.[0]?.message?.content

|| "🍺 Estoy pensando todavía... intenta otra vez.";


return{

statusCode:200,

body:JSON.stringify({

respuesta

})

};

}catch(error){

console.log("SERVER ERROR",error);

return{

statusCode:200,

body:JSON.stringify({

respuesta:"⚠️ Error servidor "+error.message

})

};

}

};
