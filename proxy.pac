function FindProxyForURL(url, host){
  var blockedDomains = ["mesu.apple.com","appldnld.apple.com"];
  return blockedDomains.includes(host) ? "PROXY 8.8.8.8:53" : "DIRECT";
}
