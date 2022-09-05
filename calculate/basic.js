/**
 * 두 개의 정수를 받아서 연산을 진행합니다.
 */

/**
 * 두 숫자를 전달 받아서 덧셈 후 결과를 반환합니다.
 * @function addition 
 * @param {number} a 전달 받은 첫 번째 숫자 입니다; 모든 정수
 * @param {number} b 전달 받은 두 번째 숫자 입니다; 모든 정수
 * @returns {number} a + b
 */
function addition (a, b) {
    return a + b;
}

/**
 * 두 숫자를 전달 받아서 뺄셈 후 결과를 반환합니다.
 * @function subtraction 
 * @param {number} a 전달 받은 첫 번째 숫자 입니다; 모든 정수
 * @param {number} b 전달 받은 두 번째 숫자 입니다; 모든 정수
 * @returns {number} a - b
 */
function subtraction (a, b) {
    return a - b;
}

/**
 * 두 숫자를 전달 받아서 두 수의 크기를 비교하고 큰 수에서 작은 수를 뺀결과를 반환합니다.
 * @function difference 
 * @param {number} a 전달 받은 첫 번째 숫자 입니다; 모든 정수
 * @param {number} b 전달 받은 첫 번째 숫자 입니다; 모든 정수
 * @returns {number} a > b 일때 a - b | a < b 일때 b - a
 */
function difference (a, b) {
    if (a > b) 
        return a - b;
    else (a < b)
        return b - a;
}