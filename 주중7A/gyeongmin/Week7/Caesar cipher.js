function solution(s, n) {
    var answer = '';
    
    //아스키코드로 변환해서 +n 시켜주기
    //65~90 A~Z 97~122 a~z
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' ') answer += ' '
        else{
            let asciiCode = s.charCodeAt(i)
        if(asciiCode <= 90){ //65~90 A~Z
            if(asciiCode + n <= 90) answer += String.fromCharCode(asciiCode + n)
            else answer += String.fromCharCode(asciiCode + n - 26)
        }
        if(asciiCode >= 97){
            if(asciiCode + n <= 122) answer += String.fromCharCode(asciiCode + n)
            else answer += String.fromCharCode(asciiCode + n - 26)
        }
        }   
    }
    
    return answer;
}
