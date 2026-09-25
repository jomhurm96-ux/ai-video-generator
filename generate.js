// Vercel Serverless Function
// Replace the demo response with your chosen AI video provider API.
// Keep secret API keys in Vercel Environment Variables — never in index.html/app.js.

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const {prompt,duration,style,ratio}=req.body||{};
  if(!prompt) return res.status(400).json({error:"Prompt is required"});

  // DEMO MODE:
  // This proves the frontend -> backend request works.
  // Next step: connect a real video API here.
  return res.status(200).json({
    ok:true,
    message:"Demo request received. Connect your AI video API in api/generate.js.",
    settings:{prompt,duration,style,ratio}
  });
}