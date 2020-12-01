document.getElementById("error").textContent = "hello"
try{
	function ShowAttr(tab,name){
		if(name in tab)
			document.getElementById(name).textContent = String(tab[name])
		else
			document.getElementById(name).textContent = ""
	}

	function ShowError(msg){
		document.getElementById("error").textContent = String(msg)
	}

	browser.tabs.query({active:true}).then((tabs)=>{
		if(tabs.length!=1)
			document.getElementById("activeTabs").textContent = String(tabs.length)
		else{
			curtab = tabs[0]
			ShowAttr(curtab,"active")
			ShowAttr(curtab,"highlighted")
			ShowAttr(curtab,"hidden")
			ShowAttr(curtab,"incognito")
			ShowAttr(curtab,"index")
			ShowAttr(curtab,"isArticle")
			ShowAttr(curtab,"isInReaderMode")
			ShowAttr(curtab,"lastAccessed")
			ShowAttr(curtab,"pinned")
			ShowAttr(curtab,"windowId")
			
			ShowAttr(curtab,"attention")
			ShowAttr(curtab,"audible")
			ShowAttr(curtab,"autoDiscardable")
			ShowAttr(curtab,"discarded")
			ShowAttr(curtab,"mutedInfo")
			ShowAttr(curtab,"height")
			ShowAttr(curtab,"width")
			ShowAttr(curtab,"id")
			ShowAttr(curtab,"openerTabId")
			ShowAttr(curtab,"successorTabId")
			ShowAttr(curtab,"status")
			
			ShowAttr(curtab,"favIconUrl")
			ShowAttr(curtab,"title")
			ShowAttr(curtab,"url")
			ShowAttr(curtab,"cookieStoreId")
			
		}
	})
	.catch((err)=>{
		ShowError(err.message)
	})
}catch(err){
	ShowError(err.message)
}