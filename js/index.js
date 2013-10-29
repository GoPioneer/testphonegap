function travel(){  
    if (window.XMLHttpRequest)
     {  // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
     }
    else
     {  // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
     }
        xmlhttp.open("GET","http://www.gopioneer.de/travel.xml",false);
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML;     
        travels = xmlDoc.getElementsByTagName("website");
        alert("travels:"+travels.length);
        var websites = [];
        var description = [];
        var logos = [];     
        for(var travel=0;travel<travels.length;travel++){ websitename="travels[travel].getElementsByTagName("sitename")[0].childNodes[0].nodeValue;" var="" websites.push(websitename);="" des="travels[travel].getElementsByTagName("Description")[0].childNodes[0].nodeValue;" description.push(des);="" images="travels[travel].getElementsByTagName("Image")[0].childNodes[0].nodeValue;" logos.push(images);="" }="" listview="document.getElementById("container");" ul="document.createElement("ul");" for(var="" i="0;i<websites.length;i++){" livalue="document.createTextNode(websites[i]);" desvalue="document.createTextNode(description[i]);" li="document.createElement("li");" table="document.createElement("table");" table1="document.createElement("table");" tr1="document.createElement("tr");" td1="document.createElement("td");" img="new" image();="" img.src="logos[i];" img.setattribute("width",60);="" img.setattribute("height",30);="" img.setattribute('onclick',="" "test()");="" td1.appendchild(img);="" tr1.appendchild(td1);="" tr2="document.createElement("tr");" td2="document.createElement("td");" td3="document.createElement("td");" td2.appendchild(livalue);="" td3.appendchild(desvalue);="" tr1.appendchild(td2);="" tr2.appendchild(td3);="" table.appendchild(tr1);="" table1.appendchild(tr2);="" li.appendchild(table);="" li.appendchild(table1);="" ul.appendchild(li);="" listview.appendchild(ul);="" <="" pre="">
</travels.length;travel++){>