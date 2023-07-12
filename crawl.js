const {JSDOM} = require("jsdom");

function normalizeURl(url)
{
  if(url.slice(-1)=="/"){url=url.slice(0,-1)};
  const newURl = new URL(url)
  return `${newURl.hostname}${newURl.pathname}`
}

function getURLsfromHTML(htmlBody,baseURL)
{
  let url =[];
  const dom = new JSDOM(htmlBody);
 for(let link of dom.window.document.querySelectorAll('a'))
 {
  if(link.href.charAt(0)==="/"){
    try{ new URL(`${baseURL}${link.href}`);
    url.push(`${baseURL}${link.href}`)
  }
  catch(e)
  {
    console.log("Relative   ",e.message)
  }
  }
  else{
    try{
      new URL(link.href);
      url.push(link.href);
    }
    catch(e)
    {
      console.log("Absolute  ",e.message)
    }
  }
 }
  return url;
} 

module.exports = {normalizeURl,getURLsfromHTML}