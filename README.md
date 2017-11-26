# ad-feedback
Observe how people respond to advertisements.

Companies spend tons of money on advertising, but they do not know if their ads have the desired impact on their audience. Ad-feedback allows advertisers to receive direct feedback from the public.

First, an ad is uploaded to the server:
![Uploading ads](https://raw.githubusercontent.com/the-real-taylor-swift/ad-feedback/master/Screenshots/uploading-ads.png)

The ad is shown, and viewers' emotions are displayed in real-time.
![Real-time emotion detection](https://raw.githubusercontent.com/the-real-taylor-swift/ad-feedback/master/Screenshots/real-time-emotion-detection.png)
If multiple ads have been uploaded, the page flips through each ad every ten seconds.
We used clmtrackr, a library for face analysis, to detect emotions in the browser.

The viewers' reactions to each ad are sent to the server. Below is a log of reactions to each of three ads.
![Logging responses](https://raw.githubusercontent.com/the-real-taylor-swift/ad-feedback/master/Screenshots/logging-responses-to-each-of-three-ads.png)
Each array contains 3 arrays, each representing one ad.
