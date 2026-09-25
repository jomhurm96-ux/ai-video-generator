const $=id=>document.getElementById(id);
$("generate").onclick=async()=>{
 const prompt=$("prompt").value.trim();
 if(!prompt){$("status").textContent="⚠️ Prompt ရေးပါ";return}
 $("generate").disabled=true;
 $("status").textContent="⏳ AI video ဖန်တီးနေပါတယ်...";
 $("result").classList.add("hidden");
 try{
   const r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({prompt,duration:$("duration").value,style:$("style").value,ratio:$("ratio").value})});
   const data=await r.json();
   if(!r.ok) throw new Error(data.error||"Generation failed");
   if(data.videoUrl){
     $("video").src=data.videoUrl;
     $("download").href=data.videoUrl;
     $("result").classList.remove("hidden");
     $("status").textContent="✅ Video ready!";
   }else{
     $("status").textContent=data.message||"Request sent successfully.";
   }
 }catch(e){$("status").textContent="❌ "+e.message}
 finally{$("generate").disabled=false}
};