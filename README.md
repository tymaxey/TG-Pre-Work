# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

My computer (the client) sends an HTTP request to wherever techtonic.com's server is requesting data to be returned, similar to placing a phone call.

## From start to finish how does that data reach you to be rendered in the browser?

The data stored on Techtonic's servers is sent through physical cables via a combination of electronic signals representing 1's and 0's to various routers, or switches, until it locates the IP address associated with my computer where it is reassembled in the browser.

## What code is rendered in the browser?

HTML along with other files (image, video, etc). The HTML is typically styled using CSS and made interactive using JavaScript.

## What is the server-side code’s main function?

To be available when a request is made to access that code, deliver it securely, and tell the client-side how it should be rendered.

## What is the client-side code’s main function?

To interpret and display the code (via the BOM/DOM and browser) in a way that a human can view and/or interact with it.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance for every request. Browsers can cache data for future visits reducing the number of requests made.

## How many instances of the server-side code are available at any given time?

One.

## What is runtime?

The length of time a program is being used.

## How many instances of the databases connected to the server application are created?

Multiple instances can exist, depending on how many requests are made that require new data.
