//
//  ViewController.swift
//  HelloWorldSwift
//
//  Created by Clauber Stipkovic on 3/21/15.
//  Copyright (c) 2015 CS Inc. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var nameLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func HelloWorldAction(nameTextField : UITextField) {
        nameLabel.text = "Hi"
    }
}

