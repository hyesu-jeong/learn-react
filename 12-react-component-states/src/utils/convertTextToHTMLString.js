export function convertHTMLToText(htmlString) {
  return htmlString
    .replace(/<[^>]+>/g, ($1) => {
      if ($1.includes('/')) return '\n\n';
      return '';
    })
    .trim();
}

export function convertTextToHTMLString(text, tagName = 'p') {
  if (typeof text !== 'string') {
    throw new Error('잘못된 입력: 텍스트는 문자열이어야 합니다.');
  }

  return text
    .split('\n')
    .filter(Boolean)
    .reduce(
      (htmlString, line) => htmlString + `<${tagName}>${line}</${tagName}>`,
      ''
    );
}
