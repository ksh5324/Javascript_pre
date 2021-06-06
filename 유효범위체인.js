// 자바스크립트가 대다수의 언어와 마찬가지로 어휘적 유효 범위를 채용하고 있씁니다.
// 그래서 변수를 선언하면 그 안쪽에 있는 코드 전체가 그 변수를 사용할 수 있는 유효 범위가 됩니다.
// 예를 들어 전역 변수의 유효 범위는 코드 전체고, 함수 안에 있는 지역 변수의 유효 범위는 함수 안에 있는 전체 코드입니다.
// 따라서 중첩 ㅎ마수와 외부 함수 혹은 전역 코드에서 같은 이름을 가진 변수를 사용하면 충돌이 발생합니다.
// 이때 변수 x가 어디에서 선언된 변수인지를 경정하는 작업을 가리켜 변수 x의 식별자 결정이라고 합니다.

var a = "a";
function f(){
    var b = "b";
    function g(){
        var c = "c";
        console.log(a+b+c);
    }
    g();
}
f();  // -> abc

// 일반적으로 함수의 인수와 지역 변수를 속박 변수라고 하고 그 외 변수를 자유 변수라고 합니다. 앞 코드에서는 c가 속박 변수고 a, b가 자유 변수 입니다.
// 또 속박 변수만 포함한 함수를 닫힌 함수, 자유 변수를 가지고 있는 변수르 열린 함수라고 합니다. 앞 코드에서는 f가 닫힌 함수 g가 열린 함수 입니다.

// 속박 변수 c
// 변수 c는 함수 g안에서 선언된 속박 변수이므로 함수 g의 환경 레코드안에서 찾을 수 있습니다.
// 변수 c는 이것으로 결정 합니다

// 함수 g가 속한 렉시컬 환경 컴포넌트
g_LexicalEnvironment: {
    // 선억적 환경 레코드
    DeclarativeEnvironmentRecord: {
        c: "c"
    },
    // 함수 f의 렉시컬 환경 컴포넌트 참조
    OuterLexicalEnvironmentReference: f_LexicalEnvironment
}

// 함수 f가 호출되면 하수 f의 환경 레코드에 변수 b가 프로퍼티로 추가됩니다.
// 그 후에 함수 g의 선언문이 평가되어 환경 레코드가 생성됩니다.
// 이때 함수 g의 함수 객체가 함수 f의 렉시컬 환경을 참조합니다.

// 함수 g가 속한 렉시컬 환경 컴포넌트
g_LexicalEnvironment: {
    // 선억적 환경 레코드
    DeclarativeEnvironmentRecord: {
        c: "c"
    },
    // 함수 f의 렉시컬 환경 컴포넌트 참조
    OuterLexicalEnvironmentReference: f_LexicalEnvironment
}

// 함수 f가 소ㄱ한 실행 렉시컬 환경 컴포넌트 f_LexicalEnvironment
f_LexicalEnvironment: {
    DeclarativeEnvironmentRecord: {
        b: "b"
    },
    OuterLexicalEnvironmentReference: global_LexicalEnvironment
}


// 자유 변수 a
// 변수 a는 함수 g의 바깥에서 선언된 자유 변수 입니다.

// 함수 g가 속한 렉시컬 환경 컴포넌트
g_LexicalEnvironment: {
    // 선억적 환경 레코드
    DeclarativeEnvironmentRecord: {
        c: "c"
    },
    // 함수 f의 렉시컬 환경 컴포넌트 참조
    OuterLexicalEnvironmentReference: f_LexicalEnvironment
}

// 함수 f가 소ㄱ한 실행 렉시컬 환경 컴포넌트 f_LexicalEnvironment
f_LexicalEnvironment: {
    DeclarativeEnvironmentRecord: {
        b: "b"
    },
    OuterLexicalEnvironmentReference: global_LexicalEnvironment
}

// 전역 실행 환경 global_LexicalEnvironment
global_LexicalEnvironment: {
    ObjectEnvironmentRecord: {
        bindObject: {
            a: "a"
        }
    },
    OuterLexicalEnvironmentReference: null
}

// 이처럼 식별자 결정은 현재의 유효 범위 안에 없는 식별자를 찾을 때 바깥쪽 범위로 호출자의 렉시컬 환경에 속한 외부 렉시컬 환경의 참조를 따라 찾아가는 방식을 취합니다.
// 이러한 논리적인 연결고리를 스코프 체인이라고 합니다.
// 또 유효 범위 체인,외부 렉시컬 환경 체인아라고도 합니다.
