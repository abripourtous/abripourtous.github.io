
var device="desktop"

function main()
{
 //if(device=="desktop")
 // style_add("img","max-height","30%")
}

function init()
{
 const agent=navigator.userAgent.toLowerCase()

 if(agent.includes("ipad"))
  device="desktop"
 else if(agent.includes("iphone"))
  device="mobile"
 else if(agent.includes("android"))
  device="mobile"

main()
}

addEventListener('DOMContentLoaded',init);
