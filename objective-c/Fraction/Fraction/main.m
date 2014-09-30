//
//  main.m
//  Fraction
//
//  Created by Clauber Stipkovic on 9/21/14.
//  Copyright (c) 2014 CS. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "Fraction.h"

int main(int argc, const char * argv[]) {
    
    Fraction *f1 = [[Fraction alloc] init];
    Fraction *f2= [[Fraction alloc] init];
    
    f1.numerator = 2;
    f1.denominator = 3;
    
    [f2 setNumerator:3 andDenominator:4];
    
    [f1 print];
    [f2 print];
    
    [f1 multiply:f2];
    
    [f1 print];
    
    NSLog(@"F1 * F2 = %.lf", [f1 toDouble]);
    
    return NSApplicationMain(argc, argv);
}
