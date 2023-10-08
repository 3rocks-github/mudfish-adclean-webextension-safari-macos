//
//  ContentBlockerRequestHandler.swift
//  Mudfish Adclean Content Blocker
//
//  Created by Weongyo Jeong on 10/7/23.
//

import Foundation

class ContentBlockerRequestHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        let attachment = NSItemProvider(contentsOf: Bundle.main.url(forResource: "blockerList", withExtension: "json"))!
        
        let item = NSExtensionItem()
        item.attachments = [attachment]
        
        context.completeRequest(returningItems: [ item ], completionHandler: nil)
    }
    
}
