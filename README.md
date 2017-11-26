# ad-feedback
Observe how people respond to advertisements.

Companies spend tons of money on advertising, but they do not know if their ads have the desired impact on their audience. Ad-feedback allows advertisers to receive direct feedback from the public.

#### 1. First, an ad is uploaded to the server:

<p align="left">
  <img src="https://raw.githubusercontent.com/The-Real-Taylor-Swift/ad-feedback/master/Screenshots/uploading-ads.PNG" width="350"/>
</p>


#### 2. The ad is shown, and viewers' emotions are displayed in real-time.

<p align="left">
  <img src="https://raw.githubusercontent.com/The-Real-Taylor-Swift/ad-feedback/master/Screenshots/real-time-emotion-detection.PNG" height="400"/>
</p>

If multiple ads have been uploaded, the page flips through each ad every ten seconds.
We used clmtrackr, a library for face analysis, to detect emotions in the browser.


#### 3. The viewers' reactions to each ad are sent to the server.
Below is a log of reactions to each of three ads.

<p align="left">
  <img src="https://raw.githubusercontent.com/The-Real-Taylor-Swift/ad-feedback/master/Screenshots/logging-responses-to-each-of-three-ads.PNG" height="400"/>
</p>

Each array contains 3 arrays, each representing one ad.
