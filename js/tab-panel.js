var eleId = function(id) {
	return document.getElementById(id);
};

var setAttrib = function(ele, attr, val) {
	return ele.setAttribute(attr, val);
};


var TabPanel = function() {

	var init = function(ch){

		var h3TabSet = false,
		pTabSet = false,
		tabHeadingClass = "tabHeading",
		tabParaClass = "hide",
		panelIndex = "p"+window.inc++,
		subNodes,
		childOfSubNodes,
		tabIndex = 0,
		paraIndex = 0;

		var chNodes = ch.childNodes.length-1;

		setAttrib(ch, "class", "panel");
		setAttrib(ch, "id", panelIndex);

		for(var nodes=0;  nodes<=chNodes; nodes++ )
		{
			subNodes = ch.childNodes[nodes];

			if(subNodes.tagName === "H2"){
				setAttrib(subNodes,"class","panelHeading");				
			} 

			if(subNodes.tagName === "ARTICLE"){
				
				setAttrib(subNodes, "class","tab");

				for(var cNodes=0; cNodes <= subNodes.childNodes.length-1; cNodes++) {

					childOfSubNodes = subNodes.childNodes[cNodes];

					if(childOfSubNodes.tagName === "H3") {

						if(!h3TabSet)
						{
							h3TabSet = true;
							tabHeadingClass = tabHeadingClass + " activeTab";
						}

						tabIndex++;

						setAttrib(childOfSubNodes, "class", tabHeadingClass);
						setAttrib(childOfSubNodes, "id", panelIndex+"_tab_"+tabIndex);
						childOfSubNodes.onclick = toggleTab;

					}

					if(childOfSubNodes.tagName === "P") {


						if(!pTabSet)
						{
							pTabSet = true;
							tabParaClass = "show";
						}

						paraIndex++;
						setAttrib(childOfSubNodes, "class", tabParaClass);
						setAttrib(childOfSubNodes, "id", panelIndex+"_para_"+paraIndex);
					}

					tabHeadingClass = "tabHeading";
					tabParaClass = "hide";
				}
			} 
		}
	};

	var toggleTab = function() {

		parentId = this.parentNode.parentNode.getAttribute("id");
		totalTabs = eleId(parentId).getElementsByTagName("ARTICLE").length;

		currentId = this.getAttribute("id");
		currentIndex = currentId.substr(currentId.length-1);

		setAttrib(this, "class", "tabHeading activeTab");

		thisPara = eleId(parentId+"_para_"+currentIndex);
		setAttrib(thisPara, "class", "show");

		for(var i=1; i<=totalTabs; i++)
		{	
			if(i != currentIndex) {
				otherTab = eleId(parentId+"_tab_"+i);
				setAttrib(otherTab, "class", "tabHeading");
				otherPara = eleId(parentId+"_para_"+i);
				setAttrib(otherPara, "class", "hide");
			}
		}
	};

	return{
		init: init
	}
};




var tabDemo = function() {

	for(var i = 0; i < document.body.children.length; i++) {
		child = document.body.children[i];
		if(child.tagName.toLowerCase() != 'section') continue;

		t = new TabPanel();
		t.init(child);	
		
		window.panels.push(t);
	}
};

var panels = [];
var inc = 1;
window.onload = tabDemo;