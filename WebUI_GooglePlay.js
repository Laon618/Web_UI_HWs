var templates=[
{
	card_template: '<div class="card"><table class="cover"><td class ="cover_cell"><a href="<%=book_link%>"><img class="cover" src="<%=cover_img%>"></a><div class="overlay"></div></td></table><div class="description"><a class="book_title" href="<%=book_link%>"><%=book_title%></a><br><a class="subtitle" href="<%=author_link%>"><%=author%></a><div class ="rate"><%=rate%></div><div class="price"><a href=""><%=price%></a></div><div class ="reason"></div></div></div>',
	cluster_template: '<div class="cluster"><h1 class="cluster_heading"><a href="<%=cluster_link%>"><%=cluster_name%></a><div class ="see_more">더보기 </div></h1><div class ="card_list"><%=card_list%></div></div>'
}
]

window.addEventListener('load', addAllEvents(), false);

function addAllEvents(){

	addShowGenreList();

	addShowCertainGenre();

	addSeeMoreEvent();

}

function addShowGenreList(){
	var drop_box= document.querySelector("#drop_down_box");
	var genres = document.querySelector("#a_bar_item_1");

	genres.addEventListener('click', function(e){ 
		if ( drop_box.style.display == "none")drop_box.style.display = "block";
		else drop_box.style.display = "none";
		e.stopPropagation();
	}
	, false);


	document.body.addEventListener('click', 
		function(e){
			drop_box.style.display = "none";
		}
		, false);
}

function addShowCertainGenre(){
	var drop_box= document.querySelector("#drop_down_box");
	drop_box.addEventListener('click', showCertainGenre ,false);
}


function addSeeMoreEvent(){
	var seeMoreButton=document.querySelectorAll(".see_more");
	for(var i =0; i<seeMoreButton.length ; i++){
		seeMoreButton[i].addEventListener('click', SeeMore,false);
	}

	function SeeMore(e){
		var cardList = e.target.parentNode.nextSibling
		cardList.style.maxHeight="none"

		var newBooks="";
		newBooks+=makeBookElement(templates[0].card_template, getBookData());
		cardList.insertAdjacentHTML('beforeend', newBooks);
	}

}


function makeBookElement(template, BookList){
	var result = "";
	for(var i = 0; i < BookList.length; i++){
		changed = template.replace("<%=book_link%>", BookList[i].bookLink).replace("<%=cover_img%>", BookList[i].coverImg).replace("<%=book_link%>", BookList[i].bookLink).replace("<%=book_title%>",BookList[i].bookTitle).replace("<%=author_link%>", BookList[i].authorLink).replace("<%=author%>",BookList[i].author).replace("<%=rate%>",BookList[i].rate).replace("<%=price%>", BookList[i].price);

		result+=changed;
	}
	return result;
}


function showCertainGenre(ev){
	if(ev.target.className==="cartoon"){change(ev);}
	else if(ev.target.className==="history"){change(ev);}

	function change(e){
		e.preventDefault();
		var to_replace = document.querySelector(".body_contents");
		var replaceStr = "";
		var temp="";
		var BookList =  getBookData();
		var ClusterInfo= getClusterInfo();
		temp+=makeBookElement(templates[0].card_template, BookList);
		replaceStr+=makeCluster(templates[0].cluster_template, ClusterInfo, temp);

		to_replace.innerHTML=replaceStr;
	};

	function makeCluster(clusterTemplate, ClusterInfo, cardTemplate){
		var result ="";
		for(var i =0; i< ClusterInfo.length; i++){
			changed = clusterTemplate.replace("<%=cluster_link%>",ClusterInfo[i].clusterLink).replace("<%=cluster_name%>", ClusterInfo[i].clusterName).replace("<%=card_list%>", cardTemplate);

			result +=changed;
		}
		return result;
	}	

	function getClusterInfo(){
		var url ="http://localhost:8000/clusterInfo.json"
		var request = new XMLHttpRequest();
		request.open("GET", url, false);
		request.send(null);
		var result;
		if(request.readyState ===4 && request.status ===200){
			result = request.responseText;
			result = JSON.parse(result);
		}
		return result;
	}

	addSeeMoreEvent();
}

function getBookData(){
	var url ="http://localhost:8000/bookList.json"
	var request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send(null);
	var result;
	if(request.readyState ===4 && request.status ===200){
		result = request.responseText;
		result = JSON.parse(result);
	}
	return result;
}



