browser.tabs.onActivated.addListener(function(tab){
	if(tab.url=="about:newtab")
		browser.sidebarAction.open()
	else
		browser.sidebarAction.close()
})
//D:\Users\feelus\AppData\Roaming\Mozilla\Firefox\Profiles\okm1iq04.default-1529823404085\extensions