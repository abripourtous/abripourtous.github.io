
var device="desktop"

function main()
{
 alert(device)
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
