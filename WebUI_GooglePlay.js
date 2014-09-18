

var card_template = '<div class="card"><table class="cover"><td class ="cover_cell"><a href="<%=book_link%>"><img class="cover" src="<%=cover_img%>"></a><div class="overlay"></div></td></table><div class="description"><a class="book_title" href="<%=book_link%>"><%=book_title%></a><br><a class="subtitle" href="<%=author_link%>"><%=author%></a><div class ="rate"><%=rate%></div><div class="price"><a href=""><%=price%></a></div><div class ="reason"></div></div></div>'
var cluster_template ='<div class="cluster"><h1 class="cluster_heading"><a href="<%=cluster_link%>"><%=cluster_name%></a><div class ="see_more">더보기 </div></h1><div class ="card_list"><%=card_list%></div></div>'

var BookList=[
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
},
{
	bookLink:"https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
	coverImg:"http://image.book.11st.co.kr/imgprd/1/ebook/2013/04/23/bookcube/M0000001916825_200x273.png",
	bookTitle: "어서와. 연애는 처음이지?" ,
	authorLink: "https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95&hl=en",
	author: "장해정",
	rate: ""  ,
	price: "980원" 
}

]

var ClusterInfo=[
{
	clusterLink: "https://play.google.com/store/books/collection/promotion_1001065_toppaid_bookkr",
	clusterName: "새로나온 도서 "
},
{
	clusterLink: "https://play.google.com/store/books/collection/promotion_1001065_toppaid_bookkr",
	clusterName: "베스트셀러"
}
]



var drop_box= document.querySelector("#drop_down_box");
var genres = document.querySelector("#a_bar_item_1");

genres.addEventListener('click', function(e){ 

	if ( drop_box.style.display == "none"){
		drop_box.style.display = "block";
	}else {
		drop_box.style.display = "none";
	}
	e.stopPropagation();
}
, false);


document.body.addEventListener('click', 
	function(e){
		drop_box.style.display = "none";
	}
	, false);

drop_box.addEventListener('click', showCertainGenre ,false);

function makeBookElement(template, BookList){
	var result = "";
	for(var i = 0; i < BookList.length; i++){
		changed = template.replace("<%=book_link%>", BookList[i].bookLink).replace("<%=cover_img%>", BookList[i].coverImg).replace("<%=book_link%>", BookList[i].bookLink).replace("<%=book_title%>",BookList[i].bookTitle).replace("<%=author_link%>", BookList[i].authorLink).replace("<%=author%>",BookList[i].author).replace("<%=rate%>",BookList[i].rate).replace("<%=price%>", BookList[i].price);

		result+=changed;
	}
	return result;
}

function makeCluster(clusterTemplate, ClusterInfo, cardTemplate){
	var result ="";
	for(var i =0; i< ClusterInfo.length; i++){
		changed = clusterTemplate.replace("<%=cluster_link%>",ClusterInfo[i].clusterLink).replace("<%=cluster_name%>", ClusterInfo[i].clusterName).replace("<%=card_list%>", cardTemplate);

		result +=changed;
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
		temp+=makeBookElement(card_template, BookList);
		replaceStr+=makeCluster(cluster_template, ClusterInfo, temp);

		to_replace.innerHTML=replaceStr;
	};
	seeMoreButton=document.querySelectorAll(".see_more");
	for(var i =0; i<seeMoreButton.length ; i++){
		seeMoreButton[i].addEventListener('click', SeeMore,false);
	}

};

/*
	function showCertainGenre(ev){
		alert(ev.target.nodeName);
		if(ev.target.className==="cartoon"){change(ev);}
		else if(ev.target.className==="history"){change(ev);}
		
		function change(e){
			e.preventDefault();
			var to_replace = document.getElementById("content_to_replace");
			var replaceStr = "";
			replaceStr=
			"<div class='shelfTop'> 
				<div class='shelfTitle'>
					<a href='http://goo.gl/X6HAi9'></a>
				</div> 
				<div class='shelfSubtitle'>
					<a href='http://goo.gl/X6HAi9'>되라아아아아아아아아아</a>
				</div> 
			</div>";
			replaceStr+="<div class='shelfContent'><ul>";
			replaceStr+=makeBookElement(templateLiContent,BookList);
			replaceStr+="</ul></div>";
			to_replace.innerHTML=replaceStr;
		};

	};

	var elGenreDetailList=document.querySelector(".navigatorMenu_genreSubmenu ul");
	elGenreDetailList.addEventListener('click', showCertainGenre ,false);

	function seeMore(e){
		var currentBooks = e.target.parentNode.parentNode.parentNode.parentNode.innerHTML;
		var result="";

		var appendBooks = makeBookElement(templateLiContent,BookList);

		result+=currentBooks;

		var to_replace = document.querySelector(".body_contents");
		to_replace.innerHTML=result;

		to_replace.querySelector(".shelfContent ul").insertAdjacentHTML('beforeend', appendBooks);




	}
	*/

	var seeMoreButton=document.querySelectorAll(".see_more");
	for(var i =0; i<seeMoreButton.length ; i++){
		seeMoreButton[i].addEventListener('click', SeeMore,false);
	}

	function SeeMore(e){
		e.target.parentNode.nextSibling.style.maxHeight="none"
		var body_contents = document.querySelectorAll(".body_contents");
		for(var i=; i<body_contents.childNodes.length;i++){

		}
	}

	
/*
	var seeMoreButton=document.querySelector(".see_more");
	seeMoreButton.addEventListener('click', function(e){
		alert(e.target.nodeName);
	},false);
	*/


