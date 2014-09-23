//
//  Fraction.m
//  Fraction
//
//  Created by Clauber Stipkovic on 9/21/14.
//  Copyright (c) 2014 CS. All rights reserved.
//

#import "Fraction.h"

@implementation Fraction

@synthesize numerator;
@synthesize denominator;

- (double)toDouble {
    return numerator / (double)denominator;
}

- (void)print {
    NSLog(@"Fraction = %i / %i", numerator, denominator);
}

- (void)setNumerator:(int)n andDenominator:(int)d {
    numerator = n;
    denominator = d;
}

- (void)multiply:(Fraction *)anotherFraction {
    numerator *= anotherFraction.numerator;
    denominator *= anotherFraction.denominator;
}

@end
