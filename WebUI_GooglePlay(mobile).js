


var startX=0, startY=0, endX=0, endY=0;

var ele=document.querySelector(".card_list");
console.log(ele);

ele.addEventListener("touchstart", function(e) {
	startX = e.targetTouches[0].clientX;
	startY = e.targetTouches[0].clientY;
	console.log(startX, startY);
}, false);

ele.addEventListener("touchend", function(e) {
	endX = e.changedTouches[0].clientX;
	endY = e.changedTouches[0].clientY;
	console.log(endX, endY);
	cardFlicking(e);
}, false);






function cardFlicking(e){

	var temp= ele.style.marginLeft;
	var tempInt;

	if((startX-endX>100) && -20<(startY-endY)<20){

		if(temp===""){
			console.log("move!");
			ele.style.marginLeft = -170;
		}
		else{
			tempInt = parseInt(temp);
			tempInt -=170;
			temp = tempInt.toString();
			ele.style.marginLeft = temp
		}
	}
	if((startX-endX<-100) && -20<(startY-endY)<20){
		if(temp===""){
			console.log("move!");
			ele.style.marginLeft = 170;
		}
		else{
			tempInt = parseInt(temp);
			tempInt +=170;
			temp = tempInt.toString();
			ele.style.marginLeft = temp
		}
	}

}

