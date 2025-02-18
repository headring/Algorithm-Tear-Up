// [PGS] 문자열 내림차순으로 배치하기 / leve1
// 난이도 :  level 1
// 풀이시간 :  5분
// 점수 :   .

/*
문제
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
입출력 예
s	return
"Zbcdefg"	"gfedcbZ"
*/

/*
< 의사코드 >
1. 입력받은 문자열 s의 값 하나하나를 보기 위해 split으로 문자열을 쪼개서 sort로 정렬 후 sort는 기본 오름차순이니 다시 reverse로 내림차순정렬을 해 주었다.
2. split()으로 쪼갠 후 다시 합친 값으로 반환해야 하니 join()을 사용하여 하나의 문자열로 만들어 주었다.
*/


function solution(s) {
    return s.split('').sort().reverse().join('');
 }

 /*
 테스트 1 〉통과 (0.05ms, 30.2MB)
테스트 2 〉	통과 (0.04ms, 30.1MB)
테스트 3 〉	통과 (0.06ms, 30.1MB)
테스트 4 〉	통과 (0.05ms, 30.2MB)
테스트 5 〉	통과 (0.16ms, 30MB)
테스트 6 〉	통과 (0.09ms, 30.2MB)
테스트 7 〉	통과 (0.05ms, 30.1MB)
테스트 8 〉	통과 (0.09ms, 30MB)
테스트 9 〉	통과 (0.08ms, 30.1MB)
테스트 10 〉	통과 (0.07ms, 30MB)
테스트 11 〉	통과 (0.05ms, 30.1MB)
테스트 12 〉	통과 (0.05ms, 30.2MB)
테스트 13 〉	통과 (0.05ms, 30.2MB)
테스트 14 〉	통과 (0.04ms, 29.9MB)
테스트 15 〉	통과 (0.12ms, 30.2MB)
테스트 16 〉	통과 (0.04ms, 30.1MB)
 */