var device="desktop"

function main()
{
 const html=document.documentElement
 const a=html.getElementsByTagName("head")
 const head=a[0]
 const link=document.createElement("link")
 const css=device+".css"

 link.setAttribute("href",css)
 link.setAttribute("rel","stylesheet")

 head.appendChild(link)
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
