// Virtual DOM
// 가상 문서 객체 모델
// 실제 DOM을 추상화(단순화)

// virtual
import { createElement } from "./lib/virtual/index.js";
// virtual-dom
import { createRoot } from "./lib/virtual-dom/index.js";

// 실제 DOM에 <figure></figure> 요소를 추가
// 웹 API를 사용하여 문서 객체(Document Object) 생성

// 부모(상위) 요소
const figureElement = document.createElement("figure");
console.dir(figureElement);
// => 실제 돔 객체는 복잡하다.

// 자식(하위) 요소
const figcaptionElement = document.createElement("figcaption");

// 요소간 관계 형성
figcaptionElement.textContent = "hello";
figureElement.append(figcaptionElement);

// 실제 DOM에 마운트(mount, 착장 === 렌더링)
const actualDomElement = document.getElementById("actual-dom");
console.log(actualDomElement);

actualDomElement.append(figureElement);

// -----------------------------------------------------------------------

/// 가상(추산화된, 단순화된) 요소(엘리먼트) 생성

// 자식(하위) 요소
const figcaptionVElement = createElement("figcaption");

// 부모(상위) 요소
const figureVElement = createElement("figure", null, figcaptionVElement);
console.dir(figureVElement);

// virtual-dom / createRoot
// 가상 요소를 실제  DOM 요소로 렌더링

// API : createRoot(container)
const virtualRootElement = document.getElementById("virtual-dom");
const vRoot = createRoot(virtualRootElement);
console.log(vRoot.render);

vRoot.render(figureVElement);