/*
+(function() {
+    // touch 시작시 발생하는 좌표정보 저장
+    var startclientX;
+    var startclientY;
+
+    // touch 종료시 발생하는 좌표 저장 
+    // 실제로는 touchend 이벤트에서 좌표값을 저장하고 싶었으나
+    // touchend 이벤트에는 touch이벤트 값이 없어서
+    // touchmove 이벤트에서 좌표를 계속적으로 추적함
+    var endclientX;
+    var endclientY;
+
+    // 기기의 대각선 기울기를 구한후 4로 나누어 주면 각도가 약 25도 정도 나오는것 같음
+    var deviceslope = screen.availHeight / screen.availWidth / 4;
+
+    // 사용자가 매우 빠른 속도로 flicking 을 시도할때 발생하는 오류 대응하기 위해 timestamp를 추적함
+    var recenttimestapmArray = [];
+    var timecount = 0;
+
+    // marginLeft값을 동적으로 변경시키기 위한 목적으로 IntervalManager를 운용
+    var IntervalManager;
+
+    // touch 이벤트를 인식하게 할 target Element
+    // eventDelegation 기법 활용함
+    var flick_targetEle = document.getElementById("main-wrapper").querySelector("ul li:nth-of-type(1)");
+
+    // flick_targetEle에 등록된 eventListener에 의해 실제로 움직이게 될 대상 
+    var targetEle = document.getElementById("main-wrapper").querySelector(".main-contents .section1");
+
+    // touchstart event 등록
+    flick_targetEle.addEventListener("touchstart", function(e) {
+        if (e.target.nodeName !== "UL") {
+            // 실제 움직여야 하는 UL을 찾는 과정
+            var temp = e.target.parentElement;
+
+            while (temp.nodeName !== "UL") {
+                temp = temp.parentElement;
+            }
+
+            // 실제 움직여야 하는 UL을 찾았을 경우 터치가 시작하는 지점의 좌표를 저장
+            if (temp.className === "section1") {
+                startclientX = e.targetTouches[0].clientX;
+                startclientY = e.targetTouches[0].clientY;
+            }
+        }
+    }, false);
+
+    // touchmove event 등록
+    flick_targetEle.addEventListener("touchmove", function(e) {
+        if (e.target.nodeName !== "UL") {
+            // 실제 움직여야 하는 UL을 찾는 과정
+            var temp = e.target.parentElement;
+
+            while (temp.nodeName !== "UL") {
+                temp = temp.parentElement;
+            }
+
+            // 실제 움직여야 하는 UL을 찾았을 경우 터치가 끝나는 지점의 좌표를 저장
+            if (temp.className === "section1") {
+                endclientX = e.targetTouches[0].clientX;
+                endclientY = e.targetTouches[0].clientY;
+            }
+        }
+    }, false);
+
+    // touchend event 등록
+    flick_targetEle.addEventListener("touchend", flickingHandler, false);
+
+    // flicking 좌/우 횟수를 계산해서 marginLeft값 계산을 위해 운용하는 변수
+    var Lflickcount = 0;
+    var Rflickcount = 0;
+
+    // 사용자의 touch가 완료되었을때 해야할 모든 역할을 정의
+    // touchend eventListener가 호출함
+    function flickingHandler(ev) {
+        // 터치 변화량 측정
+        endclientX = ev.changedTouches[0].clientX;
+        endclientY = ev.changedTouches[0].clientY;
+
+        // 유저가 flicking하는 동안 입력된 손가락의 이동 각도륵 계산함
+        userslope = Math.abs((endclientY - startclientY) / (endclientX - startclientX));
+
+        // 만약 스마트폰이 아닌 대화면 기기로 확인되면 flicking 이벤트를 무력화 시킴
+        if (screen.width / devicePixelRatio >= 400) {
+            return;
+        }
+
+        // 만약 사용자가 상하 스크롤이 원할경우 좌우 스크롤을 무력화 시
+        // deviceslope가 약 25도 정도의 각도로 설정되어 있으므로 
+        // 사용자가 25도 이상의 각도로 스크롤을 했을 경우 상하 이동으로 간주함
+        if (userslope > deviceslope) {
+            return;
+        }
+
+        // 사용자가 반복적인 플리킹을 매우 빠른속도로 진행할 경우 오류가 발생하므로 
+        // 사용자 플리킹 시도가 매우 빠른 시간내에 반복될 경우 방어하기 위해 timestamp를 기록함
+        recenttimestapmArray[timecount] = ev.timeStamp;
+
+        // 사용자가 매우 빠른 속도로 flicking 을 시도할때 발생하는 오류 대응
+        // 사용자 플리킹 시도가 0.5초 이내에 다시 발생할 경우 플리킹 무력화
+        if (recenttimestapmArray[timecount] - recenttimestapmArray[timecount - 1] < 500) {
+            return;
+        }
+
+        // 타입스탬프 배열의 index 증가
+        timecount++;
+
+        // flicking navigation 관리용 변수
+        var navi = document.getElementById("flick_navigation").querySelectorAll("Span");
+
+        // 왼쪽 - 사용자의 손가락이 오른쪽에서 왼쪽 방향으로 35 이상 움직여 졌을 경우 왼쪽으로 컨텐츠 이동 
+        if (startclientX - endclientX > 35) {
+            IntervalManager = setInterval(slideLeft, 1);
+            ++Lflickcount;
+
+            // flicking navigation 색상 변경
+            if (Lflickcount - Rflickcount === 3) return;
+            navi[Lflickcount - Rflickcount].style.backgroundColor = "#000";
+            navi[Lflickcount - Rflickcount - 1].style.backgroundColor = "#AAAAAF";
+        }
+
+        // 오른쪽 - 사용자의 손가락이 왼쪽에서 오른쪽 방향으로 35 이상 움직여 졌을 경우 오른쪽으로 컨텐츠 이동
+        if (startclientX - endclientX < -35) {
+            IntervalManager = setInterval(slideRight, 1);
+            ++Rflickcount;
+
+            // flicking navigation 색상 변경
+            if (Lflickcount - Rflickcount === -1) return;
+            navi[Lflickcount - Rflickcount].style.backgroundColor = "#000";
+            navi[Lflickcount - Rflickcount + 1].style.backgroundColor = "#AAAAAF";
+        }
+    }
+
+    // 사용자가 오른쪽에서 왼쪽으로 flicking을 시도할 경우
+    function slideLeft() {
+        // 오른쪽에 더이상 보여줄 컨텐츠가 없을경우 반동하는 animation
+        if (parseInt(targetEle.style.marginLeft) <= -770) {
+            clearInterval(IntervalManager);
+            flickingNoMoreHandler("left");
+        }
+
+        // 오른쪽에서 왼쪽으로 flicking animation 종료 조건
+        if (parseInt(targetEle.style.marginLeft) <= -328 * (Lflickcount - Rflickcount)) {
+            clearInterval(IntervalManager);
+        }
+
+        // 오른쪽에서 왼쪽으로 flicking animation 진행
+        targetEle.style.marginLeft = targetEle.style.marginLeft.replace("px", "") - 3.5 + "px";
+    }
+
+    // 사용자가 왼쪽에서 오른쪽으로 flicking을 시도할 경우
+    function slideRight() {
+        // 왼쪽에 더이상 보여줄 컨텐츠가 없을경우 반동하는 animation
+        if (parseInt(targetEle.style.marginLeft) >= 100) {
+            clearInterval(IntervalManager);
+            flickingNoMoreHandler("right");
+        }
+
+        // 왼쪽에서 오른쪽으로 flicking animation 종료 조건
+        if (parseInt(targetEle.style.marginLeft) >= -333 * (Lflickcount - Rflickcount)) {
+            clearInterval(IntervalManager);
+        }
+
+        // 왼쪽에서 오른쪽으로 flicking animation 진행
+        targetEle.style.marginLeft = targetEle.style.marginLeft.replace("px", "") * 1 + 3.5 + "px";
+
+    }
+
+    // 더이상 보여줄 콘텐츠가 없을때에 보여지는 애니메이션 함수
+    function flickingNoMoreHandler(direction) {
+
+        if (direction === "left") {
+            IntervalManager = setInterval(function() {
+                // 반대방향으로 슬라이드 하며 원위치 회복
+                targetEle.style.marginLeft = targetEle.style.marginLeft.replace("px", "") * 1 + 1.5 + "px";
+
+                // 제위치를 찾았을 경우
+                if (targetEle.style.marginLeft.replace("px", "") > -664) {
+                    clearInterval(IntervalManager);
+                    // 다음 컨텐츠 화면 뷰로 이동하지 못했었으므로 회복시켜 줌 
+                    Rflickcount++;
+                }
+            }, 3);
+        }
+
+        if (direction === "right") {
+            IntervalManager = setInterval(function() {
+                // 반대방향으로 슬라이드 하며 원위치 회복
+                targetEle.style.marginLeft = targetEle.style.marginLeft.replace("px", "") * 1 - 1.5 + "px";
+
                // 제위치를 찾았을 경우
                if (targetEle.style.marginLeft.replace("px", "") < 0) {
                    clearInterval(IntervalManager);
                    // 다음 컨텐츠 화면 뷰로 이동하지 못했었으므로 회복시켜 줌 
                    Lflickcount++;
                }
            }, 3);
        }
    }
})();
*/