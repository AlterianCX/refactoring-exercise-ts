# Refactoring Challenge for Alterian Web Development Job Application

Thanks for taking the time to look at this refactoring exercise. This is to be submitted alongside a CV as part of a job application
for a web developer.

## Instructions

In this fictitious scenario your company has developed some "middle-man" software which allows a client (e.g. a footwear company), to promote offers to their customers, this is contained within 3 classes; Person, Offer and Advert.

Your software is designed to output "adverts" (in this case a 'percent off' value) to customers of the client, along with a piece of content id. It does this for both "Mail" and "Html" output channels. The value of these offers varies on (a) the amount a customer has spent, (b) the number of orders the customer has purchased and (c) the channel they're viewing the offer on.

Imagine that right now this software is run nightly to provide a batch file for an mail/email generating system to send customers offers, and also another batch file to give to the website to drive a dynamic "advert banner". This system doesn't need to deal with the batch file, just the method to produce the data as expected.

Refactor the code so that;
- It can handle more/different levels of offers.
- It can respond to an individual "customer" request for a HTML piece of content (i.e. for this user, what content do i serve and what's the offer value).

Refactor the code so that it'll be easy to update/maintain in the future, and you're confident that it works.

Try to be pragmatic in your refactoring, keep it as simple as possible and try to avoid over-engineering the solution.

## Building and Running

### Clone the Repository
``
git clone git@bitbucket.org:alterian/ui-refactor-tasks.git
``
### Install the Dependencies
``
npm i
``
### Running Tests
``
npm test
``

## Submitting your code/solutions
Once you're done, zip your source code up (don't include `node_modules`) and send it to `ui-dev@alterian.com`, along with your name and CV, and/or attach it to the job application.

## Then what?
One of the team members will have a look over your code, and we'll get back to you, either with an invitation for an interview, or with some suggested feedback based on the exercises to help improve going forward.
