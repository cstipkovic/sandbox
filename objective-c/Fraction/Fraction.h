//
//  Fraction.h
//  Fraction
//
//  Created by Clauber Stipkovic on 9/21/14.
//  Copyright (c) 2014 CS. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Fraction : NSObject {
    int numerator;
    int denominator;
}

@property int numerator;
@property int denominator;

- (double)toDouble;
- (void)print;

- (void)setNumerator:(int)n andDenominator:(int)d;

- (void)multiply:(Fraction *)anotherFraction;

@end
