function normalizeURl(url)
{
  if(url.slice(-1)=="/"){url=url.slice(0,-1)};
  const newURl = new URL(url)
  return `${newURl.hostname}${newURl.pathname}`
}

module.exports = {normalizeURl}