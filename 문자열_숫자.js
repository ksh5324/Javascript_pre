let s = "2";
s - 0; // 2;
+s; // 2;
// 묵시적 숫자타입으로 바꾸기

parseInt("3.14"); // 3;
parseFloat("3.14"); // 3.14;
parseInt("3.14 meters"); // 3
parseFloat("3.14 meters"); // 3.14
parseInt("0xFF"); // 255 -> 0x가 있으므로 16진수로 해석
parseInt("0.5"); // 0;
parseInt(".5"); // NaN;
parseInt("abc"); // NaN;
parseFloat("\100"); // NaN;

parseInt("101", 2); // 5 -> 2진수로 해석
parseInt("ff", 16); // 255 -> 16진수로 해석