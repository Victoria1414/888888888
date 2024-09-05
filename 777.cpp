#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Функция для вычисления суммы цифр чисел от 1 до num
long long sumOfDigits(long long num) {
    long long sum = 0;
    long long factor = 1;
    long long lower = 0;
    
    while (num > 0) {
       long long currentDigit = num % 10;
       long long upper = num / 10;
        
         sum += upper * 45 * factor;
         sum += (currentDigit * (currentDigit - 1) / 2) * factor;
         sum += currentDigit * (lower + 1);
        
          lower += currentDigit * factor;
          factor *= 10;
          num = upper;
    }
    
           return sum;
}

int main() {
    long long lowerBound, upperBound;
    
    // Считывание входных данных
      while (cin >> lowerBound >> upperBound) {
        if (lowerBound == 0) {
            cout << sumOfDigits(upperBound) << endl;
        } else {
            cout << sumOfDigits(upperBound) - sumOfDigits(lowerBound - 1) << endl;
        }
    }
    
    return 0;
}
